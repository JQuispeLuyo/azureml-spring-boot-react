export interface Inputdata {
  ingresos: number;
  ahorros: number;
  hijos: number;
  trabajo: number;
  financiar: number;
}


export interface OutPredictionDto {
    provider:Provider
    output: string,
    probability: number
}

export interface History {
  historyItem: Array<HistoryItem>
}

export interface HistoryItem {
  predicts: Array<OutPredictionDto>
}

export enum Provider {
    AZURE,
    BIG_ML
}