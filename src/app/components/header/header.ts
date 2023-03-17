import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/_services/cart-service/cart.service';
import { ProductService } from 'src/app/_services/product.service/product.service';
import { UserAuthComponent } from 'src/app/_services/user.auth/user.auth/user.auth.component';

@Component({
  selector: 'header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header implements OnInit {

  pageNumber: number = 0;
  productDetails = [];
  public cartCount = 0;
  private cart: any[] = []

  constructor(private userAuthService: UserAuthComponent,
    public router: Router,
    private cartService: CartService) {
   }

  ngOnInit(): void {
   this.cartService.cartData$.subscribe(cartData => {
    console.log(cartData);
    this.cartCount = cartData.length;
  });
  }

  public isLoggedIn() : boolean {
    return this.userAuthService.isLoggedIn();
  }

  public logout() {
    this.userAuthService.clear();
    this.cartCount = 0;
    this.router.navigate(['']);
  }

  public isAdmin() : boolean {
    return this.userAuthService.isAdmin();
  }

  searchByKeyword(searchkeyword : NgForm) {
    const key : string = searchkeyword.value.searchKey;
    this.router.navigate(['/search-view', {searchkeyword: key}])
  }
}