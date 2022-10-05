import { empresaModel } from '../model/empresaModel';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private httpCliene: HttpClient) { }

  empresasPage(): empresaModel[]{
    return [ {
      id: 'id12346541',
      razaoSocial: 'com de eletrica',
      cnpj: '01-0002/0001-01',
      inscricaoEstadual: 123456789,
      tipo: 'EXTERNA',
    }];
  }
}
