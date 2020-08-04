package com.jquispeluyo.azureml.bigml.services;

import com.jquispeluyo.azureml.bigml.domain.dto.OutPredictionDto;
import com.jquispeluyo.azureml.bigml.domain.models.InputPrediccionBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class PredictionServiceImpl implements PredictionService {

    @Autowired RestTemplate restTemplate;
    HttpHeaders headers = new HttpHeaders();

    String BASE_URL =  "https://bigml.io/andromeda/prediction";

    @Override
    public OutPredictionDto predict(InputPrediccionBody body) {

        headers.setContentType(MediaType.APPLICATION_JSON);

        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(BASE_URL)
                .queryParam("username", "JQuispeLuyo")
                .queryParam("api_key", "519da3f59cfa92b709e2e32080b175fbf63f55c4");

        HttpEntity<InputPrediccionBody> entity = new HttpEntity<>(body, headers);

        restTemplate.getMessageConverters().add(new MappingJackson2HttpMessageConverter());
        ResponseEntity<OutPredictionDto> response = restTemplate.postForEntity(builder.toUriString(), entity, OutPredictionDto.class);

        return response.getBody();
    }
}
