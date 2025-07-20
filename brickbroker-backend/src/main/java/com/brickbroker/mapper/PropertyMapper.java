package com.brickbroker.mapper;

import com.brickbroker.dto.PropertyRequest;
import com.brickbroker.dto.PropertyResponse;
import com.brickbroker.model.Image;
import com.brickbroker.model.Property;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class PropertyMapper {

    public static Property toEntity(PropertyRequest request) {
        Property property = new Property();

        property.setTitle(request.getTitle());
        property.setDescription(request.getDescription());
        property.setCity(request.getCity());
        property.setState(request.getState());
        property.setAddress(request.getAddress());
        property.setPincode(request.getPincode());
        property.setLocation(request.getLocation());
        property.setNearbyPlaces(request.getNearbyPlaces());
        property.setType(request.getType());
        property.setListingType(request.getListingType());
        property.setStatus(request.getStatus());
        property.setPrice(request.getPrice());
        property.setBedrooms(request.getBedrooms());
        property.setBathrooms(request.getBathrooms());
        property.setFloors(request.getFloors());
        property.setYearBuilt(request.getYearBuilt());
        property.setArea(request.getArea());
        property.setAreaUnit(request.getAreaUnit());
        property.setFeatured(request.getFeatured() != null && request.getFeatured());
        property.setAmenities(request.getAmenities());
        // imageUrls and imagePublicIds are handled in the service layer, not here
        property.setVideoUrl(request.getVideoUrl());
        property.setVirtualTourUrl(request.getVirtualTourUrl());
//        property.setContactName(request.getContactName());
//        property.setContactEmail(request.getContactEmail());
//        property.setContactPhone(request.getContactPhone());

        return property;
    }

    public PropertyResponse toResponse(Property property) {
        PropertyResponse response = new PropertyResponse();

        response.setId(property.getId());
        response.setTitle(property.getTitle());
        response.setDescription(property.getDescription());
        response.setCity(property.getCity());
        response.setState(property.getState());
        response.setAddress(property.getAddress());
        response.setPincode(property.getPincode());
        response.setLocation(property.getLocation());
        response.setNearbyPlaces(property.getNearbyPlaces());
        response.setType(property.getType());
        response.setListingType(property.getListingType());
        response.setStatus(property.getStatus());
        response.setPrice(property.getPrice());
        response.setBedrooms(property.getBedrooms());
        response.setBathrooms(property.getBathrooms());
        response.setFloors(property.getFloors());
        response.setYearBuilt(property.getYearBuilt());
        response.setArea(property.getArea());
        response.setAreaUnit(property.getAreaUnit());
        response.setFeatured(property.isFeatured());
        response.setAmenities(property.getAmenities());

        // Extracting image URLs and public IDs from Image entity
        List<String> imageUrls = property.getImageUrls() != null ?
                property.getImageUrls().stream()
                        .map(Image::getUrl)
                        .collect(Collectors.toList())
                : null;

        List<String> imagePublicIds = property.getImageUrls() != null ?
                property.getImageUrls().stream()
                        .map(Image::getPublicId)
                        .collect(Collectors.toList())
                : null;

        response.setImageUrls(imageUrls);
        response.setImagePublicIds(imagePublicIds);

        response.setVideoUrl(property.getVideoUrl());
        response.setVirtualTourUrl(property.getVirtualTourUrl());
        response.setContactName(property.getContactName());
        response.setContactEmail(property.getContactEmail());
        response.setContactPhone(property.getContactPhone());

        return response;
    }
}
