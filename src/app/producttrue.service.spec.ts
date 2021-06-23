import { TestBed } from '@angular/core/testing';

import { ProducttrueService } from './producttrue.service';

describe('ProducttrueService', () => {
  let service: ProducttrueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducttrueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
