import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

// import { EmployeeModule } from './employees/employee.module';

import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';

@NgModule({
  declarations: [AppComponent, AddEmployeeComponent, GoogleMapsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBHpWnfFyi4S_Z4r2CcbTWG-7XFvqLVy8Q'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
