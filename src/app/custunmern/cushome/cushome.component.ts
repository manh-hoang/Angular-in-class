import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product, ProducttrueService } from 'src/app/producttrue.service';

@Component({
  selector: 'app-cushome',
  templateUrl: './cushome.component.html',
  styleUrls: ['./cushome.component.css']
})
export class CushomeComponent implements OnInit {
  name:string='';
  listProduct:product[] =[];
  constructor( private productSv : ProducttrueService , private router: Router) { }

  ngOnInit(): void {
   this.nextPage(1);
  }
  //listCategory=this.cate.getListCategory();

  getListProduct(){
    this.productSv.getListProduct().subscribe((res:any)=>{
      this.listProduct=res;
    });
  }
  nextPage(number:number){
    this.productSv.getListProductPage(number).subscribe((res:any)=>{
      this.listProduct=res;
    });
  }
  // detail(id:number){
  //   this.router.navigate([`detail/${id}`])
  // }
}
