package com.jquispeluyo.azureml.diabetes.models.output;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Results {

    List<Output1> output1;

}
