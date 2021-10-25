import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse, Product, ProductRequest, ProductTransaction, ProductTransactionRequest, ProductType } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  getProduct(id: string): Observable<ApiResponse<Product>> {
    return this.http.get<ApiResponse<Product>>(`${environment.BASE_URL}/products/${id}`);
  }

  getProductTypes(start: string, end: string, sort: string): Observable<ApiResponse<ProductType>> {
    return this.http.get<ApiResponse<ProductType>>(`${environment.BASE_URL}/product-transactions/?start=${start}&end=${end}&sort=${sort}`)
  }

  getProducts(): Observable<ApiResponse<Product>> {
    return this.http.get<ApiResponse<Product>>(`${environment.BASE_URL}/products`);
  }

  getProductTransaction(id: string): Observable<ApiResponse<ProductTransaction>> {
    return this.http.get<ApiResponse<ProductTransaction>>(`${environment.BASE_URL}/product-transactions/${id}`);
  }

  getProductTransactions(): Observable<ApiResponse<ProductTransaction>> {
    return this.http.get<ApiResponse<ProductTransaction>>(`${environment.BASE_URL}/product-transactions`);
  }

  getProductTransactionsByName(name: string): Observable<ApiResponse<ProductTransaction>> {
    return this.http.get<ApiResponse<ProductTransaction>>(`${environment.BASE_URL}/product-transactions?name=${name}`);
  }

  getProductTransactionsByDate(date: string): Observable<ApiResponse<ProductTransaction>> {
    return this.http.get<ApiResponse<ProductTransaction>>(`${environment.BASE_URL}/product-transactions?date=${date}`);
  }

  createProductTransaction(productTransaction: ProductTransactionRequest): Observable<ApiResponse<ProductTransaction>> {
    return this.http.post<ApiResponse<ProductTransaction>>(`${environment.BASE_URL}/product-transactions`, productTransaction);
  }

  updateProductTransaction(productTransaction: ProductTransactionRequest, id: string): Observable<ApiResponse<ProductTransaction>> {
    return this.http.put<ApiResponse<ProductTransaction>>(`${environment.BASE_URL}/product-transactions/${id}`, productTransaction);
  }

  deleteProductTransaction(id: string): Observable<unknown> {
    return this.http.delete(`${environment.BASE_URL}/product-transactions/${id}`);
  }

  createProduct(product: ProductRequest): Observable<ApiResponse<Product>> {
    return this.http.post<ApiResponse<Product>>(`${environment.BASE_URL}/products`, product);
  }

  updateProduct(product: ProductRequest, id: string): Observable<ApiResponse<Product>> {
    return this.http.put<ApiResponse<Product>>(`${environment.BASE_URL}/products/${id}`, product);
  }

  deleteProduct(id: string): Observable<unknown> {
    return this.http.delete(`${environment.BASE_URL}/products/${id}`);
  }
}
