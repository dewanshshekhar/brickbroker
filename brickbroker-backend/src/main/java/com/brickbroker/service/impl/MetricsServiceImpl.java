package com.brickbroker.service.impl;


import com.brickbroker.dto.*;
import com.brickbroker.dto.AgentStatus;
import com.brickbroker.model.PropertyStatus;
import com.brickbroker.model.Role;
import com.brickbroker.repository.PropertyRepository;
import com.brickbroker.repository.UserRepository;
import com.brickbroker.service.MetricsService;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Tuple;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.time.Month;
import java.util.*;
import lombok.extern.slf4j.Slf4j;


@Slf4j
@Service
@RequiredArgsConstructor
public class MetricsServiceImpl implements MetricsService {

    private final UserRepository userRepository;
    private final PropertyRepository propertyRepository;
    private final EntityManager entityManager;

    /**
     * Returns various entity counts used in admin dashboard metrics.
     */
    @Override
    public Map<String, Long> fetchCounts() {
        Map<String, Long> stats = new HashMap<>();
        stats.put("totalUsers", userRepository.countByRole(Role.USER));
        stats.put("totalAgents", userRepository.countByRole(Role.AGENT));
        stats.put("pendingAgents", userRepository.countByRoleAndAgentStatus(Role.AGENT, AgentStatus.PENDING));
        stats.put("approvedAgents", userRepository.countByRoleAndAgentStatus(Role.AGENT, AgentStatus.APPROVED));
        stats.put("unverifiedUsers", userRepository.countByIsAccountVerifiedFalse());
        stats.put("totalProperties", propertyRepository.count());
        stats.put("publishedProperties", propertyRepository.countByStatus(PropertyStatus.PUBLISHED));
        stats.put("featuredProperties", propertyRepository.countByFeaturedTrue());

        log.debug("Fetched admin metrics: {}", stats);
        return stats;
    }

    /**
     * Aggregates property creation counts grouped by month.
     */
    @Override
    public List<MonthlyCountDTO> getPropertiesByMonth() {
        final String query = """
            SELECT FUNCTION('MONTH', p.createdAt) AS month, COUNT(p.id) AS count
            FROM Property p
            GROUP BY FUNCTION('MONTH', p.createdAt)
            ORDER BY month
        """;

        List<Tuple> results = entityManager.createQuery(query, Tuple.class).getResultList();
        List<MonthlyCountDTO> response = new ArrayList<>();

        for (Tuple tuple : results) {
            Integer monthNumber = (Integer) tuple.get("month");
            Long count = (Long) tuple.get("count");

            if (monthNumber != null && count != null) {
                String monthName = Month.of(monthNumber).name(); // e.g. "JANUARY"
                response.add(new MonthlyCountDTO(monthName, count));
            }
        }

        return response;
    }

    /**
     * Distribution of properties by city.
     */
    @Override
    public List<CityDistributionDTO> getCityWiseDistribution() {
        return propertyRepository.countByCity();
    }

    /**
     * Distribution of properties by type.
     */
    @Override
    public List<TypeDistributionDTO> getTypeWiseDistribution() {
        return propertyRepository.countByType();
    }

    /**
     * Top agents based on number of properties listed.
     */
    @Override
    public List<TopAgentDTO> getTopPerformingAgents() {
        return propertyRepository.findTopAgentsWithCounts();
    }
}
