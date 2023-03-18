import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthComponent } from '../_services/user.auth/user.auth/user.auth.component';
import { UserService } from '../_services/user.service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userAuthService: UserAuthComponent,
    private router: Router,
    private userService: UserService) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.userAuthService.getRole() != null) {
      const role:string[] = route.data["roles"] as Array<string>;
      if(role) {
        const match = this.userService.roleMatch(role);

        if(match) {
          return true;
        }
      }
    }
    
    this.router.navigate(['/accessForbidden']);
    return false;
  }
  
}
