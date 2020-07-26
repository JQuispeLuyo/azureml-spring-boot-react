package com.jquispeluyo.azureml.services.impl;

import com.jquispeluyo.azureml.helpers.ToPayload;
import com.jquispeluyo.azureml.helpers.ToPayloadOutDto;
import com.jquispeluyo.azureml.models.output.PayloadOut;
import com.jquispeluyo.azureml.models.input.dto.PayloadDto;
import com.jquispeluyo.azureml.models.output.dto.PayloadOutDto;
import com.jquispeluyo.azureml.services.AzureMl;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class AzureMlImpl implements AzureMl {
    RestTemplate restTemplate = new RestTemplate();
    HttpHeaders headers = new HttpHeaders();

    String URL = "https://ussouthcentral.services.azureml.net/workspaces/b0a2a545252646b886829c38f8560673/services/edb87251673c471aa9b2a546a8129714/execute?api-version=2.0&format=swagger";
    String API_KEY = "K3t9ScDnOV4fw34Pq4Uu6LhNhTo14jHdOV70Qn0ly/HTLpBShaHMyAJiWOWqGHlAxdvpLQqWHZZQB6U1l5kowQ==";

    @Override
    public PayloadOutDto predict(PayloadDto obj) {

        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer " + API_KEY);

        HttpEntity entity = new HttpEntity(ToPayload.convert(obj), headers);

        ResponseEntity<PayloadOut> response = restTemplate.postForEntity(URL, entity, PayloadOut.class);

        return ToPayloadOutDto.convert(response.getBody());
    }

    @Override
    public PayloadOutDto predictOnlyResult(PayloadDto obj) {

        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer " + API_KEY);

        HttpEntity entity = new HttpEntity(ToPayload.convert(obj), headers);

        ResponseEntity<PayloadOut> response = restTemplate.postForEntity(URL, entity, PayloadOut.class);

        return ToPayloadOutDto.convertOnluResult(response.getBody());
    }


}
