import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByWorthComponent } from './sales-by-worth.component';

describe('SalesByWorthComponent', () => {
  let component: SalesByWorthComponent;
  let fixture: ComponentFixture<SalesByWorthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesByWorthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesByWorthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
