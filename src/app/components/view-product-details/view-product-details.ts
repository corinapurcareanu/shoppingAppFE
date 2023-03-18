import { NgForm }   from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { UserService } from 'src/app/_services/user.service/user.service';
import { UserAuthComponent } from 'src/app/_services/user.auth/user.auth/user.auth.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/_services/product.service/product.service';
import { FileHandle } from 'src/app/_model/file-handle.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Product } from 'src/app/_model/product.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Header } from '../header/header';
import { CartService } from 'src/app/_services/cart-service/cart.service';

@UntilDestroy()
@Component({
  selector: 'view-product-details',
  templateUrl: './view-product-details.html',
  styleUrls: ['./view-product-details.css'],
})

export class ProductViewDetails implements OnInit{
  selectedProductIndex = 0;
  product!: Product;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private userAuthService: UserAuthComponent,
    private cartService: CartService){

  }
  
  ngOnInit(): void {
    this.product = this.activatedRoute.snapshot.data['product'];
    (this.product)
  }

  changeIndex(index: number) {
    this.selectedProductIndex = index;
  }


  addToCart(productId: number | null) {
    this.cartService.addToCart(productId)
  }

  public isAdmin() : boolean {
    return this.userAuthService.isAdmin();
  }

  
  public isLoggedIn() : boolean {
    return this.userAuthService.isLoggedIn();
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

  openErrorModal(id: any) {
    const modal = document.getElementById(`id02-${id}`);
    if (modal) {
      modal.style.display = "block";
    }
  }

  closeErrorModal(id: any) {
    const modal = document.getElementById(`id02-${id}`);
    if (modal) {
      modal.style.display = "none";
    }
  }
}