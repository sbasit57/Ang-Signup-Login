import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddconsumableComponent } from './addconsumable.component';

describe('AddconsumableComponent', () => {
  let component: AddconsumableComponent;
  let fixture: ComponentFixture<AddconsumableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddconsumableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddconsumableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
