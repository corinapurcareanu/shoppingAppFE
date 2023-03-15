import { NgForm }   from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { UserService } from 'src/app/_services/user.service/user.service';
import { UserAuthComponent } from 'src/app/_services/user.auth/user.auth/user.auth.component';
import { Router } from '@angular/router';
import { CartService } from 'src/app/_services/cart-service/cart.service';
import { HttpErrorResponse } from '@angular/common/http';

@UntilDestroy()
@Component({
  selector: 'authenticate',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})

export class Login implements OnInit{

  nameNotFound : boolean = false;
  passwordNotFound: boolean = false;
  wrongCredentials: boolean = false;
  
  constructor(private userSrvice: UserService,
    private userAuthService: UserAuthComponent,
    private cartService: CartService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm) {
    console.log("Form is submitted")

    this.nameNotFound= false;
    this.passwordNotFound = false;
    this.wrongCredentials = false;

    if(loginForm.value.userName != "" && loginForm.value.userPassword != "") {

      this.userSrvice.login(loginForm.value).subscribe({
      next: (response: any)=> {
              // console.log(response);
              this.userAuthService.setRoles(response.user.role);
              this.userAuthService.setName(response.user.userFirstName);
              this.userAuthService.setToken(response.jwtToken);
              console.log(response.jwtToken)
              this.cartService.reloadCart().subscribe({
                next: () => {
                  console.log("cart details retrieved");
                  this.router.navigate(['']);
                },
                error: (error: HttpErrorResponse)=> {
                  console.log(error);
                }
              });
          },
          error: (error)=> {
              console.log(error);
              this.wrongCredentials = true;
          }
        });
    }

    if(loginForm.value.userName == "") {
      this.nameNotFound = true;
      console.log( this.nameNotFound )
    }

    if(loginForm.value.userPassword == "") {
      this.passwordNotFound = true;
    }
  }
}