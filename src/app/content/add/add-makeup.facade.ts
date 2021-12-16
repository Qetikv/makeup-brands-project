import { Injectable } from '@angular/core';
import { finalize, map, tap } from 'rxjs/operators';
import { LoadingService } from 'src/app/services';
import { Makeup, MakeupResult } from '../models';
import { Country, CountryResult } from '../models/country.model';
import { CurrencyApiService } from '../services/currency-api.service';
import { MakeUpApiService } from '../services/makeup-api.service';

@Injectable({
  providedIn: 'root',
})
export class AddMakeupFacade {
  constructor(
    private makeUpApiService: MakeUpApiService,
    private loadingService: LoadingService,
    private currencyApiService: CurrencyApiService
  ) {}

 private mapCountry(country: CountryResult[]): Country {
  const cc = country[0];
  return {
    name: cc.name.common,
    population: cc.population,
    flagUrl: this.currencyApiService.getFlagUrl(
      cc.cca2.toLowerCase())

  };
}



  fetchMakeup(name: string) {
    this.loadingService.start();
    return this.makeUpApiService.getMakeupByName(name).pipe(
      tap((makeup) => {
        const currency = makeup.map((makeup) => makeup.currency);

        console.log(makeup);
        if (!makeup.length) {
          return;
        }

        const countriesCurrency$ = this.currencyApiService
          .getCurrency(currency[0])
          .pipe(
            map<CountryResult[], Country>((c) => this.mapCountry(c))


          );

        countriesCurrency$.subscribe((x) => console.log(x));
      }),
      map<MakeupResult[], Makeup[] | undefined>(
        (makeups) =>
          makeups.map((makeup) => {
            return {
              name: makeup.name,
              pictureUrl: makeup.api_featured_image,
              currency: [],
            };
          }),

        finalize(() => this.loadingService.stop())
      )
    );
  }
}
