import { Injectable } from '@angular/core';
import { list_product } from './home/home.component';


@Injectable({
  providedIn: 'root'
})
export class SvService {

  constructor() { }

  getListProduct(){
    return list_product;
  }
}
