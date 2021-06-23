import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { category, CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  name:string='';
  listCategory:category[]=[];
  constructor(private fb:FormBuilder, private cateSv :CategoryService) { }
  inforForm =this.fb.group({
    "name":[null],
    "status":[null]
  });
  add(){
    this.cateSv.createCategory(this.inforForm.value).subscribe((res)=>{
    alert('Add new finish');
    console.log()
    this.ngOnInit();
    })
  };

  ngOnInit(): void {
    this.getListCategory();
  }
  //listCategory=this.cate.getListCategory();

  getListCategory(){
    this.cateSv.getListCategory().subscribe((res:any)=>{
      this.listCategory=res;
    });
  }
  delete(id:number){
    this.cateSv.deleteCategory(id).subscribe((res)=>{
      console.log('xoa nhe');
      this.ngOnInit();
    });
  }
}
