import { Component, OnInit } from '@angular/core';
//import { callbackify } from 'node:util';
import { category, CategoryService } from '../category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name:string="hello";
  age:number=20;
  list_product:any[]=[{id:1, name:"hello"  },
  {id:1, name:"hello1"  },
  {id:1, name:"hello2"  },{id:1, name:"hell3"  }]
  constructor(private listCate:CategoryService) { }
  listCategory:category[]=[];

  ngOnInit(): void {
    this.getListCategory();
  }
  //listCategory=this.cate.getListCategory();

  getListCategory(){
    this.listCate.getListCategory().subscribe((res:any)=>{
      this.listCategory=res;
    });
  }

  delete(id:number){
    this.listCate.deleteCategory(id).subscribe((res)=>{
      console.log('xoa nhe');
      location.href="/"
    });
    
    
  }
  // update(id:number){
    
  //   this.listCate.getCategoryId(id).subscribe((res)=>{
  //    console.log(res);
  //     alert(res);
  //   })
  // }


  // log(){
  //   let inputValue = (document.getElementById('value') as HTMLInputElement).value;
  //   console.log(inputValue);
  //   localStorage.setItem("names", JSON.stringify(inputValue));
  // }

}
export const list_product = [
  {id:1, name:"hello"  },
  {id:1, name:"hello1"  },
  {id:1, name:"hello2"  },{id:1, name:"hell3"  }
];
export class list {
  id:number=0;
  name:string=""

}
