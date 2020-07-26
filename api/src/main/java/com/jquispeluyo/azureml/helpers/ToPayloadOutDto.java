package com.jquispeluyo.azureml.helpers;

import com.jquispeluyo.azureml.models.output.PayloadOut;
import com.jquispeluyo.azureml.models.output.dto.Output1Dto;
import com.jquispeluyo.azureml.models.output.dto.PayloadOutDto;
import com.jquispeluyo.azureml.models.output.dto.ResultsDto;

import java.util.stream.Collectors;

public class ToPayloadOutDto {
    public static PayloadOutDto convertOnluResult(PayloadOut payloadOut) {
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

    public static PayloadOutDto convert(PayloadOut payloadOut) {
        return new PayloadOutDto(
                new ResultsDto(
                        payloadOut.getResults().getOutput1().stream()
                                .map(x ->
                                        new Output1Dto(
                                                x.getEmbarazos(),
                                                x.getGlucosa(),
                                                x.getPresion_sanguinea(),
                                                x.getPliegue_cutaneo(),
                                                x.getInsulina(),
                                                x.getIndice_de_masa_corporal(),
                                                x.getPedigrí_diabetes(),
                                                x.getEdad(),
                                                x.getDiabetes(),
                                                x.getMedicacion_previa(),
                                                x.getObservaciones(),
                                                x.getFecha_de_diagnostico(),
                                                x.getScored_labels(),
                                                x.getScored_probabilities()
                                        )
                                ).collect(Collectors.toList())
                )
        );
    }
}
