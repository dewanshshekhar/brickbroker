package com.brickbroker.service;

import com.brickbroker.dto.UserRequest;
import com.brickbroker.dto.UserResponse;
import com.brickbroker.model.Role;
import org.springframework.web.multipart.MultipartFile;


public interface ProfileService {

    UserResponse createProfile(UserRequest profileRequest, MultipartFile profilePicture, Role role);
    UserResponse getProfile(String email);

    void sendResetOtp(String email);
    void resetPassword(String email, String otp, String newPassword);

    void sendOtp(String email);

    void verifyOtp(String email, String otp);
    UserResponse updateProfilePicture(String email, MultipartFile profilePicture);

//    String getLoggedInUserId(String email);

}
