import { NgForm }   from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { UserService } from 'src/app/_services/user.service/user.service';
import { UserAuthComponent } from 'src/app/_services/user.auth/user.auth/user.auth.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/_model/product.model';
import { ProductService } from 'src/app/_services/product.service/product.service';
import { FileHandle } from 'src/app/_model/file-handle.model';
import { DomSanitizer } from '@angular/platform-browser';

@UntilDestroy()
@Component({
  selector: 'add-product',
  templateUrl: './add-product.html',
  styleUrls: ['./add-product.css'],
})

export class AddProduct implements OnInit{

  isNewProduct : boolean = true;
  nameNotFound: boolean = false;
  priceNotFound: boolean = false;
  typeNotFound: boolean = false;
  imageNotFound: boolean = false;

  product: Product = {
    id: null,
    productName: "",
    productDescription: "",
    productDiscountedPrice: 0,
    productActualPrice: 0,
    productImages: [],
    type: ""
  }

  constructor(private productService: ProductService,
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.product = this.activatedRoute.snapshot.data['product'];

    if(this.product && this.product.id) {
      this.isNewProduct = false;
    }

    console.log("E nou: " + this.isNewProduct);
  }

  addProduct(addProductForm: NgForm) {
    const productFormData = this.prepareFormData(this.product);
    console.log(addProductForm.value)

    this.nameNotFound= false;
    this.priceNotFound = false;
    this.typeNotFound = false;

    if(addProductForm.value.productName !== "" && addProductForm.value.productActualPrice !== 0
    && addProductForm.value.productActualPrice !== null && addProductForm.value.type !== ""
    && this.imageNotFound === false) {
      this.productService.addNewProduct(productFormData).subscribe({
      next: (response: any)=> {
              console.log(response);
              addProductForm.reset();
              this.product.productImages = [];
          },
          error: (error)=> {
              console.log(error);
          }
        });

        console.log(this.product.type)
      }

      if(addProductForm.value.productName === "") {
        this.nameNotFound = true;
      }
      if(addProductForm.value.productActualPrice === 0  || addProductForm.value.productActualPrice === 0) {
        this.priceNotFound = true;
      }
      if(addProductForm.value.type === "") {
        this.typeNotFound = true;
      }
  }



  prepareFormData(product: Product): FormData {
    this.imageNotFound = false;
    const formData = new FormData();
    formData.append(
      'product',
      new Blob([JSON.stringify(product)], {type: 'application/json'})
    );

    console.log(formData.get('product'));
    
    if(product.productImages.length === 0) {
      this.imageNotFound = true;
    } else{
      for(var i= 0 ; i < product.productImages.length; i++) {
        formData.append(
          'imageFile',
          product.productImages[i].file,
          product.productImages[i].file.name
        );
      }
    }
    return formData;
  }

  onFileSelected(event: any) {
    console.log(event);
    if(event.target.files) {
      const file = event.target.files[0];

      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }

      this.product.productImages.push(fileHandle)
    }
  }

  removeImages(i: number) {
    this.product.productImages.splice(i, 1);
  }

  fileDropped(fileHandle: FileHandle) {
    this.product.productImages.push(fileHandle);
  }
}