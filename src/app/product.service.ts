import { Product } from './product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8080/api/product";

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseUrl}`);
  }

  // tslint:disable-next-line: ban-types
  createProduct(product: Product): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, product);
  }

  getProductById(id: number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseUrl}/${id}`);
  }

  // tslint:disable-next-line: ban-types
  updateProduct(id: number, product: Product): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, product);
  }

  // tslint:disable-next-line: ban-types
  deleteProduct(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
