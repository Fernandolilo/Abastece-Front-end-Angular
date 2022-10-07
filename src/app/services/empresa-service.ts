import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, Observable, tap } from 'rxjs';

import { EmpresaModel } from '../model/empresaModel';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private readonly APIJson = 'assets/empresa.json'
  private  API = 'http://localhost:7007/posto-server/empresas';

  constructor(private httpClient: HttpClient) { }

  findAll(){
    return this.httpClient.get<EmpresaModel[]>(this.APIJson).pipe(
      delay(5000),
      first()
    );
  }

  findPage(): Observable<EmpresaModel[]> {
    return this.httpClient.get<EmpresaModel[]>(`${this.API}`).pipe(
      first()
    );
}

}
