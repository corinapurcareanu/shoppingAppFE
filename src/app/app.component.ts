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
    window.addEventListener('beforeunload', () => {
      this.logout();
    });
  }

  public logout() {
    this.userAuthService.clear();
    this.router.navigate(['']);
  }
}
