import { Component, OnInit } from '@angular/core';
import {Apartment} from "../Apartment";
import{DataService} from "../data.service";

@Component({
  selector: 'app-details-apartments',
  templateUrl: './details-apartments.component.html',
  styleUrls: ['./details-apartments.component.css']
})

export class DetailsApartmentsComponent implements OnInit {
  closeResult: string = "";
  apartment!: Apartment;
  constructor(private data: DataService)
  {
  }

  ngOnInit(): void {
    this.apartment = this.data.getApartment()
    this.openDetails()
    this.data.setApartment("")
  }

  openDetails() {
    document.getElementById('a.id')!!.setAttribute('value', String(this.apartment.id));
    document.getElementById('a.address')!!.setAttribute('value', this.apartment.address);
    document.getElementById('a.price')!!.setAttribute('value', String(this.apartment.price));
    document.getElementById('a.room')!!.setAttribute('value', String(this.apartment.room));
    document.getElementById('a.area')!!.setAttribute('value', String(this.apartment.area));
  }

}
