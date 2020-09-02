package com.jquispeluyo.azureml.ml.service;

import com.jquispeluyo.azureml.common.RequestInput;
import com.jquispeluyo.azureml.common.ResponseOutput;

import java.util.List;

public interface MlService {

    List<ResponseOutput> predict(RequestInput req);

}
