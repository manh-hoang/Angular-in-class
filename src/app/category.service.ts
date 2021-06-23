import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

export class category {
  id:number=0;
  name:string='';
  status:number=0
}


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }


    // tslint:disable-next-line:typedef

  getListCategory():Observable<category[]>{
    return this.http.get<category[]>('http://localhost:3000/category');
  }
  
  createCategory(newObj:category):Observable<category>{
    return this.http.post<category>('http://localhost:3000/category' , newObj)
  }

  deleteCategory(id:number):Observable<category>{
    return this.http.delete<category>('http://localhost:3000/category'+'/'+`${id}`)
  }
  
  getCategoryId(id:number):Observable<category>{
    return this.http.get<category>('http://localhost:3000/category'+'/'+`${id}`);
  }

  updateCategory(id:number ,newObj:category ):Observable<category>{
    return this.http.put<category>('http://localhost:3000/category'+'/'+`${id}`,newObj);
  }
}
