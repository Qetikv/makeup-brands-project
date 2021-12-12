import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ContentComponnent } from './content.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponnent,
  },
  // {
  //   path: 'sign-in',
  //   component: SignInComponent,
  // },
  // {
  //   path: 'sign-up',
  //   component: SignUpComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ContentRoutingModule {
  routes: Routes = [];
}
