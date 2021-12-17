import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/services';
import { Makeup } from '../models';
import { MakeupBody, RATINGS, Status, WhenToBuy, WhenToBuySelect, WHEN_TO_BUY } from '../models/content.model';
import { AddMakeupFacade } from './add-makeup.facade';
import { AddMakeupStorage } from './add-makeup.storage';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [AddMakeupStorage],
})
export class AddComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();

  status = Status;
  searchKey: string = '';
  form: FormGroup = new FormGroup({});
  searchHasError = false;
  submitted = false;
  selectedMakeup$: Observable<Makeup[] | undefined> | undefined = undefined;

  constructor(private facade: AddMakeupFacade, private auth: AuthService) {}
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    this.buildForm();
    this.facade.restoreState();

    this.form
      .get('status')?.valueChanges.pipe(takeUntil(this.unsubscribe$))
      .subscribe((status) => this.addControlsByStatus(status));
  }

  private addControlsByStatus(status: Status) {
    switch(status) {
      case Status.Purchase_Later:
        this.form.addControl('whenToBuy', new FormControl(null,Validators.required));
        break;
      case Status.Purchased:
        this.form.removeControl('whenToBuy');
        break;
    }
  }

  private buildForm() {
    this.form = new FormGroup({
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      rating: new FormControl(1),
      status: new FormControl(Status.Purchased),
    });
  }

  submit(selectedMakeup: Makeup) {
    this.submitted = true;
    console.log(this.form.value);

    if(this.form.invalid){
      return;
    }
    const value = this.form.value;

    const body: MakeupBody = {
      id:  selectedMakeup.id,
      uid: this.auth.userId,
      description: value.description,
      rating: value.rating,
      status: value.status,
      whenToBuy: value.whenToBuy || ''
    }
this.facade.submit(body);
  }

  get lastThreeSearches(): string[] {
    return this.facade.lastThreeSearches;
  }

  get whenToBuy(): WhenToBuySelect[] {
     return WHEN_TO_BUY;
  }
  get ratings(): number[] {
    return RATINGS;
  }

  get canBuyLater(): boolean {
    return !!this.form.get('whenToBuy')
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
