import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';

import { EmpresaModel } from './../../../model/empresaModel';
import { EmpresaService } from './../../../services/empresa-service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss'],
})
export class EmpresaComponent implements OnInit {
  empresa$:  Observable<EmpresaModel[]>;

  displayedColumns = ['id', 'dataInicialContrato', 'rarazaoSocial', 'inscricaoEstadual', 'cnpj', 'tipo', 'actions'];

  constructor(
    private empresaService: EmpresaService,
    public dialog: MatDialog) {
    this.empresa$ =  this.empresaService.findPage()
    .pipe(
      catchError(error => {
      this.onError('Erro ao acessar empresas - possível falha na API');
      return of([])
    })
    );
  }

  onError(ErrorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data:
        ErrorMsg
    });
  }

  ngOnInit(): void {

  }

  onAdd(){

  }

  onEdit(){

  }

  onRemove(){

  }
}
