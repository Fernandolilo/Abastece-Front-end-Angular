import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';

import { EmpresaComponent } from '../pages/empresa/empresa.component';
import { EmpresaRoutingModule } from './empresa-routing.module';



@NgModule({
  declarations: [
   EmpresaComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    AppMaterialModule
  ]
})
export class EmpresaModule { }
