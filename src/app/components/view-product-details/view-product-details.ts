import { NgForm }   from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { UserService } from 'src/app/_services/user.service/user.service';
import { UserAuthComponent } from 'src/app/_services/user.auth/user.auth/user.auth.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/_services/product.service/product.service';
import { FileHandle } from 'src/app/_model/file-handle.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Product } from 'src/app/_model/product.model';
import { HttpErrorResponse } from '@angular/common/http';

@UntilDestroy()
@Component({
  selector: 'view-product-details',
  templateUrl: './view-product-details.html',
  styleUrls: ['./view-product-details.css'],
})

export class ProductViewDetails implements OnInit{
  selectedProductIndex = 0;
  product!: Product;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService){

  }
  
  ngOnInit(): void {
    this.product = this.activatedRoute.snapshot.data['product'];
    console.log(this.product)
  }

  changeIndex(index: number) {
    this.selectedProductIndex = index;
  }


  addToCart(productId: number | null) {
    console.log("product" + productId);
    this.productService.addToCart(productId)
    .subscribe({
      next: (response)=> {
             console.log(response);
         },
         error: (error: HttpErrorResponse)=> {
             console.log(error);
         }
       });
  }
}