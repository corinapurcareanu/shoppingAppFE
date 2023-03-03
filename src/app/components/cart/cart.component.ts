import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/_services/product.service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  displayedColumns: string[] = ['Name', 'description', 'Single Product Price', 'Total Price', 'Quantity', 'Action']
  cartDetails : any[] = [];

  constructor(private productService: ProductService,
    private router: Router) {}

  ngOnInit(): void {
    this.getCartDetails();
  }

  getCartDetails() {
    this.productService.getCartDetails()
    .subscribe({
      next: (response: any)=> {
             console.log(response);
             this.cartDetails = response;
             console.log(this.cartDetails);
         },
         error: (error: HttpErrorResponse)=> {
             console.log(error);
         }
       });
  }

  checkout() {
    this.router.navigate(['/buyProduct']);
  }

  delete(cartId : number) {
    this.productService.deleteCartItem(cartId).subscribe({
      next: (response) => {
        console.log(response);
        this.getCartDetails();
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    })
  }

  getTotalPrice(price: number, quantity: number) {
    return price * quantity;
  }
}
