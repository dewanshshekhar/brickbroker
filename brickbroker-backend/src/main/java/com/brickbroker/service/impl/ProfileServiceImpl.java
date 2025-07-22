package com.brickbroker.service.impl;


import com.brickbroker.dto.AgentStatus;
import com.brickbroker.dto.UserRequest;
import com.brickbroker.dto.UserResponse;
import com.brickbroker.exception.*;
import com.brickbroker.model.Role;
import com.brickbroker.model.User;
import com.brickbroker.repository.UserRepository;
import com.brickbroker.service.ProfileService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ThreadLocalRandom;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProfileServiceImpl implements ProfileService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final EmailService emailService;

    private final CloudinaryService cloudinaryService;

    @Override
    public UserResponse createProfile(UserRequest profileRequest, MultipartFile profilePicture,Role role) {
        log.info("Creating profile for email: {} with role: {}", profileRequest.getEmail(), role);
        // Check if email already exists
        if (userRepository.existsByEmail(profileRequest.getEmail())) {
            log.warn("Email already exists: {}", profileRequest.getEmail());
            throw new EmailAlreadyExistsException("Email already exists: " + profileRequest.getEmail());
        }

        // Convert DTO to entity
        User newProfile = convertToUserEntity(profileRequest,role);

        // Upload profile picture if available
        if (profilePicture != null && !profilePicture.isEmpty()) {
            log.info("Uploading profile picture for user: {}", newProfile.getEmail());
            Map<String, String> uploadResult = cloudinaryService.uploadFile(profilePicture, "brickbroker-users", "profile");
            newProfile.setProfilePictureUrl(uploadResult.get("url"));
            log.debug("Profile picture uploaded: {}", uploadResult.get("url"));
        }

        // Save user
        newProfile = userRepository.save(newProfile);
        log.info("User profile created with ID: {}", newProfile.getId());

        // Return response
        return convertToProfileResponse(newProfile);
    }


    @Override
    public UserResponse getProfile(String email) {
        log.info("Fetching profile for email: {}", email);
        User existingUser = userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User not found: "+email));
        return convertToProfileResponse(existingUser);
    }

    @Override
    public void sendResetOtp(String email) {
        log.info("Sending reset OTP to email: {}", email);
        User existingUser = userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User not found: "+email));

        //Generate 6 digit otp
        String otp = String.valueOf(ThreadLocalRandom.current().nextInt(100000,1000000));

        //Calculate expiry time (current time + 15 minutes in milliseconds)
        long expiryTime = System.currentTimeMillis() + (15 * 60 * 1000);

        //Update the profile/user
        existingUser.setResetOtp(otp);
        existingUser.setResetOtpExpireAt(expiryTime);

        //Save into the database
        userRepository.save(existingUser);

        try {
             emailService.sendResetOtpEmail(existingUser.getEmail(),otp);
            log.info("Reset OTP sent successfully to: {}", email);
        }catch (Exception e){
            log.error("Failed to send reset OTP email to: {}", email, e);
            throw  new EmailSendException("Unable to send email to: "+email);
        }
    }

    @Override
    public void resetPassword(String email, String otp, String newPassword) {
        log.info("Resetting password for: {}", email);
        User existingUser = userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User not found: "+email));

        if(existingUser.getResetOtp() == null || !existingUser.getResetOtp().equals(otp)){
            log.warn("Invalid OTP for user: {}", email);
            throw new RuntimeException("Invalid OTP");
        }

        if(existingUser.getResetOtpExpireAt() < System.currentTimeMillis()){
            log.warn("Expired OTP for user: {}", email);
            throw new OtpExpiredException("OTP has expired. Please request a new one.");
        }

        existingUser.setPassword(passwordEncoder.encode(newPassword));
        existingUser.setResetOtp(null);
        existingUser.setResetOtpExpireAt(0L);

        userRepository.save(existingUser);
    }

    @Override
    public void sendOtp(String email) {
        log.info("Sending verification OTP to: {}", email);
        User existingUser = userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User not found: "+email));
        if(existingUser.getIsAccountVerified() != null && existingUser.getIsAccountVerified()){
            log.info("User already verified: {}", email);
            return;
        }

        // Generate 6 digit OTP
        String otp = String.valueOf(ThreadLocalRandom.current().nextInt(100000,1000000));

        //Calculate expiry time (current time + 24 hours in milliseconds)
        long expiryTime = System.currentTimeMillis() + (24 * 60 * 60 * 1000);

        //Update the user entity
        existingUser.setVerifyOtp(otp);
        existingUser.setVerifyOtpExpireAt(expiryTime);

        //save to database
        userRepository.save(existingUser);

        try {
            emailService.sendOtpEmail(existingUser.getEmail(),otp);
            log.info("Verification OTP sent to: {}", email);
        }catch (Exception e){
            log.error("Failed to send verification OTP to: {}", email, e);
            throw new EmailSendException("Unable to send email to: " + email);
        }
    }

    @Override
    public void verifyOtp(String email, String otp) {
        log.info("Verifying OTP for email: {}", email);
        User existingUser = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + email));

        if (existingUser.getVerifyOtp() == null || !existingUser.getVerifyOtp().equals(otp)) {
            log.warn("Invalid OTP provided for verification by: {}", email);
            throw new InvalidOtpException("Invalid OTP provided");
        }

        if (existingUser.getVerifyOtpExpireAt() < System.currentTimeMillis()) {
            log.warn("OTP expired for user: {}", email);
            throw new OtpExpiredException("OTP has expired. Please request a new one.");
        }

        existingUser.setIsAccountVerified(true);
        existingUser.setVerifyOtp(null);
        existingUser.setVerifyOtpExpireAt(0L);

        userRepository.save(existingUser);
        log.info("User successfully verified: {}", email);
    }

    @Override
    public UserResponse updateProfilePicture(String email, MultipartFile profilePicture) {
        log.info("Updating profile picture for: {}", email);

        if (profilePicture == null || profilePicture.isEmpty()) {
            throw new InvalidImageException("Profile picture file is required");
        }

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + email));

        // Purani image Cloudinary se delete (optional)
        if (user.getProfilePictureUrl() != null) {
            try {
                cloudinaryService.deleteFile(user.getProfilePictureUrl());
                log.info("Old profile picture deleted for: {}", email);
            } catch (Exception e) {
                log.warn("Failed to delete old profile picture for {}: {}", email, e.getMessage());
            }
        }

        // Nayi image upload
        Map<String, String> uploadResult = cloudinaryService.uploadFile(profilePicture, "brickbroker-users", "profile");
        String newUrl = uploadResult.get("url");
        user.setProfilePictureUrl(newUrl);

        // Save updated user
        userRepository.save(user);
        log.info("Profile picture updated successfully for: {}", email);

        return convertToProfileResponse(user);
    }



//    @Override
//    public String getLoggedInUserId(String email) {
//         UserEntity existingUser = userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User not found: "+email));
//         return existingUser.getUserId();
//    }

    private UserResponse convertToProfileResponse(User newProfile) {
        return UserResponse.builder()
                .name(newProfile.getName())
                .email(newProfile.getEmail())
                .userId(newProfile.getUserId())
                .phone(newProfile.getPhone())
                .isAccountVerified(newProfile.getIsAccountVerified())
                .build();
    }

    private User convertToUserEntity(UserRequest request,Role role) {
        return User.builder()
                .email(request.getEmail())
                .userId(UUID.randomUUID().toString())
                .name(request.getName())
                .password(passwordEncoder.encode(request.getPassword()))
                .phone(request.getPhone())
                .role(role)
                .isAccountVerified(false)
                .agentStatus(role == Role.AGENT ? AgentStatus.PENDING : null)
                .resetOtpExpireAt(0L)
                .verifyOtp(null)
                .verifyOtpExpireAt(0L)
                .resetOtp(null)
                .build();
    }
}
