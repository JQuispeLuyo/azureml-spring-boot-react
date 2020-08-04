package com.jquispeluyo.azureml.bigml.services;

import com.jquispeluyo.azureml.bigml.domain.dto.OutPredictionDto;
import com.jquispeluyo.azureml.bigml.domain.models.Input;
import com.jquispeluyo.azureml.bigml.domain.models.InputPrediccionBody;
import com.jquispeluyo.azureml.common.RequestInput;
import com.jquispeluyo.azureml.common.ResponseOutput;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Objects;

@Service
public class PredictionServiceImpl implements PredictionService {

    @Autowired RestTemplate restTemplate;
    HttpHeaders headers = new HttpHeaders();

    String BASE_URL =  "https://bigml.io/andromeda/prediction";

    @Override
    public ResponseOutput predict(RequestInput body) {

        headers.setContentType(MediaType.APPLICATION_JSON);

        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(BASE_URL)
                .queryParam("username", "JQuispeLuyo")
                .queryParam("api_key", "519da3f59cfa92b709e2e32080b175fbf63f55c4");

        InputPrediccionBody inputPrediccionBody = new InputPrediccionBody(
                "model/5f299ced2fb31c295e000a0c",
                new Input(
                        body.getIngresos(),
                        body.getAhorros(),
                        body.getHijos(),
                        body.getTrabajo(),
                        body.getFinanciar()
                )
        );
        HttpEntity<InputPrediccionBody> entity = new HttpEntity<>(inputPrediccionBody, headers);

        restTemplate.getMessageConverters().add(new MappingJackson2HttpMessageConverter());
        ResponseEntity<OutPredictionDto> response = restTemplate.postForEntity(builder.toUriString(), entity, OutPredictionDto.class);

        return responseToOutput(response);
    }

    private ResponseOutput responseToOutput( ResponseEntity<OutPredictionDto> response){
        ResponseOutput responseOutput = new ResponseOutput(
                "",
                Objects.requireNonNull(response.getBody()).getProbability()
        );

        if(response.getBody().getOutput() == 0){
            responseOutput.setOutput("Alquilar");
        }else {
            responseOutput.setOutput("Comprar");
        }

        return responseOutput;
    }

}
