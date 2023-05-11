import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestablesComponent } from './requestables.component';

describe('RequestablesComponent', () => {
  let component: RequestablesComponent;
  let fixture: ComponentFixture<RequestablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
