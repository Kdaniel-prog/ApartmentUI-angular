import {AfterViewInit, Component, Injectable, OnInit, ViewChild, Input, Output, EventEmitter} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ModalDismissReasons, NgbModal, NgbModalOptions} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormControl, FormGroup, NgForm} from "@angular/forms";
import {DataService} from "../data.service";
import{Apartment} from "../Apartment";

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})

export class ApartmentComponent implements OnInit {

  apartments: Apartment[] = [];

  closeResult: string = "";
  modalOptions:NgbModalOptions;
  private deleteID: number | undefined;
  viewChange = true;
  constructor(
    private httpClient: HttpClient,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private data: DataService
  ){
    this.modalOptions = {
      backdrop:'static',
    }
  }

  ngOnInit(): void {
    this.getApartments()
  }

  getApartments(){
    this.httpClient.get<any>('http://localhost:8080/api/apartments').subscribe(
      response => {
        console.log(response);
        this.apartments = response;
      }
    );
  }

  open(content: any) {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  openDelete(targetModal: any, apartment: Apartment) {
    this.deleteID = apartment.id;
    this.modalService.open(targetModal, {
    });
  }

  onDelete() {
    const deleteURL = 'http://localhost:8080/api/apartments/' + this.deleteID + '/delete';
    this.httpClient.delete(deleteURL)
      .subscribe(() => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }

  viewChanger(){
    console.log(this.viewChange);
    this.viewChange =! this.viewChange;
  }

  setApartment(apartment: Apartment) {
    this.data.setApartment(apartment)
    this.data.setEdit(true);
  }
}
