package com.jquispeluyo.azureml.common;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseOutput {

    private String output;
    private Double probability;
    private Providers provider;

}
