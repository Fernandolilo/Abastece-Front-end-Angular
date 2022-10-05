import { Component, OnInit } from '@angular/core';

import { empresaModel } from './../../../model/empresaModel';
import { EmpresaService } from './../../../services/empresa-service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss'],
})
export class EmpresaComponent implements OnInit {
  empresa: empresaModel[] = [];

  displayedColumns = ['id', 'razao', 'cnpj', 'inscricao', 'tipo'];

  constructor(private empresaService: EmpresaService) {}

  ngOnInit(): void {
    this.empresa =  this.empresaService.empresasPage();
  }
}
