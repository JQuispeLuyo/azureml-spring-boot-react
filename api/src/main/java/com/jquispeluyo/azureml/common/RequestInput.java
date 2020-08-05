package com.jquispeluyo.azureml.common;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RequestInput {
    Integer ingresos;
    Integer ahorros;
    Integer hijos;
    Integer trabajo;
    Integer financiar;
}
