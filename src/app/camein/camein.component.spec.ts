import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameinComponent } from './camein.component';

describe('CameinComponent', () => {
  let component: CameinComponent;
  let fixture: ComponentFixture<CameinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CameinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CameinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
