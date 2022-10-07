import { LoginComponent } from './../pages/login/login.component';
import { EmpresaComponent } from './../pages/empresa/empresa.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';

import { HomeComponent } from './../pages/home/home.component';
import { EmpresaRoutingModule } from './empresa-routing.module';



@NgModule({
  declarations: [
   HomeComponent,
   EmpresaComponent,
   LoginComponent

  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    AppMaterialModule
  ]
})
export class EmpresaModule { }
