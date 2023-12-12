import { Component, OnInit } from '@angular/core';
import {GetTeaType} from "../../types/tea.type";
import {GetProductService} from "../../services/get-product.service";



@Component({
  selector: 'catalog-tea',
  templateUrl: './catalog-tea.component.html',
  styleUrls: ['./catalog-tea.component.scss']
})
export class CatalogTeaComponent implements OnInit {
  public tea_products: GetTeaType [] = [
    /*  {
      image: 'image 1.png',
      title: 'Детокс чай лайм',
      description: 'Великолепный чай внесет в вашу жизнь яркие краски и вкус расслабления',
    },
    {
      image: 'image 2.png',
      title: 'Ягодный чай',
      description: 'Нотки ягод позволят вам расслабиться и насладиться великолепием этого чая',
    },
    {
      image: 'image 3.png',
      title: 'Цветочный чай',
      description: 'Душистые цветы создают невероятный аромат и наполняют вас энергией',
    },
    {
      image: 'image 4.png',
      title: 'Очищающий чай',
      description: 'Бесподобный чай для получения утреннего заряда бодрости',
    },
    {
      image: 'image 5.png',
      title: 'Кислый чай',
      description: 'Бесподобный чай для получения утреннего заряда бодрости',
    },
    {
      image: 'image 6.png',
      title: 'Лимонная мята',
      description: 'Смесь лимона с мятой сделает ваш день самым лучшим',
    },*/
  ]

  constructor(private getAllProducts:GetProductService) {
  }
  ngOnInit():void  {
    this.getAllProducts.getAllProducts()
      .subscribe( data => {
        this.tea_products = data;
      })
  }
}
