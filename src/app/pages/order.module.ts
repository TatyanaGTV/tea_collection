import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import {OrderTeaComponent} from "./order-tea/order-tea.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [OrderTeaComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    OrderRoutingModule
  ]
})
export class OrderModule { }
