package com.jquispeluyo.azureml.ml.service;

import com.jquispeluyo.azureml.azureml.services.PredictionAzuremlService;
import com.jquispeluyo.azureml.bigml.services.PredictionBigMLService;
import com.jquispeluyo.azureml.common.RequestInput;
import com.jquispeluyo.azureml.common.ResponseOutput;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MlServiceImpl implements MlService{

    PredictionAzuremlService azureService;
    PredictionBigMLService bigmlService;

    public MlServiceImpl(PredictionAzuremlService azureService, PredictionBigMLService bigmlService) {
        this.azureService = azureService;
        this.bigmlService = bigmlService;
    }

    @Override
    public List<ResponseOutput> predict(RequestInput req) {

        ResponseOutput azureResponse = azureService.predict(req);
        ResponseOutput bigmlResponse = bigmlService.predict(req);
        List<ResponseOutput> responseOutput = new ArrayList<>();

        responseOutput.add(
                new ResponseOutput(
                        azureResponse.getOutput(),
                        azureResponse.getProbability(),
                        azureResponse.getProvider()
                )
        );

        responseOutput.add(
                new ResponseOutput(
                        bigmlResponse.getOutput(),
                        bigmlResponse.getProbability(),
                        bigmlResponse.getProvider()
                )
        );

        return responseOutput;
    }
}
