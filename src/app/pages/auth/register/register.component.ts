import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { ParametersService } from 'src/app/services/parameters.service';
import { DateTimeService } from '../../../services/date-time.service';
import { RequestRegisterService } from '../../../services/request-register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  band = false;
  message = "Se envio la solicitud correctamente, será notificado al correo ingresado";
  type_identification = [];
  roles = [];
  signUpForm = new FormGroup({
    type: new FormControl(),
    numero : new FormControl(),
    nombre : new FormControl(),
    apellido : new FormControl(),
    email : new FormControl(),
    role : new FormControl()
  });
;

  constructor(private auth:AuthService , private params: ParametersService ,
    private _builder: FormBuilder , private date : DateTimeService ,
    private request : RequestRegisterService) {
      this.signUpForm = this._builder.group({
        type: ['',Validators.required],
        numero: ['',Validators.required],
        nombre : ['',Validators.required] ,
        apellido : ['',Validators.required],
        email : ['',Validators.compose([Validators.required,Validators.email])],
        role: ['',Validators.required]
      });

  }

  ngOnInit(): void {
    this.type_identification = this.params.getTypeIdentification();
    this.roles = this.params.getRolesFromRegisterPublic();
  }

  onRegister(){
    var record = this.signUpForm.value;
    record['datetime'] = this.date.getDateTimeWithFormatCurrent();
    record['estado'] = 0;
    this.request.addRecord(record).then( () => {
      this.band = true;
      this.signUpForm.reset();
    })
    .catch( err => {
      alert("Error: "+err);
    });
  }

  enviarRegistro(){

  }

  getErrorMessage( errors)
  {
     if( errors['required'] )
     {
       return "El campo es requerido";
     }
     if( errors['email'] )
     {
       return "El email debe tener un formato valido";
     }
  }

}
