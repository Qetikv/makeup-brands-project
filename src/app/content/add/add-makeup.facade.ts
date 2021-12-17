import { Injectable } from '@angular/core';
import { finalize, map, tap } from 'rxjs/operators';
import { LoadingService } from 'src/app/services';
import { EventBusService } from 'src/app/services/event-bus.service';
import { FireApiService } from 'src/app/services/fire-api.service';
import { Makeup, MakeupResult } from '../models';
import { FORM_RESET_EVENT_KEY, MakeupBody } from '../models/content.model';
import { Country, CountryResult } from '../models/country.model';
import { CurrencyApiService } from '../services/currency-api.service';
import { MakeUpApiService } from '../services/makeup-api.service';
import { AddMakeupStorage } from './add-makeup.storage';

@Injectable({
  providedIn: 'root',
})
export class AddMakeupFacade {
  constructor(
    private makeUpApiService: MakeUpApiService,
    private loadingService: LoadingService,
    private currencyApiService: CurrencyApiService,
    private storage: AddMakeupStorage,
    private fireApiService: FireApiService,
    private eventBus: EventBusService
  ) {}

  get lastThreeSearches(): string[] {
    return this.storage.lastThreeSearches;
  }
  private mapCountry(country: CountryResult[]): Country {
    const cc = country[0];
    return {
      name: cc.name.common,
      population: cc.population,
      flagUrl: this.currencyApiService.getFlagUrl(cc.cca2.toLowerCase()),
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
          .pipe(map<CountryResult[], Country>((c) => this.mapCountry(c)));

        countriesCurrency$.subscribe((x) => console.log(x));
      }),
      map<MakeupResult[], Makeup[] | undefined>(
        (makeups) =>
          makeups.map((makeup) => {
            return {
              id: makeup.id,
              name: makeup.name,
              pictureUrl: makeup.api_featured_image,
              currency: [],
            };
          }),

        finalize(() => {
          this.loadingService.stop();
          this.eventBus.emit(FORM_RESET_EVENT_KEY)
        })
      )
    );
  }

  addToLastSearches(name: string) {
    this.storage.addToLastSearches(name);
  }

  restoreState() {
    this.storage.restoreState();
  }

  submit(body: MakeupBody) {
    this.fireApiService.addMakeup(body).subscribe(x => console.log(x));
  }
}
