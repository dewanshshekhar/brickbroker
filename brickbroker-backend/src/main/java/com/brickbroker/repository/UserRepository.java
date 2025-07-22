package com.brickbroker.repository;

import com.brickbroker.dto.AgentStatus;
import com.brickbroker.model.Role;
import com.brickbroker.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByEmail(String email);
    Optional<User> findByUserId(String userId);
    Boolean existsByEmail(String email);
    List<User> findByRoleAndAgentStatus(Role role, AgentStatus agentStatus);
    Long countByRole(Role role);
    Long countByIsAccountVerifiedFalse();
    long countByRoleAndAgentStatus(Role role, AgentStatus agentStatus);
}
