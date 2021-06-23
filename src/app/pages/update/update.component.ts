import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {  category, CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  listCategory:category[]=[];
  constructor(private fb:FormBuilder, private cateSv :CategoryService ,private acRouter:ActivatedRoute) { }
  
  inforForm =this.fb.group({
    "name":[null],
    "status":[null]
  });
  ngOnInit(): void {
    let id = this.acRouter.snapshot.params.id;
    console.log(id);
    this.cateSv.getCategoryId(id).subscribe((res)=>{
      this.inforForm=this.fb.group({
        "name":[`${res.name}`],
        "status":[`${res.status}`]
      });
    })
  }
  
  update(){
    let id = this.acRouter.snapshot.params.id;
      this.cateSv.updateCategory(id, this.inforForm.value).subscribe((res)=>{
      alert('Uppdate finish'); 
      location.href="/add-category"
      });
    
  }


}
