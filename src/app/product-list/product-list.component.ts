import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  ProductList: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}
  ngOnInit(): void {
    this.getProduct();
  }
  private getProduct() {
    this.productService.getProductList().subscribe((data) => {
      this.ProductList = data;
    });
  }

  updateProduct(id: number){
    this.router.navigate(['update-product' , id]);
  }

  deleteProduct(id: number){
    this.productService.deleteProduct(id).subscribe(data => {
      console.log(data);
      this.getProduct();
    });
  }

  detailsProduct(id: number){
    this.router.navigate(['details-product' , id]);
  }
}
