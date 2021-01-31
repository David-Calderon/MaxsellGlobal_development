import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { LoginComponent } from './pages/auth/login/login.component';
import { AppRouting } from './app-routing.module';
import { RegisterComponent } from './pages/auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReviewRequestComponent } from './pages/admin/review-request/review-request.component';
import { ComponentsModule } from './components/components.module';
export const  firebase = {
	apiKey: "AIzaSyBbK80Yweyrq1mberzw2caipob7xUb4i-8",
	authDomain: "maxsellglobal-technology.firebaseapp.com",
	projectId: "maxsellglobal-technology",
	storageBucket: "maxsellglobal-technology.appspot.com",
	messagingSenderId: "990412668117",
	appId: "1:990412668117:web:dac0ffa19327aebd63f65c",
	measurementId: "G-6198ZJ5PQX"
};
@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    ReviewRequestComponent
	],
	imports: [
		BrowserModule,
    FormsModule,
    ReactiveFormsModule,
		AngularFireModule.initializeApp(firebase),
		AngularFireAuthModule,
		AngularFirestoreModule,
		AppRouting,
		ComponentsModule,

	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
