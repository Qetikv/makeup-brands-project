import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Makeup } from '../models';
import { AddMakeupFacade } from './add-makeup.facade';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  lastThreeSearches = [];

  searchKey: string = '';
  searchHasError = false;
  selectedMakeup$: Observable<Makeup[] | undefined> | undefined = undefined;

  constructor(private facade: AddMakeupFacade) {}

  ngOnInit(): void {}

  search() {
    if (!this.searchKey) {
      return;
    }
    this.selectedMakeup$ = this.facade.fetchMakeup(this.searchKey);
  }


}
