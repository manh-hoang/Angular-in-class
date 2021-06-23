import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustunmernRoutingModule } from './custunmern-routing.module';
import { CustunmernComponent } from './layout/custunmern/custunmern.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CushomeComponent } from './cushome/cushome.component';
import { CusheaderComponent } from './cusheader/cusheader.component';
import { CusfooterComponent } from './cusfooter/cusfooter.component';
import { CateCategoryComponent } from './cate-category/cate-category.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    CustunmernComponent,
    CushomeComponent,
    CusheaderComponent,
    CusfooterComponent,
    CateCategoryComponent,
    DetailComponent,
  
  ],
  imports: [
    CommonModule,
    CustunmernRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
   
  ],
  exports :[
    CushomeComponent,
    CustunmernComponent,
    
  ]
})
export class CustunmernModule { }
