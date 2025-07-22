package com.brickbroker.dto;

import com.brickbroker.model.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AuthResponse {
    private String token;
    private String name;
    private String email;

    // Only include for agent/admin, optional
    private Role role;
}

