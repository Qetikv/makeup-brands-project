
export interface CountryResult {
  population: number;
  name: {common: string};
  cca2: string;
}

export interface Country {
  population: number;
  flagUrl: string;
  name: string;
}
