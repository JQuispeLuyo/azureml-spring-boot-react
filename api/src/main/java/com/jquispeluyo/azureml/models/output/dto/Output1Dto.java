package com.jquispeluyo.azureml.models.output.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.jquispeluyo.azureml.models.input.dto.Input1Dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Output1Dto extends Input1Dto {

    public Output1Dto(String embarazos, String glucosa, String presion_sanguinea, String pliegue_cutaneo, String insulina, String indice_de_masa_corporal, String pedigrí_diabetes, String edad, String diabetes, String medicacion_previa, String observaciones, String fecha_de_diagnostico, String scored_labels, String scored_probabilities) {
        super(embarazos, glucosa, presion_sanguinea, pliegue_cutaneo, insulina, indice_de_masa_corporal, pedigrí_diabetes, edad, diabetes, medicacion_previa, observaciones, fecha_de_diagnostico);
        this.scored_labels = scored_labels;
        this.scored_probabilities = scored_probabilities;
    }

    private String scored_labels;

    private String scored_probabilities;

}
