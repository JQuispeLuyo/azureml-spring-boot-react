package com.jquispeluyo.azureml.diabetes.services.impl;

import com.jquispeluyo.azureml.diabetes.helpers.ToPayload;
import com.jquispeluyo.azureml.diabetes.helpers.ToPayloadOutDto;
import com.jquispeluyo.azureml.diabetes.models.input.Payload;
import com.jquispeluyo.azureml.diabetes.models.output.PayloadOut;
import com.jquispeluyo.azureml.diabetes.models.input.dto.PayloadDto;
import com.jquispeluyo.azureml.diabetes.models.output.dto.PayloadOutDto;
import com.jquispeluyo.azureml.diabetes.services.AzureMl;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Objects;

@Service
public class AzureMlImpl implements AzureMl {
    RestTemplate restTemplate = new RestTemplate();
    HttpHeaders headers = new HttpHeaders();

    String URL = "https://ussouthcentral.services.azureml.net/workspaces/cf54d08d98c247e28a5806ec25f8cf16/services/5508769c099349279cd305543256d6ba/execute?api-version=2.0&format=swagger";
    String API_KEY = "75pH+H9u+f3dQ3qBqKW42TRe4kxkM0EN6Q8QdJq8ZqM8TMqzpuQjTa+70a46zqzc2K76khDWTr3/vc2Vpju6Zw==";

    @Override
    public PayloadOutDto predict(PayloadDto obj) {

        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer " + API_KEY);

        HttpEntity<Payload> entity = new HttpEntity<>(ToPayload.convert(obj), headers);
        System.out.println("error en peticion creo");
        ResponseEntity<PayloadOut> response = restTemplate.postForEntity(URL, entity, PayloadOut.class);

        return ToPayloadOutDto.convert(Objects.requireNonNull(response.getBody()));
    }

}
