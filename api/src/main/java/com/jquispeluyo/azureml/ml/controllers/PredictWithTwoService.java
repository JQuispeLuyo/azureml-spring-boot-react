package com.jquispeluyo.azureml.ml.controllers;

import com.jquispeluyo.azureml.common.RequestInput;
import com.jquispeluyo.azureml.common.ResponseOutput;
import com.jquispeluyo.azureml.ml.service.MlService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("ml")
@CrossOrigin
public class PredictWithTwoService {

    MlService mlService;

    public PredictWithTwoService(MlService mlService) {
        this.mlService = mlService;
    }

    @PostMapping("/azure-bigml")
    public List<ResponseOutput> predic (@RequestBody RequestInput obj){
        return mlService.predict(obj);
    }

}
