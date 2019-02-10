import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowUserComponent } from './Employee/show-user/show-user.component';
import { EventsComponent } from './Practice/events.component';
import { PipesComponent } from './Practice/pipes.component';
import { FavroitesComponent } from './favroites/favroites.component';
import { ReactiveFormsComponent } from './Practice/Forms/reactive-forms/reactive-forms.component';

import { GoogleMapsComponent } from './google-maps/google-maps.component';

const routes: Routes = [
  {
    path: 'showEvents',
    component: EventsComponent
  },
  {
    path: 'showPipes',
    component: PipesComponent
  },
  {
    path: 'showUser/:page',
    component: ShowUserComponent
  },
  {
    path: 'showUser',
    component: ShowUserComponent
  },
  {
    path: 'showFavroites',
    component: FavroitesComponent
  },
  {
    path: 'reactiveForms',
    component: ReactiveFormsComponent
  },
  {
    path: 'googleMaps',
    component: GoogleMapsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
