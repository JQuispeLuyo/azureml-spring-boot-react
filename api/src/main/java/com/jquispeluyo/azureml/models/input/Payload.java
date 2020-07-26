package com.jquispeluyo.azureml.models.input;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Payload {
    @JsonProperty("Inputs")
    private Inputs inputs;

    @JsonProperty("GlobalParameters")
    private Object globalParameters;

}
