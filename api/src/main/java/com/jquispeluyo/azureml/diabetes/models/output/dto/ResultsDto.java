package com.jquispeluyo.azureml.diabetes.models.output.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResultsDto {
    List<Output1Dto> output1;
}
