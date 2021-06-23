import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { product, ProducttrueService } from '../producttrue.service';

@Component({
  selector: 'app-add-producttrue',
  templateUrl: './add-producttrue.component.html',
  styleUrls: ['./add-producttrue.component.css']
})
export class AddProducttrueComponent implements OnInit {
  name:string='';
  listProduct:product[]=[];
  constructor(private fb:FormBuilder, private productSv :ProducttrueService) { }
  inforForm =this.fb.group({
    
    "name":[null],
    "price":[null],
    "sale_price":[null],
    "image":[null],
    "category_id":[null],
    "status":[null],
    "description":[null],
    

  });
  add(){
    this.productSv.createProduct(this.inforForm.value).subscribe((res)=>{
    alert('Add new finish');
    console.log()
    this.ngOnInit();
    })
  };

  ngOnInit(): void {
    this.getListProduct();
  }
  //listCategory=this.cate.getListCategory();

  getListProduct(){
    this.productSv.getListProduct().subscribe((res:any)=>{
      this.listProduct=res;
    });
  }

  deleteproduct(id:number){
    this.productSv.deleteProduct(id).subscribe((res)=>{
      alert("Delete finish");
      this.ngOnInit();
    });
  

}
}
