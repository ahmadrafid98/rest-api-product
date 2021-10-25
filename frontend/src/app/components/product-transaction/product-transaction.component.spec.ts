import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTransactionComponent } from './product-transaction.component';

describe('ProductTransactionComponent', () => {
  let component: ProductTransactionComponent;
  let fixture: ComponentFixture<ProductTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
