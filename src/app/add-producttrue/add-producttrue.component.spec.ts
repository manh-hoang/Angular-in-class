import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProducttrueComponent } from './add-producttrue.component';

describe('AddProducttrueComponent', () => {
  let component: AddProducttrueComponent;
  let fixture: ComponentFixture<AddProducttrueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProducttrueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProducttrueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
