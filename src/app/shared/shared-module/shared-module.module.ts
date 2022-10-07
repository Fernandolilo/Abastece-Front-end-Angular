import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { ErrorDialogComponent } from './../error-dialog/error-dialog.component';


@NgModule({
  declarations: [
    ErrorDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class SharedModuleModule { }
