import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatalogTeaComponent} from "./catalog-tea/catalog-tea.component";

const routes: Routes = [
  {path: 'catalog', component: CatalogTeaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
