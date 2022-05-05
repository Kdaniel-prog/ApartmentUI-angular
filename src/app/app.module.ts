import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ApartmentComponent } from './list-apartment/apartment.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";

import { DetailsApartmentsComponent } from './details-apartments/details-apartments.component';
import {AddApartmentsComponent} from "./add-apartments/add-apartments.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApartmentComponent,
    AddApartmentsComponent,
    DetailsApartmentsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule, AppComponent],
  providers: [AddApartmentsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
