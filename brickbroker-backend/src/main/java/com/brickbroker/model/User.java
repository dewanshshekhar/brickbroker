package com.brickbroker.model;

import com.brickbroker.dto.AgentStatus;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String userId;

    @NotBlank
    private String name;

    @Column(unique = true)
    private String email;

    @NotBlank
    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;

    @Enumerated(EnumType.STRING)
    private AgentStatus agentStatus; // ✅ NEW

    private String phone;

    private String profilePictureUrl;

    @OneToMany(mappedBy = "owner", cascade = CascadeType.ALL)
    private List<Property> properties;

    private String verifyOtp;
    private Boolean isAccountVerified;
    private Long verifyOtpExpireAt;

    private String resetOtp;
    private Long resetOtpExpireAt;

    private boolean isEnabled = true;
    private boolean isLocked = false;
    private int failedLoginAttempts = 0;

    @CreationTimestamp
    @Column(updatable = false, nullable = false)
    private Timestamp createdAt;

    @UpdateTimestamp
    @Column(nullable = false)
    private Timestamp updatedAt;
}
