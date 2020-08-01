package com.jquispeluyo.azureml.models.output.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Output1Dto {

    private String scored_labels;
    private String scored_probabilities;

}
