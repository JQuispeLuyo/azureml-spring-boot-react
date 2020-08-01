package com.jquispeluyo.azureml.models.input.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Input1Dto {

    private Integer embarazos;
    private Integer glucosa;
    private Integer presion_sanguinea;
    private Integer pliegue_cutaneo;
    private Integer insulina;
    private Double indice_de_masa_corporal;
    private Double pedigri_diabetes;
    private Integer edad;

}
