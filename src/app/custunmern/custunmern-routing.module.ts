import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CateCategoryComponent } from './cate-category/cate-category.component';
import { CusfooterComponent } from './cusfooter/cusfooter.component';
import { CusheaderComponent } from './cusheader/cusheader.component';
import { CushomeComponent } from './cushome/cushome.component';
import { DetailComponent } from './detail/detail.component';
import { CustunmernComponent } from './layout/custunmern/custunmern.component';

const routes: Routes = [
  { path:"" , component:CustunmernComponent , children:[
    { path:"cateheader" , component:CusheaderComponent},
    { path:"" , component:CushomeComponent},
    { path:"catehome" , component:CushomeComponent},
    { path:"catefooter" , component:CusfooterComponent},
    { path: 'catecategory/:id', component:CateCategoryComponent },
    { path: 'detail/:id', component:DetailComponent },



  ]},





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustunmernRoutingModule { }
