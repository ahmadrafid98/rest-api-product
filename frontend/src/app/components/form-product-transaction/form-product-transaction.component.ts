import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse, Product, ProductTransaction, ProductTransactionRequest } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-product-transaction',
  templateUrl: './form-product-transaction.component.html',
  styleUrls: ['./form-product-transaction.component.scss']
})
export class FormProductTransactionComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {

      if (params.id) {
        this.productTransactionId = params.id;
        this.httpService.getProductTransaction(this.productTransactionId).subscribe((response: ApiResponse<ProductTransaction>) => {
          if (response.code === 200) {
            this.isCreate = false;
            this.isUpdate = true;

            const productTransaction = response.data[0];
            this.dateFormControl.setValue(productTransaction.date);
            this.amountSoldFormControl.setValue(productTransaction.amountSold);
            this.previousStockQuantityFormControl.setValue(productTransaction.previousStockQuantity);
            this.selectedProduct = productTransaction.product?.name || "";
          }
        })
      } else {
        this.isCreate = true;
        this.isUpdate = false;

        this.dateFormControl.setValue("");
        this.amountSoldFormControl.setValue("");
        this.selectedProduct = "";
      }
    })
    this.httpService.getProducts().subscribe((response: ApiResponse<Product>) => {
      const products = response.data;
      this.products = [...products];
    })
  }

  dateFormControl = new FormControl('', [Validators.required]);
  amountSoldFormControl = new FormControl('', [Validators.required]);
  previousStockQuantityFormControl = new FormControl('', [Validators.required]);
  selectedProduct!: string;
  products: Product[] = [];
  isUpdate: boolean = false;
  isCreate: boolean = false;
  productTransactionId: string = "";

  onCreateData() {
    if (this.dateFormControl.valid && this.amountSoldFormControl.valid && this.selectedProduct !== "") {
      const product = this.products.filter((product) => product.name === this.selectedProduct);
      const createdData: ProductTransactionRequest = {
        productId: product[0].uuid,
        date: this.dateFormControl.value,
        amountSold: this.amountSoldFormControl.value,
      }

      this.httpService.createProductTransaction(createdData).subscribe(() => {
        Swal.fire(
          {
            title: 'Create Product Transaction Successed',
            icon: 'success'
          }
        )
      }, () => {
        Swal.fire(
          {
            title: 'Create Product Transactions Failed',
            icon: 'error'
          }
        )
      });

      this.router.navigate(["/product-transaction"]);
    }
  }

  onUpdateData() {
    if (this.dateFormControl.valid && this.amountSoldFormControl.valid && this.selectedProduct !== "") {
      const product = this.products.filter((product) => product.name === this.selectedProduct);
      const updatedData: ProductTransactionRequest = {
        productId: product[0].uuid,
        date: this.dateFormControl.value,
        amountSold: this.amountSoldFormControl.value,
        previousStockQuantity: this.previousStockQuantityFormControl.value,
      }

      this.httpService.updateProductTransaction(updatedData, this.productTransactionId).subscribe(() => {
        Swal.fire(
          {
            title: 'Update Product Transaction Successed',
            icon: 'success'
          }
        )
      }, () => {
        Swal.fire(
          {
            title: 'Update Product Transactions Failed',
            icon: 'error'
          }
        )
      }
      );
      this.router.navigate(["/product-transaction"]);
    }
  }

}
