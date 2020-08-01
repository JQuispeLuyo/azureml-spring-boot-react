package com.jquispeluyo.azureml.services;

import com.jquispeluyo.azureml.models.input.dto.PayloadDto;
import com.jquispeluyo.azureml.models.output.dto.PayloadOutDto;

public interface AzureMl {
    PayloadOutDto predict (PayloadDto obj);
}
