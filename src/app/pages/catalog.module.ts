import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import {CatalogTeaComponent} from "./catalog-tea/catalog-tea.component";


@NgModule({
  declarations: [CatalogTeaComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule
  ],
  exports:[
    CatalogRoutingModule
  ]
})
export class CatalogModule { }
