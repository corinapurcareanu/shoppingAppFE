import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service/product.service';
import { UserAuthComponent } from 'src/app/_services/user.auth/user.auth/user.auth.component';
import { NgForm }   from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Product } from 'src/app/_model/product.model';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ShowProductImagesDialogComponent } from '../show-product-images-dialog/show-product-images-dialog.component';
import { ImageProcessingService } from 'src/app/image-processing.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {

  pageNumber: number = 0;

  productDetails: Product[] = [];

  showNextPageButton: boolean = false;
  showPreviousPageButton:boolean = false;

  constructor(public userAuthService: UserAuthComponent,
    private productService: ProductService,
    private imageProcessingService: ImageProcessingService,
    private router: Router) {
  }

 ngOnInit(): void {
  this.getAllProducts();
 }

 public isLoggedIn() : boolean {
  (this.userAuthService.isLoggedIn())
   return this.userAuthService.isLoggedIn();
 }

 public getAllProducts() {
  if(this.pageNumber > 0){
    this.showPreviousPageButton = true;
  } else {
    this.showPreviousPageButton = false;
  }
  this.productService.getAllProducts(this.pageNumber)
  .pipe(
    map((x: Product[], i) => x.map((product: Product) => this.imageProcessingService.createImages(product)))
  )
  .subscribe({
    next: (response: Product[])=> {
           (response);
           if(response.length == 12) {
            this.showNextPageButton = true;
           } else {
            this.showNextPageButton = false;
           }
           this.productDetails = []
           response.forEach(p => this.productDetails.push(p));
       },
       error: (error: HttpErrorResponse)=> {
           (error);
       }
     });
 }

 showProductDetails(productId: number | null) {
  this.router.navigate(['/view-product-details', {productId: productId}])
 }

 public NextPage() {
  this.pageNumber = this.pageNumber + 1;
  this.getAllProducts();
 }

 public PreviousPage() {
  this.pageNumber = this.pageNumber - 1;
  this.getAllProducts();
 }

}