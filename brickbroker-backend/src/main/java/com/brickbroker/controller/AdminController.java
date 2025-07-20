package com.brickbroker.controller;

import com.brickbroker.dto.AgentStatus;
import com.brickbroker.dto.UserResponse;
import com.brickbroker.model.Role;
import com.brickbroker.model.User;
import com.brickbroker.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')") // Apply role check to all endpoints
public class AdminController {

    private final UserRepository userRepository;

    /**
     * Get list of all agents who are pending approval.
     */
    @GetMapping("/pending-agents")
    public ResponseEntity<List<UserResponse>> getPendingAgents() {
        log.info("Fetching pending agents for admin review");

        List<User> pendingAgents = userRepository.findByRoleAndAgentStatus(Role.AGENT, AgentStatus.PENDING);
        List<UserResponse> responseList = pendingAgents.stream()
                .map(user -> UserResponse.builder()
                        .userId(user.getUserId())
                        .name(user.getName())
                        .email(user.getEmail())
                        .phone(user.getPhone())
                        .isAccountVerified(user.getIsAccountVerified())
                        .agentStatus(user.getAgentStatus())
                        .build())
                .toList();

        log.info("Found {} pending agents", responseList.size());
        return ResponseEntity.ok(responseList);
    }

    /**
     * Approve an agent by ID (database ID).
     */
    @PutMapping("/approve-agent/{id}")
    public ResponseEntity<Map<String, String>> approveAgent(@PathVariable Long id) {
        log.info("Admin attempting to approve agent with ID: {}", id);

        User user = userRepository.findById(id)
                .orElseThrow(() -> {
                    log.warn("User not found with ID: {}", id);
                    return new ResponseStatusException(HttpStatus.NOT_FOUND, "Agent not found");
                });

        if (user.getRole() != Role.AGENT) {
            log.warn("User with ID {} is not an agent", id);
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User is not registered as an agent");
        }

        if (user.getAgentStatus() == AgentStatus.APPROVED) {
            log.info("Agent with ID {} is already approved", id);
            return ResponseEntity.badRequest().body(Map.of("message", "Agent is already approved"));
        }

        user.setAgentStatus(AgentStatus.APPROVED);
        userRepository.save(user);

        log.info("Agent with ID {} approved successfully", id);
        return ResponseEntity.ok(Map.of("message", "Agent approved successfully"));
    }
}



