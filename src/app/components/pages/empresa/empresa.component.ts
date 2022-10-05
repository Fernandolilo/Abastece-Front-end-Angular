import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { EmpresaModel } from './../../../model/empresaModel';
import { EmpresaService } from './../../../services/empresa-service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss'],
})
export class EmpresaComponent implements OnInit {
  empresa$:  Observable<EmpresaModel[]>;

  displayedColumns = ['id', 'razao', 'cnpj', 'inscricao', 'tipo'];

  constructor(private empresaService: EmpresaService) {
    this.empresa$ =  this.empresaService.empresasPage();
  }

  ngOnInit(): void {

  }
}
