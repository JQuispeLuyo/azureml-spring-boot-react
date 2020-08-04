package com.jquispeluyo.azureml.bigml.domain.dto;

import lombok.Data;

@Data
public class OutPredictionDto {

    private String creator;
    private String dataset;
    private String model;
    private String name;
    private String objective_field_name;
    private String output;
    private Double probability;
    private String resource;
    private String task;

}
