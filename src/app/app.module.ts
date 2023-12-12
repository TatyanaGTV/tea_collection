import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared.module";
import {OrderModule} from "./pages/order.module";
import {CatalogModule} from "./pages/catalog.module";
import {GetProductService} from "./services/get-product.service";
import {MainModule} from "./pages/main.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    OrderModule,
    MainModule,
    CatalogModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule

  ],
  providers: [HttpClient, GetProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
