import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderTeaComponent} from "./order-tea/order-tea.component";

const routes: Routes = [
  {path: 'order', component: OrderTeaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
