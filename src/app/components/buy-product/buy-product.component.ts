import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderInput } from 'src/app/_model/order.input.model';
import { Product } from 'src/app/_model/product.model';
import { ProductService } from 'src/app/_services/product.service/product.service';

@Component({
  selector: 'buyProduct',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit{

  nameNotFound: boolean = false;
  addressNotFound: boolean = false;
  phoneNumberNotFound: boolean = false;
  wrongPhoneNumberFormat: boolean = false;
  wrongAlternatePhoneNumberFormat: boolean = false;

  orderInput: OrderInput = {
    orderFullName: "",
    orderFullAddress: "",
    orderContactNumber: "",
    orderAlternateContactNumber: "",
    cart: []
  }

  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router) {}

  ngOnInit(): void {
   this.getCartDetails();
  }

  getCartDetails() {
    return this.productService.getCartDetails()
    .subscribe({
      next: (response: any)=> {
             console.log(response);
             this.orderInput.cart = response;
             console.log(this.orderInput.cart);
         },
         error: (error: HttpErrorResponse)=> {
             console.log(error);
         }
       });
  }

  public placeOrder(orderForm: NgForm) {
    console.log(this.orderInput);
    this.nameNotFound = false;
    this.addressNotFound = false;
    this.phoneNumberNotFound = false;
    this.wrongPhoneNumberFormat = false;
    this.wrongAlternatePhoneNumberFormat = false;
  

    if(this.orderInput.orderFullName !=="" && this.orderInput.orderFullAddress !==""
    && this.orderInput.orderContactNumber !== "" && this.checkDigits(this.orderInput.orderContactNumber) === true
    && (this.orderInput.orderAlternateContactNumber === "" || (this.orderInput.orderAlternateContactNumber !== ""
    && this.checkDigits(this.orderInput.orderAlternateContactNumber) === true))) {
        this.productService.placeOrder(this.orderInput).subscribe({
          next: (response: any)=> {
            console.log(response);
            orderForm.reset();
            this.router.navigate(["/orderConfirm"]);
        },
        error: (error: any)=> {
            console.log(error);
        }
      });
    }

    if(this.orderInput.orderFullName === "") {
      this.nameNotFound = true;
    }

    if(this.orderInput.orderFullAddress === "") {
      this.addressNotFound = true;
    }

    if(this.orderInput.orderContactNumber === "") {
      this.phoneNumberNotFound = true;
    }

    if(this.orderInput.orderContactNumber !=="" && this.checkDigits(this.orderInput.orderContactNumber) === false) {
      this.wrongPhoneNumberFormat = true;
    }

    if(this.orderInput.orderAlternateContactNumber !== ""
    && this.checkDigits(this.orderInput.orderAlternateContactNumber) === false) {
      this.wrongAlternatePhoneNumberFormat = true;
    }
  }

  checkDigits(str: string): boolean {
    return /^\d+$/.test(str);
}

  getCalculatedTotal(quantity: number, productDiscountedPrice: number) {
    return quantity * productDiscountedPrice;
  }

  getCalculatedGrandTotal() {
    let grandTotal = 0;

    this.orderInput.cart.forEach(
      (c) => {
        grandTotal = grandTotal + this.getCalculatedTotal(c.quantity, c.product.productDiscountedPrice);
      }
    );

    return grandTotal;
  }
}
