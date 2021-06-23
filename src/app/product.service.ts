import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

export class account {
  id:number=0;
  name:string='';
  email:string='';
  password:string='';
  role:string='';
  creaed_at:string='';
  last_login:string='';
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getListAccount():Observable<account[]>{
    return this.http.get<account[]>('http://localhost:3000/account');
  }
  
  createAccount(newObj:account):Observable<account>{
    return this.http.post<account>('http://localhost:3000/account' , newObj)
  }

  deleteAccount(id:number):Observable<account>{
    return this.http.delete<account>('http://localhost:3000/account'+'/'+`${id}`)
  }
  
  getAccountId(id:number):Observable<account>{
    return this.http.get<account>('http://localhost:3000/account'+'/'+`${id}`);
  }

  updateAccount(id:number ,newObj:account ):Observable<account>{
    return this.http.put<account>('http://localhost:3000/account'+'/'+`${id}`,newObj);
  }
}
