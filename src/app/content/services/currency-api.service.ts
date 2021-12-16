import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { MakeupResult } from "../models";

@Injectable({
  providedIn: 'root',
})

export class CurrencyApiService {
  constructor(private http: HttpClient) {}

  getCurrency(currency: string): Observable<any> {
    return this.http.get<any>(`${environment.currencyApiBase}/currency/${currency}`);
  }
  getFlagUrl(code: string): string {
    return `https://flagpedia.net/data/flags/icon/36x27/${code}.png`
  }

}
