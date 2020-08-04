package com.jquispeluyo.azureml.diabetes.models.input;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Input1 {

    @JsonProperty("Embarazos")
    private Integer embarazos;

    @JsonProperty("Glucosa")
    private Integer glucosa;

    @JsonProperty("Presión sanguínea")
    private Integer presion_sanguinea;

    @JsonProperty("Pliegue cutáneo")
    private Integer pliegue_cutaneo;

    @JsonProperty("Insulina")
    private Integer insulina;

    @JsonProperty("Índice de masa corporal")
    private Double indice_de_masa_corporal;

    @JsonProperty("Pedigrí diabetes")
    private Double pedigrí_diabetes;

    @JsonProperty("Edad")
    private Integer edad;

}
