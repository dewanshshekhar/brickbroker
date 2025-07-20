package com.brickbroker.service;

import com.brickbroker.dto.PropertyRequest;
import com.brickbroker.dto.PropertyResponse;
import com.brickbroker.mapper.PropertyMapper;
import com.brickbroker.model.Property;
import com.brickbroker.model.PropertyStatus;
import com.brickbroker.model.PropertyType;
import com.brickbroker.repository.PropertyRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;


public interface PropertyService {

    PropertyResponse addProperty(PropertyRequest request, MultipartFile[] imageFile);
    List<PropertyResponse> getAllProperties();
    public PropertyResponse getPropertyById(Long id);
    public void deleteProperty(Long id);
    public Page<PropertyResponse> searchProperties(
            String city,
            String state,
            PropertyStatus status,
            PropertyType type,
            Double minPrice,
            Double maxPrice,
            Pageable pageable);
    List<PropertyResponse> getMyProperties();
}