package com.jquispeluyo.azureml.common;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RequestInput {
    Double ingresos;
    Double ahorros;
    Double hijos;
    Double trabajo;
    Double financiar;
}
