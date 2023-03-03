import { NgForm }   from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { UserService } from 'src/app/_services/user.service/user.service';
import { UserAuthComponent } from 'src/app/_services/user.auth/user.auth/user.auth.component';
import { Router } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.html',
  styleUrls: ['./sign-up.css'],
})

export class SignUp implements OnInit{
  nameNotFound : boolean = false;
  passwordNotFound: boolean = false;
  firstNameNotFound : boolean = false;
  lastNameNotFound : boolean = false;
  emailNotFound : boolean = false;
  wrongEmailFormat: boolean = false;
  wrongPhoneNumberFormat: boolean = false;
  shortPassword: boolean = false;
  shortName: boolean = false;

  constructor(private userSrvice: UserService,
    private userAuthService: UserAuthComponent,
    private router: Router) { }

  ngOnInit(): void {
  }

  emailHasRightFormat(email : string): boolean {
    if (email.indexOf("@")  > -1) {
      return true;
    }
    return false;
  }

checkDigits(str: string): boolean {
    return /^\d+$/.test(str);
}

signUp(signUpForm: NgForm) {
    console.log("Form is submitted")
    console.log(signUpForm.value.userPassword.length)

    this.nameNotFound= false;
    this.passwordNotFound = false;
    this.firstNameNotFound = false;
    this.lastNameNotFound = false;
    this.emailNotFound = false;
    this.wrongEmailFormat= false;
    this.wrongPhoneNumberFormat= false;
    this.shortPassword = false;
    this.shortName = false;

    if(signUpForm.value.userName != "" && signUpForm.value.userFirstName != "" && 
    signUpForm.value.userLastName != "" && signUpForm.value.userEmail != "" &&
   signUpForm.value.userPassword != "" &&    signUpForm.value.userPassword.length > 6 && 
   this.emailHasRightFormat(signUpForm.value.userEmail) == true
   &&(signUpForm.value.userPhoneNumber == "" || (signUpForm.value.userPhoneNumber != ""
    && this.checkDigits(signUpForm.value.userPhoneNumber) == true)) && signUpForm.value.userName.length > 6) {
      this.userSrvice.signUp(signUpForm.value).subscribe({
      next: (response: any)=> {
              this.router.navigate(['/authenticate']);
          },
          error: (error)=> {
              console.log(error);
          }
        });
    }

    if(signUpForm.value.userName == "") {
      this.nameNotFound = true;
    }

    if(signUpForm.value.userFirstName == "") {
      this.firstNameNotFound = true;
    }

    if(signUpForm.value.userLastName == "") {
      this.lastNameNotFound = true;
    }

    if(signUpForm.value.userPassword == "") {
      this.passwordNotFound = true;
    }

    if(signUpForm.value.userEmail == "") {
      this.emailNotFound = true;
    }

    if(signUpForm.value.userEmail != "" && this.emailHasRightFormat(signUpForm.value.userEmail) == false) {
      this.wrongEmailFormat = true;
    }

    if(this.checkDigits(signUpForm.value.userPhoneNumber) == false && signUpForm.value.userPhoneNumber != "") {
      this.wrongPhoneNumberFormat = true;
    }

    if(signUpForm.value.userPassword.length < 6 && signUpForm.value.userPassword != "") {
      this.shortPassword = true;
    }

    if(signUpForm.value.userName.length < 6 && signUpForm.value.userName != "") {
      this.shortName = true;
    }
  }
}