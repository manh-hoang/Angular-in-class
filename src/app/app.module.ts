import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { AddComponent } from './pages/add/add.component';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { UpdateComponent } from './pages/update/update.component';
import { CustunmernComponent } from './custunmern/layout/custunmern/custunmern.component';
import { CameinComponent } from './camein/camein.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
import { AdminfooterComponent } from './admin/adminfooter/adminfooter.component';
import { AdminComponent } from './admin/admin/admin.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { AdminModule } from './admin/admin.module';
import { CustunmernModule } from './custunmern/custunmern.module';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { AddProducttrueComponent } from './add-producttrue/add-producttrue.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    AboutComponent,
    AddComponent,
    AddCategoryComponent,
    UpdateComponent,
    CameinComponent,
    AddProductComponent,
    UpdateProductComponent,
    UpdateAccountComponent,
    AddProducttrueComponent,
    LoginAdminComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    CustunmernModule,
    AdminModule,
   
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
