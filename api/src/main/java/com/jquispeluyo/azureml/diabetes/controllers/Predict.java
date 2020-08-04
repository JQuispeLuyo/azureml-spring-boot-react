package com.jquispeluyo.azureml.diabetes.controllers;

import com.jquispeluyo.azureml.diabetes.models.input.dto.PayloadDto;
import com.jquispeluyo.azureml.diabetes.models.output.dto.PayloadOutDto;
import com.jquispeluyo.azureml.diabetes.services.AzureMl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("diabetes")
@CrossOrigin
public class Predict {

    @Autowired AzureMl azureMl;

    @PostMapping("/predict")
    public PayloadOutDto predict(@RequestBody PayloadDto obj){
        System.out.println(obj);
        return azureMl.predict(obj);
    }

}
