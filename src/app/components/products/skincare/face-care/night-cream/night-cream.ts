import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { map } from 'rxjs';
import { ImageProcessingService } from 'src/app/image-processing.service';
import { Product } from 'src/app/_model/product.model';
import { ProductService } from 'src/app/_services/product.service/product.service';
import { UserAuthComponent } from 'src/app/_services/user.auth/user.auth/user.auth.component';

@UntilDestroy()
@Component({
  selector: 'skin-care/face-care/night-cream',
  templateUrl: './night-cream.html',
  styleUrls: ['./night-cream.css'],
})

export class NightCream implements OnInit{
  pageNumber: number = 0;

  productDetails: Product[] = [];

  showNextPageButton: boolean = false;
  showPreviousPageButton:boolean = false;
  showPageNumber:boolean = true;

  constructor(public userAuthService: UserAuthComponent,
    private productService: ProductService,
    private imageProcessingService: ImageProcessingService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.getAllProducts();
   }
  
   public getAllProducts() {
    if(this.pageNumber > 0){
      this.showPreviousPageButton = true;
    } else {
      this.showPreviousPageButton = false;
    }
    this.productService.getAllProductsByType(this.pageNumber, "Night face cream")
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

              if(this.pageNumber === 0) {
                this.showPageNumber = false;
              }
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