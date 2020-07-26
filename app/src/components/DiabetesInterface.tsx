export interface DiabetesForm {
  inputs: Inputs;
  globalParameters: GlobalParameters;
}

export interface GlobalParameters {
}

export interface Inputs {
  input1: Input1[];
}

export interface Input1 {
  embarazos: string;
  glucosa: string;
  presion_sanguinea: string;
  pliegue_cutaneo: string;
  insulina: string;
  indice_de_masa_corporal: string;
  pedigri_diabetes: string;
  edad: string;
  diabetes: string;
  medicacion_previa: string;
  observaciones: string;
  fecha_de_diagnostico: string;
}