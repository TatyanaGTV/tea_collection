import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'order-tea',
  templateUrl: './order-tea.component.html',
  styleUrls: ['./order-tea.component.scss']
})
export class OrderTeaComponent implements  OnInit{
  @ViewChild('form')
  form!:ElementRef
  disabled = true;
  order_form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')]),
    last_name: new FormControl('',[Validators.required, Validators.pattern('^[A-Za-z]+$')]),
    phone: new FormControl ('',[Validators.required,
      Validators.pattern('^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$')]),
    country: new FormControl ('',Validators.required),
    zip: new FormControl ('',Validators.required),
    address: new FormControl ('',[Validators.required, Validators.pattern('[A-Za-z0-9-/\s]+')]),
    product: new FormControl (''),
    comment: new FormControl ('',Validators.required)
  })
  IsSuccess: number | null = null;


  get name(){return this.order_form.get('name')}
  get lastName(){return this.order_form.get('last_name')}
  get phone(){return this.order_form.get('phone')}
  get country(){return this.order_form.get('country')}
  get zip(){return this.order_form.get('zip')}
  get address(){return this.order_form.get('address')}
  get comment(){return this.order_form.get('comment')}

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['tea_item']){
        this.order_form.patchValue({
          product: params['tea_item']
        })
      } else {
      this.router.navigate([''])
        console.log('error')
      }
    })
    }

  orderTheTea(): void {
    let data:{} = this.order_form.value
    this.http.post<{ success: number, message?:string | undefined } >("https://testologia.site/order-tea", data)
      .subscribe({
        next: (response:{message?: string, success: number}) => {
          if (response.success && !response.message) {
            console.log(this.form)
            this.form.nativeElement.remove()
            return this.IsSuccess = 1;
          } else {
            return this.IsSuccess = 0;
          }
        },
        error: (error) => {
          console.log(error);
          this.router.navigate(['/']);
        }
      });
  }
}




