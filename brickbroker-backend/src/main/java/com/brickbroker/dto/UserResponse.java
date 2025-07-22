package com.brickbroker.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserResponse {
    private String userId;
    private String name;
    private String email;
    private String phone;
    private String profilePictureUrl;
    private Boolean isAccountVerified;
    private AgentStatus agentStatus;
}

