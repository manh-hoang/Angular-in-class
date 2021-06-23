import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginAdminComponent } from './login-admin/login-admin.component';


const routes: Routes = [
  //{path:'',loadChildren:()=>import('./custunmern/custunmern.module').then (m =>m.CustunmernModule) },
  {path:'',loadChildren:()=>import('./custunmern/custunmern.module').then (m =>m.CustunmernModule) },
  {path:'admin',canActivate:[AuthGuard],loadChildren:()=>import('./admin/admin.module').then (m =>m.AdminModule)},
  { path: 'login-admin', component:LoginAdminComponent },


  // {path:'admin',canActivate:[AuthGuard],loadChildren:()=>import('./admin/admin.module').then (m =>m.AdminModule)},
  // { path: 'about', component:AboutComponent },
  // { path: 'home', component:HomeComponent },
  // { path: '', component:CameinComponent },
  //  { path: 'add-category', component:AddCategoryComponent },
  // { path:'update/:id',component:UpdateComponent},
  // { path:'custenmern',component:CustunmernComponent},
 // { path:'adminhome',component:AdminhomeComponent},
  // { path:'admin',component:AdminComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
