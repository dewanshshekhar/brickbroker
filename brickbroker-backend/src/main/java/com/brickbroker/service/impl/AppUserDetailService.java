package com.brickbroker.service.impl;


import com.brickbroker.dto.AgentStatus;
import com.brickbroker.exception.AgentNotApprovedException;
import com.brickbroker.exception.UserNotFoundException;
import com.brickbroker.model.Role;
import com.brickbroker.model.User;
import com.brickbroker.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

//@Service
//@RequiredArgsConstructor
//public class AppUserDetailService implements UserDetailsService {
//
//    private final UserRepository userRepository;
//
//    @Override
//    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//        User existingUser = userRepository.findByEmail(email)
//                .orElseThrow(() -> new UsernameNotFoundException("Email not found: " + email));
//
//        if (existingUser.getRole() == Role.AGENT && Boolean.FALSE.equals(existingUser.getIsApproved())) {
//            throw new DisabledException("Agent not approved by admin");
//        }
//
//        GrantedAuthority authority = new SimpleGrantedAuthority("ROLE_" + existingUser.getRole().name());
//
//        return new org.springframework.security.core.userdetails.User(
//                existingUser.getEmail(),
//                existingUser.getPassword(),
//                Collections.singletonList(authority)
//        );
//    }
//
//
//    public User loadDomainUserByEmail(String email) {
//        return userRepository.findByEmail(email)
//                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));
//    }
//
//}
//

//@Service
//@RequiredArgsConstructor
//public class AppUserDetailService implements UserDetailsService {
//
//    private final UserRepository userRepository;
//
//    @Override
//    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//        User user = userRepository.findByEmail(email)
//                .orElseThrow(() -> new UsernameNotFoundException("Email not found: " + email));
//
//        // AGENT role specific approval check
//        if (user.getRole() == Role.AGENT && user.getAgentStatus() != AgentStatus.APPROVED) {
//            throw new DisabledException("Agent is not approved by admin");
//        }
//
//        // Grant role-based authority
//        GrantedAuthority authority = new SimpleGrantedAuthority("ROLE_" + user.getRole().name());
//
//        return org.springframework.security.core.userdetails.User.builder()
//                .username(user.getEmail())
//                .password(user.getPassword())
//                .authorities(Collections.singletonList(authority))
//                .disabled(!user.isEnabled())           // Spring Security uses this to block login
//                .accountLocked(user.isLocked())        // Handles lock status
//                .build();
//    }
//
//    // Used when we need to access domain-level user details (e.g. in AuthService)
//    public User loadDomainUserByEmail(String email) {
//        return userRepository.findByEmail(email)
//                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));
//    }
//}
//

@Service
@RequiredArgsConstructor
public class AppUserDetailService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UserNotFoundException("Email not found: " + email));

        // Agent approval check
        if (user.getRole() == Role.AGENT && user.getAgentStatus() != AgentStatus.APPROVED) {
            throw new AgentNotApprovedException("Your agent profile is not approved yet by the admin.");
        }

        // Grant authorities based on role
        GrantedAuthority authority = new SimpleGrantedAuthority("ROLE_" + user.getRole().name());

        return org.springframework.security.core.userdetails.User.builder()
                .username(user.getEmail())
                .password(user.getPassword())
                .authorities(Collections.singletonList(authority))
                .disabled(false) // normal users always enabled
                .accountLocked(false) // lock handle nahi kar rahe abhi
                .build();
    }

    // For internal use when domain User object is needed
    public User loadDomainUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new UserNotFoundException("User not found with email: " + email));
    }
}

