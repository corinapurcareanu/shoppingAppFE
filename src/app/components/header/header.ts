import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private userAuthService: UserAuthComponent,
    public router: Router,
    private productService: ProductService) {
   }

  ngOnInit(): void {
  }

  public isLoggedIn() : boolean {
    return this.userAuthService.isLoggedIn();
  }

  public logout() {
    this.userAuthService.clear();
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