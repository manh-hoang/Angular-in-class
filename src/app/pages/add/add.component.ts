import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { category, CategoryService } from 'src/app/category.service';
import{FormControl,FormGroup,FormBuilder, Validators}from '@angular/forms'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  list_product:category[] =[];
  formGroup=FormGroup;

  constructor(private svCategoru:CategoryService,private fb:FormBuilder) { }

  ngOnInit(): void {
   
    

  }
  

}
