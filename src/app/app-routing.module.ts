import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ApartmentComponent} from "./list-apartment/apartment.component";
import {DetailsApartmentsComponent} from "./details-apartments/details-apartments.component";
import {AddApartmentsComponent} from "./add-apartments/add-apartments.component";


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "apartments", component: ApartmentComponent},
  {path: "apartments/new", component: AddApartmentsComponent},
  {path: "apartments/:id/edit", component: AddApartmentsComponent},
  {path: "apartments/:id/details", component: DetailsApartmentsComponent},
  {path: "", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
