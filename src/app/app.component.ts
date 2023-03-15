import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthComponent } from './_services/user.auth/user.auth/user.auth.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BeautyProductsStore';

  constructor(private userAuthService: UserAuthComponent,
    private router: Router) {

  }
  ngOnInit() {
    // window.addEventListener('beforeunload', (event) => {
    //   let targetUrl = null;
    //   if(event.target!= null){
    //   targetUrl = (event.target as Window).location.href;
    //   }
    //   const currentUrl = window.location.href;
      
    //   // check if the user is navigating away from your app
    //   if (targetUrl !== currentUrl) {
    //     return;
    //   }
    
    //   // if the user is still within your app, log them out
    //   this.logout();
    // });
  }

  public logout() {
    this.userAuthService.clear();
    this.router.navigate(['']);
  }
}
