package com.jquispeluyo.azureml.bigml.controllers;

import com.jquispeluyo.azureml.bigml.domain.dto.OutPredictionDto;
import com.jquispeluyo.azureml.bigml.domain.models.InputPrediccionBody;
import com.jquispeluyo.azureml.bigml.services.PredictionService;
import com.jquispeluyo.azureml.models.input.dto.PayloadDto;
import com.jquispeluyo.azureml.models.output.dto.PayloadOutDto;
import com.jquispeluyo.azureml.services.AzureMl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("bigml")
@CrossOrigin
public class PredictBigml {

    @Autowired
    PredictionService predictionService;

    @PostMapping("/predict")
    public OutPredictionDto predict(@RequestBody InputPrediccionBody obj){
        System.out.println(obj);
        return predictionService.predict(obj);
    }

}
