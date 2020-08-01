package com.jquispeluyo.azureml.controllers;

import com.jquispeluyo.azureml.models.input.dto.PayloadDto;
import com.jquispeluyo.azureml.models.output.dto.PayloadOutDto;
import com.jquispeluyo.azureml.services.AzureMl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api")
@CrossOrigin
public class Predict {

    @Autowired AzureMl azureMl;

    @PostMapping("/predict")
    public PayloadOutDto predict(@RequestBody PayloadDto obj){
        System.out.println(obj);
        return azureMl.predict(obj);
    }

}
