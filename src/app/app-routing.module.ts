import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrdComponent } from './components/private/admin/ordonnance/add-ord/add-ord.component';
import { ListOrdComponent } from './components/private/admin/ordonnance/list-ord/list-ord.component';
import { UpdateOrdComponent } from './components/private/admin/ordonnance/update-ord/update-ord.component';
import { ListPatientComponent } from './components/private/admin/patient/list-patient/list-patient.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { Page404Component } from './components/public/page404/page404.component';
import { RegisterComponent } from './components/public/register/register.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent,},
 {path:"dashboard",component:DashboardComponent,
 canActivate:[AuthGuard]},
 {path:"list-patient",component:ListPatientComponent,
 canActivate:[AdminGuard]},
 {path:"list-ord",component:ListOrdComponent,
 canActivate:[AdminGuard]},
 {path:"add-ord",component:AddOrdComponent,
 canActivate:[AdminGuard]},
 {path:"update-ord/:id",component:UpdateOrdComponent,
 canActivate:[AdminGuard]},
  {path:"**",component:Page404Component},
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
