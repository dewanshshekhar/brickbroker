package com.brickbroker.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String title;

    @NotBlank
    private String description;

    @NotBlank
    private String city;

    @NotBlank
    private String state;

    @NotBlank
    private String address;

    @NotBlank
    private String pincode;

    private String location;

    private String nearbyPlaces;

    @NotNull
    private PropertyType type;

    @NotNull
    private ListingType listingType;

    @NotNull
    private PropertyStatus status;

    @NotNull
    private Double price;

    @NotNull
    private Integer bedrooms;

    @NotNull
    private Integer bathrooms;

    @NotNull
    private Integer floors;

    @NotNull
    private Integer yearBuilt;

    @NotNull
    private Double area;

    @NotBlank
    private String areaUnit;

    private boolean featured;

    private List<String> amenities;

    @OneToMany(mappedBy = "property", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Image> imageUrls;

    private List<String> imagePublicIds;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private User owner;


    private String videoUrl;

    private String virtualTourUrl;

    private String contactName;
    private String contactEmail;
    private String contactPhone;
}
