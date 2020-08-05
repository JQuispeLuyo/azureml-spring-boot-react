package com.jquispeluyo.azureml.azureml.domain.input;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Input1 {

    private Integer ingresos;

    private Integer ahorros;

    private Integer hijos;

    private Integer trabajo;

    private Integer financiar;

}
