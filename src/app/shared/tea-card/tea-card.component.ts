import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GetTeaType} from "../../types/tea.type";
import {GetProductService} from "../../services/get-product.service";

@Component({
  selector: 'tea-card',
  templateUrl: './tea-card.component.html',
  styleUrls: ['./tea-card.component.scss']
})
export class TeaCardComponent implements OnInit {
  @Input() tea_item: GetTeaType ;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private getProduct: GetProductService) {
    this.tea_item = {
      id: 0,
      image: '',
      title:'',
      description: '',
    }
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params)
      if (params['id']){
        let tea  =  this.getProduct.getProduct(+params['id'])
        console.log(tea)
        if (tea){
          this.tea_item = tea;
        } else {
          this.router.navigate([''])
        }

      }
    })
  }

}
