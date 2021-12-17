import { Country } from "./country.model";

export interface MakeupResult {
  id: string,
  brand: string,
  name: string,
  category: string,
  currency: string,
  description: string,
  api_featured_image: string,
  price: string
}

export interface Makeup {
  id:string,
  name: string;
  pictureUrl: string
  currency:Country[];
}[]

