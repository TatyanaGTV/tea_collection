import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {TeaCardComponent} from "./tea-card/tea-card.component";


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    TeaCardComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    SharedRoutingModule,
    FooterComponent,
    HeaderComponent,
    TeaCardComponent
  ]
})
export class SharedModule { }
