import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/_services/cart-service/cart.service';
import { ProductService } from 'src/app/_services/product.service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  displayedColumns: string[] = ['Name', 'description', 'Single Product Price', 'Total Price', 'Quantity', 'Action']

  constructor(private productService: ProductService,
    public cartService: CartService,
    private router: Router) {}

  ngOnInit(): void {
    this.cartService.getCartDetails();
    ( this.cartService.cartDetails);
  }

  checkout() {
    this.router.navigate(['/buyProduct']);
  }

  delete(cartItem : any) {
    this.cartService.delete(cartItem);
  }

  getTotalPrice(price: number, quantity: number) {
    return price * quantity;
  }

  updatedQuantity(productId: number | null, increase: boolean) {
    ("update " + productId)
    this.cartService.updatedQuantity(productId, increase);
  }
}
