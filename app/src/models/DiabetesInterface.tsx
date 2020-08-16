export interface DiabetesForm {
  inputs: Inputs;
  globalParameters: any;
}

export interface GlobalParameters {
}

export interface Inputs {
  input1: Input1[];
}

export interface Input1 {
  embarazos: number;
  glucosa: number;
  presion_sanguinea: number;
  pliegue_cutaneo: number;
  insulina: number;
  indice_de_masa_corporal: number;
  pedigri_diabetes: number;
  edad: number;
}