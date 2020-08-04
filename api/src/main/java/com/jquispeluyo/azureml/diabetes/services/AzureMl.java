package com.jquispeluyo.azureml.diabetes.services;

import com.jquispeluyo.azureml.diabetes.models.input.dto.PayloadDto;
import com.jquispeluyo.azureml.diabetes.models.output.dto.PayloadOutDto;

public interface AzureMl {
    PayloadOutDto predict (PayloadDto obj);
}
