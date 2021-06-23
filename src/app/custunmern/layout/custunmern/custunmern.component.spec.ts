import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustunmernComponent } from './custunmern.component';

describe('CustunmernComponent', () => {
  let component: CustunmernComponent;
  let fixture: ComponentFixture<CustunmernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustunmernComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustunmernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
