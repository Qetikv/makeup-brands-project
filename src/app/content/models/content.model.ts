import { MakeupResult } from "./makeup.model";

export const RATINGS =[1,2, 3,4,5]


export enum Status {
  Purchased = "Purchased",
  Purchase_Later ="Purchase later"

}

export enum WhenToBuy {
  Today = "Today",
  Tomorrow ="Tomorrow",
  ThisWeek ="ThisWeek",
  ThisMonth="ThisMonth",
  ThisYear="ThisYear"

}

export interface WhenToBuySelect {
  label:string,
  value: WhenToBuy
}

export const WHEN_TO_BUY: WhenToBuySelect[] = [
  {
    label: 'catalogue.TOMORROW',
    value: WhenToBuy.Tomorrow
  },
  {
    label: 'catalogue.TODAY',
    value: WhenToBuy.Today
  },
  {
    label: 'catalogue.THISWEEK',
    value: WhenToBuy.ThisWeek
  },
  {
    label: 'catalogue.THISMONTH',
    value: WhenToBuy.ThisMonth
  },
  {
    label: 'catalogue.THISYEAR',
    value: WhenToBuy.ThisYear
  }
]

export interface MakeupBody {
  id: string,
  uid: string | null | undefined,
  description: string,
  rating: number,
  status: string,
  whenToBuy: WhenToBuy

}


export interface MakeupListItem {
  data: MakeupWithId;
  makeup: MakeupResult
}


export const FORM_RESET_EVENT_KEY ='FORM_RESET'


export type MakeupWithId = MakeupBody & {id: string};
