import { NgForm }   from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Product } from 'src/app/_model/product.model';
import { ProductService } from 'src/app/_services/product.service/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ShowProductImagesDialogComponent } from '../show-product-images-dialog/show-product-images-dialog.component';
import { ImageProcessingService } from 'src/app/image-processing.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'show-product-details',
  templateUrl: './show-product-details.html',
  styleUrls: ['./show-product-details.css'],
})

export class ShowProductDetails implements OnInit{

  public str: string = "id01"
  showNextPageButton: boolean = false;
  showPreviousPageButton:boolean = false;
  showPageNumber:boolean = true;
  showTable = false;
  pageNumber: number = 0;
  public productDetails: Product[] = []
  displayedColumns: string[] = ['Id', 'Product Name', 'description', 'Product Discounted Price', 'Product Actual Price', 'Type', 'Actions'];

  constructor(private productService: ProductService,
    public imagesDialog: MatDialog,
    private imageProcessingService: ImageProcessingService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  public getAllProducts(key: string = "") {
    this.showTable = false;
    if(this.pageNumber > 0){
      this.showPreviousPageButton = true;
    } else {
      this.showPreviousPageButton = false;
    }
    this.productService.getAllProducts(this.pageNumber, key)
    .pipe(
      map((x: Product[], i) => x.map((product: Product) => this.imageProcessingService.createImages(product)))
    )
    .subscribe({
      next: (response: Product[])=> {
             console.log(response);
             this.productDetails = []
             response.forEach(product =>
              this.productDetails.push(product)
              );
              this.showTable = true;

              if(response.length == 12) {
                this.showNextPageButton = true;
              } else{
                this.showNextPageButton = false;

                if(this.pageNumber === 0) {
                  this.showPageNumber = false;
                }
              }
              
            //  this.productDetails = response;
         },
         error: (error: HttpErrorResponse)=> {
             console.log(error);
         }
       });
   }

   deleteProduct(productId: number) {
    this.productDetails = []
    console.log(productId)
    this.productService.deleteProduct(productId).subscribe({
      next: (response)=> {
             console.log(response);
             this.getAllProducts();
         },
         error: (error: HttpErrorResponse)=> {
             console.log(error);
         }
       });
   }


  editProductDetails(productId: number) {
    this.productService.getProductDetailsById(productId).subscribe(val => console.log(val));
    this.router.navigate(['/add-product', {productId: productId}])
  }

  public NextPage() {
    this.pageNumber = this.pageNumber + 1;
    this.getAllProducts();
   }
  
   public PreviousPage() {
    this.pageNumber = this.pageNumber - 1;
    this.getAllProducts();
   }

  logElement(element: any) {
    console.log(element);
  }

  openModal(id: any) {
    const modal = document.getElementById(`id01-${id}`);
    if (modal) {
      modal.style.display = "block";
    }
  }

  closeModal(id: any) {
    const modal = document.getElementById(`id01-${id}`);
    if (modal) {
      modal.style.display = "none";
    }
  }

  openConfirmationModal(id: any) {
    const modal = document.getElementById(`id02-${id}`);
    if (modal) {
      modal.style.display = "block";
    }
  }

  closeConfirmationModal(id: any) {
    const modal = document.getElementById(`id02-${id}`);
    if (modal) {
      modal.style.display = "none";
    }
  }
  
  searchByKeyword(searchkeyword : NgForm) {
    const key : string = searchkeyword.value.searchKey;
    this.getAllProducts(key);
  }
}