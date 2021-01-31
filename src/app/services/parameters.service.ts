import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParametersService {

  private typeIdentification = [
    { id : 1 , name : 'Cedula de Ciudadanía' , initial : 'CC'},
    { id : 1 , name : 'Cedula de extranjería ' , initial : 'CE'},
    { id : 1 , name : 'Número de Identificación Tributaria' , initial : 'NIT'}
  ];

  private roles = [
    { id: 1 , name : 'Super Administrador'},
    { id: 2 , name : 'Administrador'},
    { id: 3 , name : 'Proveedor'},
    { id: 4 , name : 'Rutero'}
  ];

  private states = [
    { id : 0 , name : 'Solicitado' },
    { id : 1 , name : 'Aceptado' },
    { id : 2 , name : 'Rechazado' }
  ];

  private rolesPublic = [ 3 , 4];

  constructor() { }

  getRolesFromRegisterPublic()
  {
     let roles = [];
     for( var i in this.roles)
     {
        if(  this.rolesPublic.indexOf(this.roles[i].id) != -1 )
        {
          roles.push(this.roles[i]);
        }
     }
     return roles;
  }

  getTypeIdentification()
  {
    return this.typeIdentification;
  }

  getTypeIdentificatiobLabel( type:number )
  {
    for( var i in this.typeIdentification)
    {
      if(this.typeIdentification[i].id == type){
        return this.typeIdentification[i].initial+"-"+this.typeIdentification[i].name;
      }
    }
  }

  getRoleName( role:number )
  {
    for( var i in this.roles )
    {
      if( this.roles[i].id == role )
      {
        return this.roles[i].name;
      }
    }
  }

  getStateName(state:number)
  {
    for( var i in this.states)
    {
      if( this.states[i].id == state)
      {
        return this.states[i].name;
      }
    }
  }
}
