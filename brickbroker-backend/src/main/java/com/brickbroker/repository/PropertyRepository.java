package com.brickbroker.repository;

import com.brickbroker.dto.CityDistributionDTO;
import com.brickbroker.dto.TopAgentDTO;
import com.brickbroker.dto.TypeDistributionDTO;
import com.brickbroker.model.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Long> {

    @Query("SELECT p FROM Property p " +
            "WHERE (:city IS NULL OR LOWER(p.city) = LOWER(:city)) " +
            "AND (:state IS NULL OR LOWER(p.state) = LOWER(:state)) " +
            "AND (:status IS NULL OR p.status = :status) " +
            "AND (:type IS NULL OR p.type = :type) " +
            "AND (:minPrice IS NULL OR p.price >= :minPrice) " +
            "AND (:maxPrice IS NULL OR p.price <= :maxPrice)")
    Page<Property> search(
            @Param("city") String city,
            @Param("state") String state,
            @Param("status") PropertyStatus status,
            @Param("type") PropertyType type,
            @Param("minPrice") Double minPrice,
            @Param("maxPrice") Double maxPrice,
            Pageable pageable
    );

    @Query("SELECT p.city AS city, COUNT(p) AS count FROM Property p GROUP BY p.city")
    List<CityDistributionDTO> countByCity();

    @Query("SELECT p.type AS type, COUNT(p) AS count FROM Property p GROUP BY p.type")
    List<TypeDistributionDTO> countByType();

    @Query("""
    SELECT u.name AS name, u.email AS email, COUNT(p.id) AS propertyCount
    FROM Property p
    JOIN p.owner u
    WHERE u.role = 'AGENT'
    GROUP BY u.id
    ORDER BY propertyCount DESC
""")
    List<TopAgentDTO> findTopAgentsWithCounts();

    Long countByStatus(PropertyStatus status);
    Long countByFeaturedTrue();
    List<Property> findByOwner(User owner);

}