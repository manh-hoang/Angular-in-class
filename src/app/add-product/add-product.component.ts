import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { account, ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  name:string="";
  listAccount:account[]=[];
  constructor(private fb:FormBuilder, private accoubtSv :ProductService) { }
  inforForm =this.fb.group({
    
    "name":[null],
    "email":[null],
    "password":[null],
    "role":[null],

  });
  add(){
    this.accoubtSv.createAccount(this.inforForm.value).subscribe((res)=>{
    alert('Add new finish');
    console.log()
    this.ngOnInit();
    })
  };

  ngOnInit(): void {
    this.getListAccount();
  }
  //listCategory=this.cate.getListCategory();

  getListAccount(){
    this.accoubtSv.getListAccount().subscribe((res:any)=>{
      this.listAccount=res;
    });
  }

  deleteAccount(id:number){
    this.accoubtSv.deleteAccount(id).subscribe((res)=>{
      alert("Delete finish");
      this.ngOnInit();
    });
  

}
}



