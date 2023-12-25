import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {TeaCardComponent} from "./tea-card/tea-card.component";
import {NgbAccordionModule} from "@ng-bootstrap/ng-bootstrap";
import {NgbdAccordionBasic} from "./accordion/accordion.component";



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    TeaCardComponent,
    NgbdAccordionBasic,

  ],
  imports: [
    CommonModule,
    NgbAccordionModule,
    SharedRoutingModule
  ],
  exports:[
    SharedRoutingModule,
    FooterComponent,
    HeaderComponent,
    TeaCardComponent,
    NgbdAccordionBasic
  ]
})
export class SharedModule { }
