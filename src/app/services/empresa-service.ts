import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { EmpresaModel } from '../model/empresaModel';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private readonly API = 'assets/empresa.json'

  constructor(private httpClient: HttpClient) { }

  empresasPage(){
    return this.httpClient.get<EmpresaModel[]>(this.API).pipe(
      first(),
      tap(empresa => console.log(empresa))
    );
  }
}
