import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Makeup } from '../models';
import { AddMakeupFacade } from './add-makeup.facade';
import { AddMakeupStorage } from './add-makeup.storage';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [AddMakeupStorage]
})
export class AddComponent implements OnInit {

  searchKey: string = '';
  searchHasError = false;
  selectedMakeup$: Observable<Makeup[] | undefined> | undefined = undefined;

  constructor(private facade: AddMakeupFacade) {}

  ngOnInit(): void {
    this.facade.restoreState();
  }

  get lastThreeSearches(): string[] {
     return this.facade.lastThreeSearches;
  }

  search() {
    if (!this.searchKey) {
      return;
    }
    this.facade.addToLastSearches(this.searchKey);
   this.fetchMakeup(this.searchKey);
  }

  fetchMakeup(name: string) {
    this.selectedMakeup$ = this.facade.fetchMakeup(name);

  }


}
