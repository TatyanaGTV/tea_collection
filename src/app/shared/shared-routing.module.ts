import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeaCardComponent} from "./tea-card/tea-card.component";

const routes: Routes = [
  {path: 'catalog/:id', component: TeaCardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
