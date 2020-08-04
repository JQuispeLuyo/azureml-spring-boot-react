package com.jquispeluyo.azureml.bigml.domain.models;

import lombok.Data;

@Data
public class InputPrediccionBody {

    private String model;
    private Input input_data;

}


/*
* {
    "model": "model/5f299ced2fb31c295e000a0c",
    "input_data": {
        "000000":4960,      // ingresos
        "000004":38691,     // ahorros
        "000007":1,         // hijos
        "000008":4,         // trabajo
        "000009":338513     // financiar
    }
}
* */
