package com.brickbroker.service.impl;

import com.brickbroker.dto.PropertyRequest;
import com.brickbroker.dto.PropertyResponse;
import com.brickbroker.mapper.PropertyMapper;
import com.brickbroker.model.*;
import com.brickbroker.repository.PropertyRepository;
import com.brickbroker.repository.UserRepository;
import com.brickbroker.service.PropertyService;
import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.*;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class PropertyServiceImpl implements PropertyService {

    private final PropertyRepository propertyRepository;
    private final PropertyMapper propertyMapper;
    private final CloudinaryService cloudinaryService;
    private final UserRepository userRepository;

    @Override
    @Transactional
    public PropertyResponse addProperty(PropertyRequest request, MultipartFile[] imageFiles) {
        Property property = PropertyMapper.toEntity(request);
        List<Image> images = new ArrayList<>();

        // ✅ Get the current logged-in user
        String currentEmail = SecurityContextHolder.getContext().getAuthentication().getName();
        User currentUser = userRepository.findByEmail(currentEmail)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        // ✅ Decide property owner
        User owner;

        switch (currentUser.getRole()) {
            case AGENT -> {
                owner = currentUser;
                log.info("Agent [{}] is adding property", currentEmail);
            }

            case ADMIN -> {
                // Admin must provide agentId
                if (request.getAgentId() == null) {
                    throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Agent ID must be provided by admin");
                }

                owner = userRepository.findById(request.getAgentId())
                        .filter(u -> u.getRole() == Role.AGENT)
                        .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Valid agent not found"));
                log.info("Admin [{}] added property on behalf of agent [{}]", currentEmail, owner.getEmail());
            }

            case OWNER -> {
                // Owner can assign agentId or leave it null
                if (request.getAgentId() != null) {
                    owner = userRepository.findById(request.getAgentId())
                            .filter(u -> u.getRole() == Role.AGENT)
                            .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Agent ID is invalid"));
                    log.info("Owner [{}] assigned property to agent [{}]", currentEmail, owner.getEmail());
                } else {
                    // Owner posts property without assigning
                    owner = currentUser;
                    log.info("Owner [{}] is posting property without assigning to agent", currentEmail);
                }
            }

            default -> throw new ResponseStatusException(HttpStatus.FORBIDDEN, "You're not allowed to add property");
        }

        // ✅ Upload property images
        if (imageFiles != null && imageFiles.length > 0) {
            if (imageFiles.length > 5) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Max 5 images allowed");
            }

            for (MultipartFile file : imageFiles) {
                if (file.getSize() > 5 * 1024 * 1024) {
                    throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Image size must be < 5MB");
                }

                Map<String, String> uploadResult = cloudinaryService.uploadFile(file, "brickbroker-properties", "property");

                Image image = new Image();
                image.setUrl(uploadResult.get("url"));
                image.setPublicId(uploadResult.get("public_id"));
                image.setProperty(property);
                images.add(image);
            }
        }

        // ✅ Set relationships
        property.setOwner(owner);
        property.setImageUrls(images);

        // ✅ Auto-fill contact info from owner
        property.setContactName(owner.getName());
        property.setContactEmail(owner.getEmail());
        property.setContactPhone(owner.getPhone());

        property = propertyRepository.save(property);

        log.info("Property [{}] added by [{}] (role: {})", property.getTitle(), currentUser.getEmail(), currentUser.getRole());

        return propertyMapper.toResponse(property);
    }


//    @Override
//    @Transactional
//    public PropertyResponse addProperty(PropertyRequest request, MultipartFile[] imageFiles) {
//        Property property = PropertyMapper.toEntity(request);
//        List<Image> images = new ArrayList<>();
//
//        if (imageFiles != null && imageFiles.length > 0) {
//            if (imageFiles.length > 5) {
//                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Maximum 5 images allowed");
//            }
//
//            for (MultipartFile file : imageFiles) {
//                if (file.getSize() > 5 * 1024 * 1024) {
//                    throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Image size must be less than 5MB");
//                }
//
//                Map<String, String> uploadResult = cloudinaryService.uploadFile(file, "brickbroker-properties", "property");
//
//                Image image = new Image();
//                image.setUrl(uploadResult.get("url"));
//                image.setPublicId(uploadResult.get("public_id"));
//                image.setProperty(property); // 🔥 link the image to the property
//
//                images.add(image);
//            }
//        }
//
//        property.setImageUrls(images); // set images to property
//        property = propertyRepository.save(property);
//
//        return propertyMapper.toResponse(property);
//    }

    @Override
    public List<PropertyResponse> getAllProperties() {
        return propertyRepository.findAll()
                .stream()
                .map(propertyMapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    public PropertyResponse getPropertyById(Long id) {
        Property entity = propertyRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Property not found"));
        return propertyMapper.toResponse(entity);
    }

    @Override
    public void deleteProperty(Long id) {
        Property property = propertyRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Property not found"));

        if (property.getImagePublicIds() != null) {
            for (String publicId : property.getImagePublicIds()) {
                cloudinaryService.deleteFile(publicId);
            }
        }

        propertyRepository.deleteById(id);
    }

    @Override
    public Page<PropertyResponse> searchProperties(
            String city,
            String state,
            PropertyStatus status,
            PropertyType type,
            Double minPrice,
            Double maxPrice,
            Pageable pageable) {

        Page<Property> properties = propertyRepository.search(city, state, status, type, minPrice, maxPrice, pageable);

        return properties.map(propertyMapper::toResponse);
    }

    @Override
    public List<PropertyResponse> getMyProperties() {
        // Logged-in user ka email le rahe hain
        String currentEmail = SecurityContextHolder.getContext().getAuthentication().getName();
        User currentUser = userRepository.findByEmail(currentEmail)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        // Sirf AGENT ke liye allow kar rahe hain
        if (currentUser.getRole() != Role.AGENT) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Only agents can view their properties");
        }

        // Agent ke saare properties fetch karo
        List<Property> properties = propertyRepository.findByOwner(currentUser);

        return properties.stream()
                .map(propertyMapper::toResponse)
                .collect(Collectors.toList());
    }


//    private Map<String, String> uploadFile(MultipartFile file) {
//        try {
//            String publicId = "properties/" + UUID.randomUUID();
//
//            Map uploadResult = cloudinary.uploader().upload(
//                    file.getBytes(),
//                    ObjectUtils.asMap(
//                            "public_id", publicId,
//                            "resource_type", "auto",
//                            "folder", "brickbroker-properties",
//                            "overwrite", true
//                    )
//            );
//
//            Map<String, String> result = new HashMap<>();
//            result.put("url", uploadResult.get("secure_url").toString());
//            result.put("public_id", uploadResult.get("public_id").toString());
//            return result;
//
//        } catch (IOException e) {
//            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Image upload failed", e);
//        }
//    }
//
//    private void deleteFile(String publicId) {
//        try {
//            Map result = cloudinary.uploader().destroy(publicId, ObjectUtils.emptyMap());
//            if (!"ok".equals(result.get("result"))) {
//                throw new IOException("Failed to delete image: " + publicId);
//            }
//        } catch (IOException e) {
//            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Failed to delete image from Cloudinary", e);
//        }
//    }
}
