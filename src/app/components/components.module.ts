import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperadminComponent } from './superadmin/superadmin.component';



@NgModule({
  declarations: [SuperadminComponent],
  imports: [
    CommonModule
  ],
  exports: [SuperadminComponent],

})
export class ComponentsModule { }

