import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse, Product, ProductRequest } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})

export class FormProductComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.productId = params.id;
        this.httpService.getProduct(this.productId).subscribe((response: ApiResponse<Product>) => {
          if (response.code === 200) {
            this.isCreate = false;
            this.isUpdate = true;

            const product = response.data[0];
            this.nameFormControl.setValue(product.name);
            this.stockFormControl.setValue(product.stock);
            this.typeFormControl.setValue(product.type);
          }
        })
      } else {
        this.isCreate = true;
        this.isUpdate = false;

        this.nameFormControl.setValue("");
        this.typeFormControl.setValue("");
        this.stockFormControl.setValue("");
      }
    })
  }

  nameFormControl = new FormControl('', [Validators.required]);
  typeFormControl = new FormControl('', [Validators.required]);
  stockFormControl = new FormControl('', [Validators.required]);
  productId: string = "";
  isUpdate: boolean = false;
  isCreate: boolean = false;

  onCreateData() {
    if (this.nameFormControl.valid && this.typeFormControl.valid, this.stockFormControl.valid) {
      const createdData: ProductRequest = {
        name: this.nameFormControl.value,
        type: this.typeFormControl.value,
        stock: this.stockFormControl.value,
      }

      this.httpService.createProduct(createdData).subscribe(() => {
        Swal.fire(
          {
            title: 'Create Product Successed',
            icon: 'success'
          }
        )
      }, () => {
        Swal.fire(
          {
            title: 'Create Product Failed',
            icon: 'error'
          }
        )
      })

      this.router.navigate(["/product"]);
    }
  }

  onUpdateData() {
    if (this.nameFormControl.valid && this.typeFormControl.valid, this.stockFormControl.valid) {
      const updatedData: ProductRequest = {
        name: this.nameFormControl.value,
        type: this.typeFormControl.value,
        stock: this.stockFormControl.value,
      }

      this.httpService.updateProduct(updatedData, this.productId).subscribe(() => {
        Swal.fire(
          {
            title: 'Update Product Successed',
            icon: 'success'
          }
        )
      }, () => {
        Swal.fire(
          {
            title: 'Update Product Failed',
            icon: 'error'
          }
        )
      });
      this.router.navigate(["/product"]);
    }
  }

  matcher = new MyErrorStateMatcher();
}
