import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTeaComponent } from './order-tea.component';

describe('OrderTeaComponent', () => {
  let component: OrderTeaComponent;
  let fixture: ComponentFixture<OrderTeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderTeaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderTeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
