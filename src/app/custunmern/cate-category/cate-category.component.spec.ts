import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateCategoryComponent } from './cate-category.component';

describe('CateCategoryComponent', () => {
  let component: CateCategoryComponent;
  let fixture: ComponentFixture<CateCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CateCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CateCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
