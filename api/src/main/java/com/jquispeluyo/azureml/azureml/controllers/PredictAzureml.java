package com.jquispeluyo.azureml.azureml.controllers;

import com.jquispeluyo.azureml.azureml.services.PredictionAzuremlService;
import com.jquispeluyo.azureml.common.RequestInput;
import com.jquispeluyo.azureml.common.ResponseOutput;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("azureml")
@CrossOrigin
public class PredictAzureml {

    @Autowired
    PredictionAzuremlService predictionAzuremlService;

    @PostMapping("/predict")
    public ResponseOutput predict(@RequestBody RequestInput obj){
        return predictionAzuremlService.predict(obj);
    }

}
