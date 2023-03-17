import { HttpBackend, HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { OrderInput } from 'src/app/_model/order.input.model';
import { Product } from 'src/app/_model/product.model';
import { ProductService } from '../product.service/product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartData = new BehaviorSubject<number[]>([]);
  cartData$ = this.cartData.asObservable();
  public cartDetails : any[] = [];

constructor(private productService: ProductService,
  private router: Router){
  const cart = localStorage.getItem('cart');
  if (cart) {
    this.cartData.next(JSON.parse(cart));
  }
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
       let id= -1;
       if(productId != null) {
          id =productId;
       }

       if(id != -1) {
        this.cartData.next([...this.cartData.value, id]);
        localStorage.setItem('cart', JSON.stringify(this.cartData.value));
       }
  }

  delete(cartItem : any) {

    let id = -1
    if(cartItem.product.id != null) {
      id = cartItem.product.id;
   }

   if(id != -1) {
    const currentCartData = this.cartData.value;

    let index = currentCartData.findIndex(item => item === id);

    while (index !==  -1) {
      currentCartData.splice(index, 1);
  
      // Update cart data
      this.cartData.next(currentCartData);

      console.log("current cart data actualizat: " + currentCartData);
  
      // Save cart data to local storage
      localStorage.setItem('cart', JSON.stringify(currentCartData));
      console.log()

      index = currentCartData.findIndex(item => item === id);
    }
  }

    this.productService.deleteCartItem(cartItem.id).subscribe({
      next: (response) => {
        console.log(response);
        this.getCartDetails();
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    })
    
    //sa vad cum sterg toate alea din cart;
  }

  updatedQuantity(productId: number | null, increase: boolean) {
    console.log("update " + productId + " bool: " + increase);
    this.productService.updatedQuantityInCart(productId, increase)
    .subscribe({
      next: (response: any)=> {
             console.log(response);
             if(response.quantity == 0) {
              this.delete(response);
             } else {
              this.getCartDetails();
             }
         },
         error: (error: HttpErrorResponse)=> {
             console.log(error);
         }
       });

       let id= -1;
       if(productId != null) {
          id =productId;
       }

       if(id != -1) {
        const currentCartData = this.cartData.value;
        console.log("current cart data: " + currentCartData);

        if(increase == true) {
          this.cartData.next([...this.cartData.value, id]);
        }

        // Find index of item with matching ID
        const index = currentCartData.findIndex(item => item === id);
        console.log("id-ul dn lista:  " + index);
      
        if (index !== -1 && increase == false) {
          currentCartData.splice(index, 1);
      
          // Update cart data
          this.cartData.next(currentCartData);

          console.log("current cart data actualizat: " + currentCartData);
      
          // Save cart data to local storage
          localStorage.setItem('cart', JSON.stringify(currentCartData));
       }
      }
  }

  getCartDetails() {
    this.productService.getCartDetails()
    .subscribe({
      next: (response: any)=> {
             console.log(response);
             this.cartDetails = []
             this.cartDetails = response;
             console.log(this.cartDetails);

         },
         error: (error: HttpErrorResponse)=> {
             console.log(error);
         }
       });
  }

  reloadCart(): Observable<any> {
    return this.productService.getCartDetails().pipe(
      tap(response => {
        const responseData = response as { quantity: number; product: { id: number; }; }[];
        this.cartData.next([]);
        responseData.forEach((element) => {
          for(let i = 0; i < element.quantity; i++) {
            this.cartData.next([...this.cartData.value, element.product.id]);
          }
        });
        localStorage.setItem('cart', JSON.stringify(this.cartData.value));
      })
    );
  }

  placeOrder(orderInput : OrderInput) {
    this.productService.placeOrder(orderInput).subscribe({
      next: (response: any)=> {
        console.log(response);
        const currentCartData = this.cartData.value;
        currentCartData.splice(0, currentCartData.length);
        this.cartData.next(currentCartData);
        console.log("current cart data actualizat: " + currentCartData);
        localStorage.setItem('cart', JSON.stringify(currentCartData));
        this.router.navigate(["/orderConfirm"]);
    },
    error: (error: any)=> {
        console.log(error);
    }
  });
  }
}