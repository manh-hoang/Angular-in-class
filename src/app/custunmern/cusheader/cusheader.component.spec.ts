import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusheaderComponent } from './cusheader.component';

describe('CusheaderComponent', () => {
  let component: CusheaderComponent;
  let fixture: ComponentFixture<CusheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CusheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
