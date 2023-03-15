import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthComponent } from '../user.auth/user.auth/user.auth.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  PATH_OF_API = "http://localhost:9090"

  requestHeader = new HttpHeaders(
    {"No-Auth": "True"}
  )
  constructor(private httpclient : HttpClient,
    private userAuthService: UserAuthComponent) { }

  public login(loginData: any) {
    return this.httpclient.post(this.PATH_OF_API + "/authenticate", loginData, { headers: this.requestHeader})
  }

  public roleMatch(allowedRoles:string[]): boolean {
    const userRoles: any = this.userAuthService.getRoles();

    console.log("User roles" + this.userAuthService.getRoles());
    console.log("Allowed roles" + allowedRoles);

    if(userRoles != null && userRoles) {
        for(let i=0; i < userRoles.length; i++) {
          for(let j=0; j < allowedRoles.length; j++) {
            if(userRoles[i].roleName === allowedRoles[j]) {
              return true;
            }
          }
        }
    }

    return false; //false
  }

  public signUp(signUpData: any) {
    return this.httpclient.post(this.PATH_OF_API + "/registerUser", signUpData, { headers: this.requestHeader})
  }
}
