package com.brickbroker.controller;

import com.brickbroker.dto.PropertyRequest;
import com.brickbroker.dto.PropertyResponse;
import com.brickbroker.model.PropertyStatus;
import com.brickbroker.model.PropertyType;
import com.brickbroker.service.PropertyService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;
import lombok.extern.slf4j.Slf4j;


@Slf4j
@RestController
@RequestMapping("/api/properties")
@CrossOrigin(origins = "*")
public class PropertyController {

    private final PropertyService service;

    public PropertyController(PropertyService service) {
        this.service = service;
    }

    // ✅ Add Property with JSON + File Upload
    @PostMapping
    @PreAuthorize("hasRole('ADMIN') or hasRole('AGENT')")
    public PropertyResponse addProperty(
            @RequestPart("property") String propertyString,
            @RequestPart("file") MultipartFile[] file
    ) {
        log.info("Received request to add property with {} file(s)", file.length);
        ObjectMapper objectMapper = new ObjectMapper();
        PropertyRequest request;

        try {
            request = objectMapper.readValue(propertyString, PropertyRequest.class);
            log.debug("Parsed PropertyRequest: {}", request);
        } catch (JsonProcessingException ex) {
            log.error("Failed to parse property JSON", ex);
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid JSON format");
        }

        PropertyResponse response = service.addProperty(request, file);
        log.info("Property added successfully with ID: {}", response.getId());
        return response;
    }

    // ✅ Get All Properties (Simple List)
    @GetMapping("/all")
    public ResponseEntity<List<PropertyResponse>> getAllProperties() {
        log.info("Fetching all properties");
        List<PropertyResponse> properties = service.getAllProperties();
        log.debug("Fetched {} properties", properties.size());
        return ResponseEntity.ok(properties);
    }

    // ✅ Get Property by ID
    @GetMapping("/{id}")
    public ResponseEntity<PropertyResponse> getPropertyById(@PathVariable Long id) {
        log.info("Fetching property by ID: {}", id);
        PropertyResponse response = service.getPropertyById(id);
        log.debug("Fetched property details: {}", response);
        return ResponseEntity.ok(response);
    }

    // ✅ Delete Property by ID
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('AGENT')")
    public ResponseEntity<Void> deleteProperty(@PathVariable Long id) {
        log.info("Deleting property with ID: {}", id);
        service.deleteProperty(id);
        log.info("Property deleted successfully: {}", id);
        return ResponseEntity.noContent().build();
    }

    // ✅ Search + Pagination
    @GetMapping("/search")
    public ResponseEntity<Page<PropertyResponse>> searchProperties(
            @RequestParam(required = false) String city,
            @RequestParam(required = false) String state,
            @RequestParam(required = false) PropertyStatus status,
            @RequestParam(required = false) PropertyType type,
            @RequestParam(required = false) Double minPrice,
            @RequestParam(required = false) Double maxPrice,
            @PageableDefault(size = 10, sort = "price", direction = Sort.Direction.ASC) Pageable pageable
    ) {
        log.info("Searching properties with filters - city: {}, state: {}, status: {}, type: {}, price: {} to {}",
                city, state, status, type, minPrice, maxPrice);

        Page<PropertyResponse> results = service.searchProperties(city, state, status, type, minPrice, maxPrice, pageable);
        log.debug("Search returned {} results", results.getTotalElements());

        return ResponseEntity.ok(results);
    }

    @PreAuthorize("hasRole('ADMIN') or hasRole('AGENT')")
    @GetMapping("/agent/properties")
    public ResponseEntity<List<PropertyResponse>> getAgentProperties() {
        return ResponseEntity.ok(service.getMyProperties());
    }

}
