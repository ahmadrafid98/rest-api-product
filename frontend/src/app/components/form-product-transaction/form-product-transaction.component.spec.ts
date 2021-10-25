import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductTransactionComponent } from './form-product-transaction.component';

describe('FormProductTransactionComponent', () => {
  let component: FormProductTransactionComponent;
  let fixture: ComponentFixture<FormProductTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProductTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProductTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
