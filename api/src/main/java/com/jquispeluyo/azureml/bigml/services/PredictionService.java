package com.jquispeluyo.azureml.bigml.services;

import com.jquispeluyo.azureml.bigml.domain.dto.OutPredictionDto;
import com.jquispeluyo.azureml.bigml.domain.models.InputPrediccionBody;
import com.jquispeluyo.azureml.common.RequestInput;
import com.jquispeluyo.azureml.common.ResponseOutput;

public interface PredictionService {

    ResponseOutput predict (RequestInput body);

}
