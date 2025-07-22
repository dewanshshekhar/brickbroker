package com.brickbroker.service;

import com.brickbroker.dto.*;
import java.util.List;
import java.util.Map;

public interface MetricsService {
    Map<String, Long> fetchCounts();
    List<MonthlyCountDTO> getPropertiesByMonth();
    List<CityDistributionDTO> getCityWiseDistribution();
    List<TypeDistributionDTO> getTypeWiseDistribution();
    List<TopAgentDTO> getTopPerformingAgents();
}

