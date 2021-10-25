import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductTransactionComponent } from './components/form-product-transaction/form-product-transaction.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductTransactionComponent } from './components/product-transaction/product-transaction.component';
import { ProductTypeComponent } from './components/product-type/product-type.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {
    path: "",
    component: ProductTransactionComponent,
  },
  {
    path: "product-transaction",
    component: ProductTransactionComponent,
  },
  {
    path: "product-transaction/create",
    component: FormProductTransactionComponent,
  },
  {
    path: "product-transaction/:id/update",
    component: FormProductTransactionComponent,
  },
  {
    path: "product/create",
    component: FormProductComponent,
  },
  {
    path: "product/:id/update",
    component: FormProductComponent,
  },
  {
    path: "product",
    component: ProductComponent,
  },
  {
    path: "product-type",
    component: ProductTypeComponent,
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
