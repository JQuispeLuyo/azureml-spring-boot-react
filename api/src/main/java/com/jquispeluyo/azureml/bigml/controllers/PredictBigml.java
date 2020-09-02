package com.jquispeluyo.azureml.bigml.controllers;

import com.jquispeluyo.azureml.bigml.services.PredictionBigMLService;
import com.jquispeluyo.azureml.common.RequestInput;
import com.jquispeluyo.azureml.common.ResponseOutput;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("bigml")
@CrossOrigin
public class PredictBigml {

    @Autowired
    PredictionBigMLService predictionBigMLService;

    @PostMapping("/predict")
    public ResponseOutput predict(@RequestBody RequestInput obj){
        return predictionBigMLService.predict(obj);
    }

}
