package com.jquispeluyo.azureml.models.input.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PayloadDto {
    private InputsDto inputs;
    private Object globalParameters;
}
