import { Component, OnInit } from '@angular/core';
import { category, CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

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

  delete(id:number){
    this.listCate.deleteCategory(id).subscribe((res)=>{
      console.log('xoa nhe');
      this.ngOnInit();
    });
    
    
  }
  
}
