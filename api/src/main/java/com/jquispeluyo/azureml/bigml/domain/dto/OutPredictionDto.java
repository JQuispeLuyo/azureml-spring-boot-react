package com.jquispeluyo.azureml.bigml.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OutPredictionDto {
    private Integer output;
    private Double probability;
}
