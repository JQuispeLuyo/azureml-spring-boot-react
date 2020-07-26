package com.jquispeluyo.azureml.models.input;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Input1 {

    @JsonProperty("Embarazos")
    private String embarazos;

    @JsonProperty("Glucosa")
    private String glucosa;

    @JsonProperty("Presión sanguínea")
    private String presion_sanguinea;

    @JsonProperty("Pliegue cutáneo")
    private String pliegue_cutaneo;

    @JsonProperty("Insulina")
    private String insulina;

    @JsonProperty("Índice de masa corporal")
    private String indice_de_masa_corporal;

    @JsonProperty("Pedigrí diabetes")
    private String pedigrí_diabetes;

    @JsonProperty("Edad")
    private String edad;

    @JsonProperty("Diabetes")
    private String diabetes;

    @JsonProperty("Medicación previa")
    private String medicacion_previa;

    @JsonProperty("Observaciones")
    private String observaciones;

    @JsonProperty("Fecha de diagnóstico")
    private String fecha_de_diagnostico;
}
