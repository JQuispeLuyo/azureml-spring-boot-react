package com.jquispeluyo.azureml.azureml.domain.output;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Output1 {

    @JsonProperty("Scored Labels")
    private Integer scored_labels;

    @JsonProperty("Scored Probabilities")
    private Double scored_probabilities;

}
