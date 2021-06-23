import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { product, ProducttrueService } from 'src/app/producttrue.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor( private fb : FormBuilder, private productSv:ProducttrueService , private acRouter : ActivatedRoute) { }
  listProduct:product[]=[]
  
  
  ngOnInit(): void {
    let id = this.acRouter.snapshot.params.id
    console.log(id);
    this.productSv.getProductId(id).subscribe((res) => {
     this.listProduct[0]=res
    });
  }

 
    

  

}
