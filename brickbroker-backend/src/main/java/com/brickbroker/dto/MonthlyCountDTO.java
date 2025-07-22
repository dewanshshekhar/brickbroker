package com.brickbroker.dto;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MonthlyCountDTO {
    private String month;
    private Long count;
}
