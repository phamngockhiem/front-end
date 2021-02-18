import { ProductService } from './../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent implements OnInit {
  id!: number;
  product: Product = new Product();

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // tslint:disable-next-line: no-string-literal
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe(
      (data) => {
        this.product = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.productService
      .updateProduct(this.product.productId, this.product)
      .subscribe(
        (data) => {
          this.backToList();
        },
        // tslint:disable-next-line: no-shadowed-variable
        (error) => console.log(error)
      );
  }

  backToList() {
    this.router.navigate(['/product']);
  }
}
