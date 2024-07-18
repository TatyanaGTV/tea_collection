import { Injectable } from '@angular/core';
import {GetTeaType} from "../types/tea.type";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetProductService {
  public teaProducts: GetTeaType [] = [];
  constructor(private http: HttpClient) {

  }

  public url = 'https://testologia.ru'? 'https://testologia.ru' :'https://testologia.site'
  getAllProducts (): Observable<GetTeaType []>{
    return this.http.get <GetTeaType []>( this.url + "/tea")
      .pipe(
        map((result) => {
          this.teaProducts = result
         return result
    })
      )

  }
  getProduct(id: number):GetTeaType | undefined {
    return this.teaProducts.find(item => (item.id === id))
  }
}
