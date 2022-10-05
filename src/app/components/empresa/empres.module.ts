import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { EmpresaComponent } from '../pages/empresa/empresa.component';
import { EmpresaRoutingModule } from './empresa-routing.module';



@NgModule({
  declarations: [
   EmpresaComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    MatTableModule
  ]
})
export class EmpresaModule { }
