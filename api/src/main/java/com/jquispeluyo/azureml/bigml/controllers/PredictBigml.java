package com.jquispeluyo.azureml.bigml.controllers;

import com.jquispeluyo.azureml.bigml.domain.dto.OutPredictionDto;
import com.jquispeluyo.azureml.bigml.domain.models.InputPrediccionBody;
import com.jquispeluyo.azureml.bigml.services.PredictionService;
import com.jquispeluyo.azureml.common.RequestInput;
import com.jquispeluyo.azureml.common.ResponseOutput;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("bigml")
@CrossOrigin
public class PredictBigml {

    @Autowired
    PredictionService predictionService;

    @PostMapping("/predict")
    public ResponseOutput predict(@RequestBody RequestInput obj){
        return predictionService.predict(obj);
    }

}
