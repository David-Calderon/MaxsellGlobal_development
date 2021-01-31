import { Component, OnInit } from '@angular/core';
import { ParametersService } from 'src/app/services/parameters.service';
import { RequestRegisterService } from '../../../services/request-register.service';

@Component({
  selector: 'app-review-request',
  templateUrl: './review-request.component.html',
  styleUrls: ['./review-request.component.css']
})
export class ReviewRequestComponent implements OnInit {

  requestUsers = [];

  constructor( private servicesRequest : RequestRegisterService , private params : ParametersService) { }

  ngOnInit(): void {
    this.servicesRequest.getRecords().subscribe( req => {
      req.forEach( item => {
         const data = item.payload.doc.data();
         data['tipo_doc'] = this.params.getTypeIdentificatiobLabel(data['type']);
         data['roleName'] = this.params.getRoleName(data['role']);
         data['estadoName'] = this.params.getStateName(data['estado']);
         this.requestUsers.push(data);
      });
    });
  }

}
