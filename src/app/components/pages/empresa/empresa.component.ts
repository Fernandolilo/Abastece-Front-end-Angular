import { Component, OnInit } from '@angular/core';

import { empresaModel } from './../../../model/empresaModel';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss'],
})
export class EmpresaComponent implements OnInit {
  empresa: empresaModel[] = [
    {
      id: 'id12346541',
      razaoSocial: 'com de eletrica',
      cnpj: '01-0002/0001-01',
      inscricaoEstadual: 123456789,
      tipo: 'EXTERNA',
    },
  ];

  displayedColumns = ['id', 'razao', 'cnpj', 'inscricao', 'tipo'];

  constructor() {}

  ngOnInit(): void {}
}
