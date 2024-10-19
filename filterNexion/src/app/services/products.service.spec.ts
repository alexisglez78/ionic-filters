import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should filter products correctly', () => {
    const filtered = service.filterProducts('leche', null, null, null);
    expect(filtered.length).toBe(1);
    expect(filtered[0].name).toBe('leche');
  });
});
