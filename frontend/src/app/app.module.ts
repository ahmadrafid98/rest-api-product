import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductTransactionComponent } from './components/product-transaction/product-transaction.component';
import { ProductComponent } from './components/product/product.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { FormProductTransactionComponent } from './components/form-product-transaction/form-product-transaction.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductTypeComponent } from './components/product-type/product-type.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductTransactionComponent,
    ProductComponent,
    FormProductComponent,
    FormProductTransactionComponent,
    NavbarComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ProductTypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
