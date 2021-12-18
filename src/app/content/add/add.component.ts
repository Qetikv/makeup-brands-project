import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/services';
import { EventBusService } from 'src/app/services/event-bus.service';
import { Makeup } from '../models';
import {
  FORM_RESET_EVENT_KEY,
  MakeupBody,
  RATINGS,
  Status,
  WhenToBuy,
  WhenToBuySelect,
  WHEN_TO_BUY,
} from '../models/content.model';
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

  constructor(
    private eventBus: EventBusService,
    private facade: AddMakeupFacade,
    private auth: AuthService
  ) {}
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    this.buildForm();
    this.facade.restoreState();

    this.form
      .get('status')
      ?.valueChanges.pipe(takeUntil(this.unsubscribe$))
      .subscribe((status) => this.addControlsByStatus(status));
    this.eventBus
      .on(FORM_RESET_EVENT_KEY)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => this.formReset());
  }

  private addControlsByStatus(status: Status) {
    switch (status) {
      case Status.Purchase_Later:
        this.form.addControl(
          'whenToBuy',
          new FormControl(null, Validators.required)
        );
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

    if (this.form.invalid) {
      return;
    }
    const value = this.form.value;

    const body: MakeupBody = {
      id: selectedMakeup.id,
      uid: this.auth.userId,
      description: value.description,
      rating: value.rating,
      status: value.status,
      whenToBuy: value.whenToBuy || '',
    };
    this.facade.submit(body);
    this.formReset();
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
    return !!this.form.get('whenToBuy');
  }

  private formReset() {
    this.form.reset;
    this.form.updateValueAndValidity;

    this.submitted =false;

    this.form.get('description')?.setValue('');
    this.form.get('rating')?.setValue(1);
    this.form.get('status')?.setValue(Status.Purchased);
  }
  search() {
    if (!this.searchKey) {
      this.searchHasError = true;
      return;
    }
    this.facade.addToLastSearches(this.searchKey);
    this.fetchMakeup(this.searchKey);
  }

  fetchMakeup(name: string) {
    this.selectedMakeup$ = this.facade.fetchMakeup(name);
  }
}
