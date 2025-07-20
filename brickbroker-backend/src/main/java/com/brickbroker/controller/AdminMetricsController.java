package com.brickbroker.controller;

import com.brickbroker.dto.CityDistributionDTO;
import com.brickbroker.dto.MonthlyCountDTO;
import com.brickbroker.dto.TopAgentDTO;
import com.brickbroker.dto.TypeDistributionDTO;
import com.brickbroker.service.MetricsService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/admin/metrics")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
public class AdminMetricsController {

    private final MetricsService metricsService;

    @GetMapping("/counts")
    public Map<String, Long> getCounts() {
        return metricsService.fetchCounts();
    }

    @GetMapping("/properties-by-month")
    public List<MonthlyCountDTO> getPropertiesByMonth() {
        return metricsService.getPropertiesByMonth();
    }

    @GetMapping("/properties-by-city")
    public List<CityDistributionDTO> getCityDistribution() {
        return metricsService.getCityWiseDistribution();
    }

    @GetMapping("/properties-by-type")
    public List<TypeDistributionDTO> getTypeWiseDistribution() {
        return metricsService.getTypeWiseDistribution();
    }

    @GetMapping("/top-agents")
    public List<TopAgentDTO> getTopAgents() {
        return metricsService.getTopPerformingAgents();
    }
}

