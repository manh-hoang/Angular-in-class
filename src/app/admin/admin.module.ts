import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdminfooterComponent } from './adminfooter/adminfooter.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter'
import { AddCategoryComponent } from '../pages/add-category/add-category.component';
import { UpdateComponent } from '../pages/update/update.component';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [
    AdminhomeComponent,
    AdminComponent,
    AdminheaderComponent,
    AdminfooterComponent,
    
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
   
    
  ],
  exports:[
    AdminhomeComponent,
    AdminComponent,
  ]
  
})
export class AdminModule { }
