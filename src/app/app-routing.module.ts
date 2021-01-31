import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./pages/auth/login/login.component";
import { RegisterComponent } from "./pages/auth/register/register.component";
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { CheckLoginGuard } from './guards/check-login.guard';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { GuestGuard } from './guards/guest.guard';
import { ReviewRequestComponent } from './pages/admin/review-request/review-request.component';
import { SuperadminComponent } from './components/superadmin/superadmin.component';

const app_routes : Routes = [
  { path : 'register' , component : RegisterComponent , canActivate: [GuestGuard]},
  { path: 'login' , component: LoginComponent , canActivate:[GuestGuard]},
  { path : 'forgot-password' , component : ForgotPasswordComponent , canActivate: [GuestGuard]},
  { path : 'dashboard' , component : DashboardComponent , canActivate : [CheckLoginGuard] },
  { path : 'review-request' , component: ReviewRequestComponent },
  {path:'superadmin',component:SuperadminComponent},
  { path : "**" , pathMatch : "full" , redirectTo : "login" , canActivate: [GuestGuard]}
];

@NgModule({
	imports:[
		RouterModule.forRoot( app_routes )
	],
	exports : [
		RouterModule
	]
})
export class AppRouting{

}
