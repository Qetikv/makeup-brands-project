import { MakeupWithId, Status, WhenToBuy } from "./content.model";
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


export interface MakeupBody {
  id: string,
  uid: string | null | undefined,
  description: string,
  rating: number,
  status: Status,
  whenToBuy: WhenToBuy

}


export interface MakeupListItem {
  data: MakeupWithId;
  makeup: MakeupResult
}


