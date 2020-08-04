package com.jquispeluyo.azureml.diabetes.helpers;

import com.jquispeluyo.azureml.diabetes.models.output.PayloadOut;
import com.jquispeluyo.azureml.diabetes.models.output.dto.Output1Dto;
import com.jquispeluyo.azureml.diabetes.models.output.dto.PayloadOutDto;
import com.jquispeluyo.azureml.diabetes.models.output.dto.ResultsDto;

import java.util.stream.Collectors;

public class ToPayloadOutDto {

    public static PayloadOutDto convert(PayloadOut payloadOut) {
        return new PayloadOutDto(
                new ResultsDto(
                        payloadOut.getResults().getOutput1().stream()
                                .map(x ->
                                        new Output1Dto(
                                                x.getScored_labels(),
                                                x.getScored_probabilities()
                                        )
                                ).collect(Collectors.toList())
                )
        );
    }
}
