import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product, ProducttrueService } from 'src/app/producttrue.service';

@Component({
  selector: 'app-cate-category',
  templateUrl: './cate-category.component.html',
  styleUrls: ['./cate-category.component.css']
})
export class CateCategoryComponent implements OnInit {
  
  constructor(private productSv:ProducttrueService , private acRouter : ActivatedRoute) { }
  name:string="";
  listProduct:product[]=[];
  

  ngOnInit(): void {
    this.getListProductCategory();
  }
  detail(){
    window.alert('hello');
  }
  getListProductCategory(){
    let categoryid = this.acRouter.snapshot.params.id;
    console.log(categoryid);
    this.productSv.getListProductCategory(categoryid).subscribe((res:any)=>{
      this.listProduct=res;
      console.log(this.listProduct)
      this.ngOnInit();
    });
  }
  

}
