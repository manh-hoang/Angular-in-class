import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusfooterComponent } from './cusfooter.component';

describe('CusfooterComponent', () => {
  let component: CusfooterComponent;
  let fixture: ComponentFixture<CusfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CusfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
