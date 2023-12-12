import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Router} from "@angular/router";

declare var $: any;


@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  @ViewChild('popup')
  private popup!: ElementRef;
  private popup$!:Subscription;

  constructor(private rend: Renderer2,private router: Router ) {}
  name = 'Jquery Integration With Angular!';
  isJqueryWorking: any;



  ngOnInit(): void {
  //  $( function() : void {
   //   $( "#accordion" ).accordion();
   // } );

    let city = $('#inputCity');
    city.on('keypress', function(e:any) {
      let number: number | any = String.fromCharCode(e.which)
      if (isNaN(number)) {
        e.preventDefault()
      }
    });

    $('#btn').click( function (e: any): boolean | undefined | any {
      e.preventDefault();
      e.stopPropagation();
      let name = $('#inputName4');
      if (!name.val()) {
        alert('Заполните поле "Имя"');
        return;
      }
      let surname = $('#inputSurname4');
      if (!surname.val()) {
        alert('Заполните поле "Фамилия"');
        return;
      }
      let phone = $('#inputPhone');
      if (!phone.val()) {
        alert('Заполните поле "Телефон"');
        return;
      }
      let ctry = $('#inputCountry2');
      if (!ctry.val()) {
        alert('Заполните поле "Страна"');
        return false;
      }
      if (!city.val()) {
        alert('Заполните поле "Индекс"');
        return false;
      }
      if (city.val().length > 6) {
        alert('Поле индекс не может содержать более 6 цифр');
        return false;
      }
      if (city.val().length < 6) {
        alert('Поле индекс должно содержать 6 цифр');
        return false;
      }
      let adress = $('#inputAdress');
      if (!adress.val()) {
        alert('Заполните поле "Адрес"');
        return false;
      }
      $('#form').hide('700', 'linear');
      $('#order').hide('700', 'linear');
      $('#after_form').show('4000', 'swing');
    });
    $('#after_form_btn').click (function (e: any) {
      e.preventDefault();
      e.stopPropagation();{
        $('#after_form').hide('700', 'linear');
        window.location.reload();
      }
    });

    this.popup$ = new Observable((observer) => {
      setTimeout( () => {
        observer.next()
      }, 3000)
    })
      .subscribe( ()=> {
       this.rend.addClass( this.popup.nativeElement,  'd-flex');
      })
  }

  public close():void {
    this.rend.addClass( this.popup.nativeElement,  'd-none');
  }
}
