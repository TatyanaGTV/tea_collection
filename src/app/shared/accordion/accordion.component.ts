import {Component} from '@angular/core';
import {NgbAccordionModule, NgbCollapseModule} from "@ng-bootstrap/ng-bootstrap";

declare var $: any;
@Component({
  selector: 'ngbd-accordion-basic',
  standalone: true,
  imports: [NgbAccordionModule, NgbCollapseModule],
  templateUrl: './accordion.component.html',
//  styleUrls: ['./accordion.component.scss']
})
export class NgbdAccordionBasic  {
  constructor() { }

 // ngOnInit(): void {
  //  $( function() : void {
  //    $( "#accordion" ).accordion();
  //  });
 // }

}
