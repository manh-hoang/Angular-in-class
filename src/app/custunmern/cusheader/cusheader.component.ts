import { Component, OnInit } from '@angular/core';
import { category, CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-cusheader',
  templateUrl: './cusheader.component.html',
  styleUrls: ['./cusheader.component.css']
})
export class CusheaderComponent implements OnInit {

  constructor(private listCate:CategoryService) { }
  name:string="";
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

}
