import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ContentComponnent } from './content.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MakeUpApiService } from './services/makeup-api.service';
import { CurrencyApiService } from './services/currency-api.service';

@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    ContentComponnent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    SharedModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  providers:[MakeUpApiService,CurrencyApiService]
})

export class ContentModule { }
