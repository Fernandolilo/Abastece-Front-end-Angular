import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',pathMatch: 'full', redirectTo: 'empresas'},
  {path: 'empresas',
  loadChildren: ()=> import
  ('./components/empresa/empresa.module').then(m => m.EmpresaModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
