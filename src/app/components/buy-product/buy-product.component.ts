import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderInput } from 'src/app/_model/order.input.model';
import { Product } from 'src/app/_model/product.model';
import { CartService } from 'src/app/_services/cart-service/cart.service';
import { PaymentService } from 'src/app/_services/payment-service/payment-service';
import { ProductService } from 'src/app/_services/product.service/product.service';
import { OrderDetailsComponent } from '../order-details/order-details.component';

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
  chosenDeliveryMethod = false;
  deliveryMethodNotFound = false;
  madePayment = true;
  notEnoughStock : { productName: string, quantity: number }[] = []

  orderInput: OrderInput = {
    orderFullName: "",
    orderFullAddress: "",
    orderContactNumber: "",
    orderAlternateContactNumber: "",
    deliveryCost: 0,
    cart: []
  }

  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private paymentService :PaymentService,
    private router: Router) {}

  ngOnInit(): void {
   this.getCartDetails();
  }

  getCartDetails() {
    return this.productService.getCartDetails()
    .subscribe({
      next: (response: any)=> {
             (response);
             this.orderInput.cart = response;
             (this.orderInput.cart);
         },
         error: (error: HttpErrorResponse)=> {
             (error);
         }
       });
  }

  public placeOrder(orderForm: NgForm) {
    (this.orderInput);
    this.nameNotFound = false;
    this.addressNotFound = false;
    this.phoneNumberNotFound = false;
    this.wrongPhoneNumberFormat = false;
    this.wrongAlternatePhoneNumberFormat = false;
    this.madePayment = true;
    this.deliveryMethodNotFound = false;
    this.notEnoughStock = [];

    const allProductsInStock = this.AllProductsInStock();
  

    if(this.orderInput.orderFullName !=="" && this.orderInput.orderFullAddress !==""
    && this.orderInput.orderContactNumber !== "" && this.checkDigits(this.orderInput.orderContactNumber) === true
    && (this.orderInput.orderAlternateContactNumber === "" || (this.orderInput.orderAlternateContactNumber !== ""
    && this.checkDigits(this.orderInput.orderAlternateContactNumber) === true)) && this.paymentService.canPlaceOrder == true
    && this.chosenDeliveryMethod == true &&  allProductsInStock == true) {
      this.cartService.placeOrder(this.orderInput);
      this.paymentService.reset();
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

    if(this.paymentService.canPlaceOrder == false) {
      this.madePayment = false;
    }

    if(this.chosenDeliveryMethod == false) {
      this.deliveryMethodNotFound = true;
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
        if(c.product.productDiscountedPrice != 0 && c.product.productDiscountedPrice != null) {
          grandTotal = grandTotal + this.getCalculatedTotal(c.quantity, c.product.productDiscountedPrice);
        } else {
          grandTotal = grandTotal + this.getCalculatedTotal(c.quantity, c.product.productActualPrice);
        }
      }
    );

    grandTotal = grandTotal + this.orderInput.deliveryCost;
    this.paymentService.amountToPay = grandTotal;
    return grandTotal;
  }

  AllProductsInStock() {
    ("check stock")
    let productsWithLessStockThanQuantity = 0;
    this.orderInput.cart.forEach(
      (c) => {
        (c.product.productStock + " " +  c.quantity)
        if(c.product.productStock < c.quantity) {
          c.quantity = c.product.productStock;
          this.notEnoughStock.push({ productName: c.product.productName, quantity: c.quantity })
          productsWithLessStockThanQuantity += 1;
        }
      }
    );
    return (productsWithLessStockThanQuantity == 0)
  }

  getDeliveryDays() {
    let days = -Infinity;

    this.orderInput.cart.forEach(
      (c) => {
        if(c.product.deliveryDays != 0 && c.product.deliveryDays != null) {
          days = Math.max(days, c.product.deliveryDays)
        }
      }
    );
    return days;
  }

  setDeliveryCost(price: number) {
    this.orderInput.deliveryCost = price;
    this.chosenDeliveryMethod = true;
    ( this.orderInput.deliveryCost)
  }
  openModal() {
    const modal = document.getElementById(`id01`);
    if (modal) {
      modal.style.display = "block";
    }
  }

  closeModal() {
    const modal = document.getElementById(`id01`);
    if (modal) {
      modal.style.display = "none";
    }
    this.paymentService.canPlaceOrder = true;
  }
}
