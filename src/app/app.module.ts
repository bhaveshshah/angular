import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { TruncatePipe } from './pipe/truncate.pipe';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { MainComponent } from './Layout/main/main.component';
import { EventsComponent } from './Practice/events.component';
import { ShowUserComponent } from './Employee/show-user/show-user.component';
import { PipesComponent } from './Practice/pipes.component';
import { FavroitesComponent } from './favroites/favroites.component';
import { ReactiveFormsComponent } from './Practice/Forms/reactive-forms/reactive-forms.component';

import { GoogleMapsComponent } from './google-maps/google-maps.component';

import { RequestService } from './core/services/request.service';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapsComponent,
    HeaderComponent,
    MainComponent,
    ShowUserComponent,
    EventsComponent,
    PipesComponent,
    FavroitesComponent,
    ReactiveFormsComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBHpWnfFyi4S_Z4r2CcbTWG-7XFvqLVy8Q'
    })
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule {}
