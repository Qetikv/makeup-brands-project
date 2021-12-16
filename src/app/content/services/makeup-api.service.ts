import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { MakeupResult } from "../models";

@Injectable({
  providedIn: 'root',
})

export class MakeUpApiService {
  constructor(private http: HttpClient) {}

  getMakeupByName(name: string) {
    return this.http.get<MakeupResult[]>(`${environment.makeUpApiBase}?brand=${name}`);
  }
}
