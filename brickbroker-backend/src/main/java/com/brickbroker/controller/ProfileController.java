package com.brickbroker.controller;

import com.brickbroker.dto.UserRequest;
import com.brickbroker.dto.UserResponse;
import com.brickbroker.model.Role;
import com.brickbroker.service.ProfileService;
import com.brickbroker.service.impl.EmailService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

//@Slf4j
//@RestController
//@RequiredArgsConstructor
//public class ProfileController {
//
//    private final ProfileService profileService;
//    private final EmailService emailService;
//
//    @PostMapping("/register-user")
//    public UserResponse registerUser(
//            @RequestPart("user") String userString,
//            @RequestPart(value = "profilePicture", required = false) MultipartFile profilePicture
//    ) {
//        log.info("Received register-user request");
//        ObjectMapper objectMapper = new ObjectMapper();
//        UserRequest userRequest;
//
//        try {
//            userRequest = objectMapper.readValue(userString, UserRequest.class);
//            log.debug("Parsed UserRequest for user registration: {}", userRequest);
//        } catch (JsonProcessingException e) {
//            log.error("Invalid user JSON format", e);
//            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid user JSON format");
//        }
//
//        UserResponse response = profileService.createProfile(userRequest, profilePicture, Role.USER);
//        log.info("User registered successfully with email: {}", response.getEmail());
//
//        emailService.sendWelcomeEmail(response.getEmail(), response.getName());
//        log.info("Welcome email sent to user: {}", response.getEmail());
//
//        return response;
//    }
//
//    @PostMapping("/register-agent")
//    public UserResponse registerAgent(
//            @RequestPart("user") String userString,
//            @RequestPart(value = "profilePicture", required = false) MultipartFile profilePicture
//    ) {
//        log.info("Received register-agent request");
//        ObjectMapper objectMapper = new ObjectMapper();
//        UserRequest userRequest;
//
//        try {
//            userRequest = objectMapper.readValue(userString, UserRequest.class);
//            log.debug("Parsed UserRequest for agent registration: {}", userRequest);
//        } catch (JsonProcessingException e) {
//            log.error("Invalid agent JSON format", e);
//            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid user JSON format");
//        }
//
//        UserResponse response = profileService.createProfile(userRequest, profilePicture, Role.AGENT);
//        log.info("Agent registered successfully with email: {}", response.getEmail());
//
//        emailService.sendWelcomeEmail(response.getEmail(), response.getName());
//        log.info("Welcome email sent to agent: {}", response.getEmail());
//
//        return response;
//    }
//
//    @GetMapping("/profile")
//    public UserResponse getProfile(@CurrentSecurityContext(expression = "authentication?.name") String email) {
//        log.info("Fetching profile for authenticated user: {}", email);
//        UserResponse response = profileService.getProfile(email);
//        log.debug("Fetched profile details: {}", response);
//        return response;
//    }
//}


import com.brickbroker.dto.UserRequest;
import com.brickbroker.dto.UserResponse;
import com.brickbroker.model.Role;
import com.brickbroker.service.ProfileService;
import com.brickbroker.service.impl.EmailService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/profile")
public class ProfileController {

    private final ProfileService profileService;
    private final EmailService emailService;
    private final ObjectMapper objectMapper = new ObjectMapper();

    @PostMapping("/register-user")
    public UserResponse registerUser(
            @RequestPart("user") String userString,
            @RequestPart(value = "profilePicture", required = false) MultipartFile profilePicture
    ) {
        return register(userString, profilePicture, Role.USER);
    }

    @PostMapping("/register-agent")
    public UserResponse registerAgent(
            @RequestPart("user") String userString,
            @RequestPart(value = "profilePicture", required = false) MultipartFile profilePicture
    ) {
        return register(userString, profilePicture, Role.AGENT);
    }

    @GetMapping
    public UserResponse getProfile(@CurrentSecurityContext(expression = "authentication?.name") String email) {
        log.info("Fetching profile for user: {}", email);
        UserResponse response = profileService.getProfile(email);
        log.debug("Profile data: {}", response);
        return response;
    }

    /**
     * Shared logic for user/agent registration.
     */
    private UserResponse register(String userString, MultipartFile profilePicture, Role role) {
        UserRequest userRequest = parseUserJson(userString);

        log.info("Starting registration for role: {}, email: {}", role, userRequest.getEmail());

        UserResponse response = profileService.createProfile(userRequest, profilePicture, role);
        log.info("{} registered successfully: {}", role, response.getEmail());

        emailService.sendWelcomeEmail(response.getEmail(), response.getName());
        log.info("Welcome email sent to: {}", response.getEmail());

        return response;
    }

    /**
     * Parses the incoming JSON string to UserRequest.
     */
    private UserRequest parseUserJson(String json) {
        try {
            return objectMapper.readValue(json, UserRequest.class);
        } catch (JsonProcessingException e) {
            log.error("Failed to parse user JSON", e);
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid user JSON format");
        }
    }
}
