package com.brickbroker.dto;

import com.brickbroker.model.ListingType;
import com.brickbroker.model.PropertyStatus;
import com.brickbroker.model.PropertyType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PropertyResponse {

    private Long id;
    private String title;
    private String description;
    private String city;
    private String state;
    private String address;
    private String pincode;
    private String location;
    private String nearbyPlaces;
    private PropertyType type;
    private ListingType listingType;
    private PropertyStatus status;
    private Double price;
    private Integer bedrooms;
    private Integer bathrooms;
    private Integer floors;
    private Integer yearBuilt;
    private Double area;
    private String areaUnit;
    private Boolean featured;
    private List<String> amenities;

    private List<String> imageUrls;
    private List<String> imagePublicIds;

    private String videoUrl;
    private String virtualTourUrl;
    private String contactName;
    private String contactEmail;
    private String contactPhone;
}

