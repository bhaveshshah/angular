import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { EmployeeModule } from './employees/employee.module';

import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';

@NgModule({
  declarations: [AppComponent, AddEmployeeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
