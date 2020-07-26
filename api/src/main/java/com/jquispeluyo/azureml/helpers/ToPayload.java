package com.jquispeluyo.azureml.helpers;

import com.jquispeluyo.azureml.models.input.Inputs;
import com.jquispeluyo.azureml.models.input.Input1;
import com.jquispeluyo.azureml.models.input.Payload;
import com.jquispeluyo.azureml.models.input.dto.PayloadDto;

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
                                                x.getEdad(),
                                                x.getDiabetes(),
                                                x.getMedicacion_previa(),
                                                x.getObservaciones(),
                                                x.getFecha_de_diagnostico()
                                        )
                                ).collect(Collectors.toList())
                ),
                null
        );
    }
}
