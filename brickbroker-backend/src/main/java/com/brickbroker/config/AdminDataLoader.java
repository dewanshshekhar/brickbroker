package com.brickbroker.config;

import com.brickbroker.model.Role;
import com.brickbroker.model.User;
import com.brickbroker.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.UUID;

@Configuration
@RequiredArgsConstructor
public class AdminDataLoader {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Bean
    public CommandLineRunner createAdmin() {
        return args -> {
            String adminEmail = "admin@brickbroker.com";

            if (!userRepository.existsByEmail(adminEmail)) {
                User admin = User.builder()
                        .userId(UUID.randomUUID().toString())
                        .name("Super Admin")
                        .email(adminEmail)
                        .password(passwordEncoder.encode("admin123")) // default password
                        .role(Role.ADMIN)
                        .isAccountVerified(true)
                        .build();

                userRepository.save(admin);
                System.out.println("✅ Admin user created: " + adminEmail);
            } else {
                System.out.println("✅ Admin already exists");
            }
        };
    }
}
