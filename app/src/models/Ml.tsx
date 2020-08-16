export interface Inputdata {
  ingresos: number;
  ahorros: number;
  hijos: number;
  trabajo: number;
  financiar: number;
  plataforma: string
}

export interface OutPredictionDto {
    output: string,
    probability: number
}

export interface History {
  predicts: Array<OutPredictionDto>
}