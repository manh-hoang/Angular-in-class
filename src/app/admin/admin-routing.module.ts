import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from '../add-product/add-product.component';
import { AddProducttrueComponent } from '../add-producttrue/add-producttrue.component';
import { AddCategoryComponent } from '../pages/add-category/add-category.component';
import { UpdateComponent } from '../pages/update/update.component';
import { UpdateAccountComponent } from '../update-account/update-account.component';
import { UpdateProductComponent } from '../update-product/update-product.component';
import { AdminComponent } from './admin/admin.component';
import { AdminfooterComponent } from './adminfooter/adminfooter.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';

const routes: Routes = [
  { path:"" , component:AdminComponent , children:[
    { path:"adminheader" , component:AdminheaderComponent},
    { path:"adminhome" , component:AdminhomeComponent},
    { path:"" , component:AdminhomeComponent},
    { path:"adminfooter" , component:AdminfooterComponent},
    { path: 'add-category', component:AddCategoryComponent },
    { path:'update/:id',component:UpdateComponent},
    { path:'add-account',component:AddProductComponent},
    { path:'update-account/:id',component:UpdateAccountComponent},
    { path:'add-product',component:AddProducttrueComponent},
    { path:'update-product/:id',component:UpdateProductComponent},






  ]},
  // { path:"adminheader" , component:AdminheaderComponent},
  // { path:"adminfooter" , component:AdminfooterComponent},
  // { path: 'add-category', component:AddCategoryComponent },
  // { path:'update/:id',component:UpdateComponent},

 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
