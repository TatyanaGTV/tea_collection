import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogTeaComponent } from './catalog-tea.component';

describe('CatalogTeaComponent', () => {
  let component: CatalogTeaComponent;
  let fixture: ComponentFixture<CatalogTeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogTeaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogTeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
