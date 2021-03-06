package com.jquispeluyo.azureml.diabetes.helpers;

import com.jquispeluyo.azureml.diabetes.models.input.Inputs;
import com.jquispeluyo.azureml.diabetes.models.input.Input1;
import com.jquispeluyo.azureml.diabetes.models.input.Payload;
import com.jquispeluyo.azureml.diabetes.models.input.dto.PayloadDto;

import java.util.stream.Collectors;

public class ToPayload {

    public static Payload convert(PayloadDto payloadDto) {
        return new Payload(
                new Inputs(
                        payloadDto.getInputs().getInput1().stream()
                                .map(x ->
                                        new Input1(
                                                x.getEmbarazos(),
                                                x.getGlucosa(),
                                                x.getPresion_sanguinea(),
                                                x.getPliegue_cutaneo(),
                                                x.getInsulina(),
                                                x.getIndice_de_masa_corporal(),
                                                x.getPedigri_diabetes(),
                                                x.getEdad()
                                        )
                                ).collect(Collectors.toList())
                ),
                null
        );
    }
}
