import {Component, OnInit,} from '@angular/core';
import {ModalDismissReasons, NgbModal, NgbModalOptions} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormControl, FormGroup, NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import{Apartment} from "../Apartment";
import{DataService} from "../data.service";

@Component({
  selector: 'app-add-apartments',
  templateUrl: './add-apartments.component.html',
  styleUrls: ['./add-apartments.component.css']
})

export class AddApartmentsComponent implements OnInit{
  apartment: Apartment = new Apartment(0,"",0,0,0);

  submitted = false;
  closeResult: string = "";
  constructor(private httpClient: HttpClient, private fb: FormBuilder, private data: DataService)
  {}

  ngOnInit(): void {
    if(this.data.getEdit()){
      this.apartment = this.data.getApartment()
      this.data.setEdit(false);
      console.log(this.apartment ,"add-apartment")
    }
  }

  saveApartment(): void {
    console.log(this.apartment.address,this.submitted)
    const data: Apartment = {
      id: Number(this.apartment.id),
      address: this.apartment.address,
      price:  Number(this.apartment.price),
      room: Number(this.apartment.room),
      area:  Number(this.apartment.area)
    }
    const url = 'http://localhost:8080/api/apartments/new';
    this.httpClient.post(url, data)
      .subscribe(() => {
        this.ngOnInit(); //reload the table
        this.submitted = true;
      });
  }

  newApartment(): void {
    this.submitted = false;
    this.apartment = new Apartment(0,"",0,0,0);

  }



}
