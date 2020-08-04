package com.jquispeluyo.azureml.bigml.services;

import com.jquispeluyo.azureml.bigml.domain.dto.OutPredictionDto;
import com.jquispeluyo.azureml.bigml.domain.models.InputPrediccionBody;

public interface PredictionService {

    OutPredictionDto predict (InputPrediccionBody body);

}
