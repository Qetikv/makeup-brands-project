import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeupListItemComponent } from './makeup-list-item.component';

describe('MovieListItemComponent', () => {
  let component: MakeupListItemComponent;
  let fixture: ComponentFixture<MakeupListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeupListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeupListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
