import { Router, Routes } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  saveProduct(){
    this.productService.createProduct(this.product).subscribe(data => {
      console.log(data);
      this.backToList();
    },
    error => console.log(error));
  }

  backToList(){
    this.router.navigate(['/product']);
  }

  onSubmit(){
    console.log(this.product);
    this.saveProduct();
  }
}
