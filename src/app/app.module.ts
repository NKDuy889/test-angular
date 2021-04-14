import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EmployeeComponent } from './test2/employee.component';
import {MusicService} from './service/music.service';
import {HttpClientModule} from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { DepartmentComponent } from './department-component/department.component';
import { ModalDerpartmentComponent } from './modal-derpartment/modal-derpartment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeeComponent,
    NavComponent,
    DepartmentComponent,
    ModalDerpartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [MusicService],
  entryComponents: [ModalDerpartmentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
