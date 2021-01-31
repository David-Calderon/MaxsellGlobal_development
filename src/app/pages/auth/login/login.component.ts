import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(private auth:AuthService) { }
	correo:string
	contrasena:string
	ngOnInit(): void {
	}

	onLogin(){
		this.auth.accesoLogin(this.correo,this.contrasena)

  }

  onGoogleLogin(){

  }

 
}
