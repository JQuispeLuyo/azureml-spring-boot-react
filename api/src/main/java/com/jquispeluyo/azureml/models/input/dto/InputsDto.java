package com.jquispeluyo.azureml.models.input.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class InputsDto {
    List<Input1Dto> input1;
}
