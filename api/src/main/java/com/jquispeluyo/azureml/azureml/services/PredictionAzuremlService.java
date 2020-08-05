package com.jquispeluyo.azureml.azureml.services;

import com.jquispeluyo.azureml.common.RequestInput;
import com.jquispeluyo.azureml.common.ResponseOutput;

public interface PredictionAzuremlService {

    ResponseOutput predict (RequestInput body);

}
