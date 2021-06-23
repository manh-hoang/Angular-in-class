import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

export class product {
  id:number=0;
  name:string='';
  price:string='';
  sale_price:string='';
  image:string='';
  category_id:number=0;
  status:number=1;
  description:string='';
  created_at:string='';

  


}
@Injectable({
  providedIn: 'root'
})
export class ProducttrueService {

  constructor(private http: HttpClient) { }

  getListProduct():Observable<product[]>{
    return this.http.get<product[]>('http://localhost:3000/product');
  }
  
  createProduct(newObj:product):Observable<product>{
    return this.http.post<product>('http://localhost:3000/product' , newObj)
  }

  deleteProduct(id:number):Observable<product>{
    return this.http.delete<product>('http://localhost:3000/product'+'/'+`${id}`)
  }
  
  getProductId(id:number):Observable<product>{
    return this.http.get<product>('http://localhost:3000/product'+'/'+`${id}`);
  }

  updateProduct(id:number ,newObj:product ):Observable<product>{
    return this.http.put<product>('http://localhost:3000/product'+'/'+`${id}`,newObj);
  }
  getListProductCategory(categoryid:number):Observable<product[]>{
    return this.http.get<product[]>('http://localhost:3000/productcategory'+'/'+`${categoryid}`);
  }
  getListProductPage(page:number):Observable<product[]>{
    return this.http.get<product[]>('http://localhost:3000/product/page'+'/'+`${page}`);
  }
}
