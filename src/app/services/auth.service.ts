import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:AngularFireAuth, private router:Router) { }



  /* METODO PARA ACCESO LOGIN*/

  public accesoLogin(email,password){
    this.auth.signInWithEmailAndPassword(email,password).then(()=>{
      alert("Cuenta clogueada")
      this.router.navigate(['/dashboard'])
   }).catch(e=>{
      alert(e)
   })
  }

  public registro(email:string,password:string){
    this.auth.createUserWithEmailAndPassword(email,password).then(()=>{
       alert("Cuenta creada")
    }).catch(e=>{
       alert(e)
    })
  }

  public onLogout(){
    this.auth.signOut().then(()=>{
         this.router.navigate(['/'])
    })
  }
  public resetPass(email){
 
    this.auth.sendPasswordResetEmail(email).then(()=>{
        alert("Se ha enviado un enlace a su correo para poder reestablecer la contraseña")
    })
  
  
}


}
