import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { finalize, map, switchMap } from 'rxjs/operators';
import { FireApiService } from 'src/app/services/fire-api.service';
import { LoadingService } from 'src/app/services/loading.service';
import { MakeupListItem,  MakeupWithId } from '../models/content.model';
import { MakeupResult } from '../models/makeup.model';
import { MakeUpApiService } from '../services';
// import { MovieListItem, MovieResult, MovieWithId } from '../catalogue.model';
// import { FireApiService, MovieApiService } from '../services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  movies$: Observable<MakeupListItem[]> | undefined;

  constructor(
    private loadingService: LoadingService,
    private fireApiService: FireApiService,
    private makeupApiService: MakeUpApiService
  ) {}

  // private mapMovieData(data: MakeupWithId[]) {
  //   return data.map((d) =>
  //     this.makeupApiService.getMakeupByName(d.id).pipe(
  //       map<MakeupResult, MakeupListItem>((makeup) => ({
  //         id, brand, name, category
  //       }))
  //     )
  //   );
  // }

  ngOnInit() {
    this.loadingService.start();
    // this.movies$ = this.fireApiService.getMakeup().pipe(
    //   switchMap((data) => forkJoin(this.mapMovieData(data))),
    //   finalize(() => this.loadingService.stop())
    // );
  }
}


// function linear(x: number) {
//   return x + 1;
// }

// const y1 = linear(1);
// const y2 = linear(1);

// pure => dumb => presentational => child (components) (does not change state) (is predictable)
// impure => smart => container => parent (components) (changes state) (is not predictable)
