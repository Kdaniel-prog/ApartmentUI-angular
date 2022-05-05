import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class DataService {

  constructor() { }

  setApartment(apartment: any) {
    window.localStorage.setItem('apartment', JSON.stringify(apartment))
  }
  getApartment(){
    return JSON.parse(localStorage.getItem('apartment') || '{}')
  }

  setEdit(edit: boolean){
    window.localStorage.setItem('edit', JSON.stringify(edit))
  }
  getEdit(){
    return JSON.parse(localStorage.getItem('edit') || '{}')
  }

}
