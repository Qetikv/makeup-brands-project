import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { NotFoundComponent } from './shell/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m)=> m.AuthModule)
  },
  {
    path: 'content',
    loadChildren: () => import('./content/content.module').then((m)=> m.ContentModule)
  },
  {
    path:'**', component: NotFoundComponent
  }

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
   routes: Routes = [

  ];
}
