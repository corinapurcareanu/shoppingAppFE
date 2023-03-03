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
import { map, Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@UntilDestroy()
@Component({
  selector: 'search-view',
  templateUrl: './search-view.html',
  styleUrls: ['./search-view.css'],
})

export class SearchView implements OnInit{
  pageNumber: number = 0; //nu e corect, trb sa le extrag altfel 

  products: Product[] = [];

  productDetails: Product[] = [];

  showLoadButton: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private imageProcessingService: ImageProcessingService){

  }
  
  ngOnInit(): void {
    this.products = this.activatedRoute.snapshot.data['products'];
    console.log(this.products); //nu apare nr corect de produse
    this.getAllProducts();
  }

  public getAllProducts() {

    const products: Observable<Product[]> = of(this.products);

    products
    .pipe(
      map((x: Product[], i) => x.map((product: Product) => this.imageProcessingService.createImages(product)))
    )
    .subscribe({
      next: (response: Product[])=> {
             console.log(response);
             if(response.length == 12) {
              this.showLoadButton = true;
             } else {
              this.showLoadButton = false;
             }
             response.forEach(p => this.productDetails.push(p));
            //  this.productDetails = response;
         },
         error: (error: HttpErrorResponse)=> {
             console.log(error);
         }
       });
   }
  
   showProductDetails(productId: number | null) {
    this.router.navigate(['/view-product-details', {productId: productId}])
   }
  
   public loadMoreProduct() {
    this.pageNumber = this.pageNumber + 1;
    this.getAllProducts();
   }
}