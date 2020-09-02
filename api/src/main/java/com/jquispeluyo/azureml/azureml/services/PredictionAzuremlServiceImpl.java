package com.jquispeluyo.azureml.azureml.services;

import com.jquispeluyo.azureml.azureml.domain.input.Input1;
import com.jquispeluyo.azureml.azureml.domain.input.Inputs;
import com.jquispeluyo.azureml.azureml.domain.input.Payload;
import com.jquispeluyo.azureml.azureml.domain.output.OutPrediction;
import com.jquispeluyo.azureml.common.Providers;
import com.jquispeluyo.azureml.common.RequestInput;
import com.jquispeluyo.azureml.common.ResponseOutput;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class PredictionAzuremlServiceImpl implements PredictionAzuremlService {

    @Autowired
    RestTemplate restTemplate;
    HttpHeaders headers = new HttpHeaders();

    String URL = "https://ussouthcentral.services.azureml.net/workspaces/b0a2a545252646b886829c38f8560673/services/fe72ad4c804f4d2c8b3bdcbaef84fe09/execute?api-version=2.0&format=swagger";
    String API_KEY = "cb+MJ8iIFfkKupARwGxD3fDRScp5eXWTFlqATv31xJ/iDJ160/o2QQufqH3mEgAt35PeffXYuZLnlFcm2D0YIA==";

    @Override
    public ResponseOutput predict(RequestInput obj) {

        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer " + API_KEY);

        HttpEntity<Payload> entity = new HttpEntity<>(requetToPayload(obj), headers);
        ResponseEntity<OutPrediction> response = restTemplate.postForEntity(URL, entity, OutPrediction.class);

        return responseToOutput(response);
    }

    private ResponseOutput responseToOutput( ResponseEntity<OutPrediction> response){

        Integer output = Objects.requireNonNull(response.getBody().getResults().getOutput1().get(0).getScored_labels());
        Double probability = Objects.requireNonNull(response.getBody().getResults().getOutput1().get(0).getScored_probabilities());

        ResponseOutput responseOutput = new ResponseOutput(
                "",
                probability,
                Providers.AZURE
        );

        if(output == 0){
            responseOutput.setOutput("Alquilar");
        }else {
            responseOutput.setOutput("Comprar");
        }

        return responseOutput;
    }


    public Payload requetToPayload(RequestInput requestInput) {

        Inputs inputs = new Inputs();
        List<Input1> input = new ArrayList<>();
        input.add(new Input1(
                requestInput.getIngresos(),
                requestInput.getAhorros(),
                requestInput.getHijos(),
                requestInput.getTrabajo(),
                requestInput.getFinanciar()
        ));
        inputs.setInput1(input);
        return new Payload(
                inputs,
                null
        );
    }

}
