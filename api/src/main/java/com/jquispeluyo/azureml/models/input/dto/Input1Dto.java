package com.jquispeluyo.azureml.models.input.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Input1Dto {

    private String embarazos;

    private String glucosa;

    private String presion_sanguinea;

    private String pliegue_cutaneo;

    private String insulina;

    private String indice_de_masa_corporal;

    private String pedigri_diabetes;

    private String edad;

    private String diabetes;

    private String medicacion_previa;

    private String observaciones;

    private String fecha_de_diagnostico;
}
