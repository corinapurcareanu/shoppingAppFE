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
    const userRole: string | null = this.userAuthService.getRole();

    if(userRole != null) {
        for(let i=0; i < allowedRoles.length; i++) {
          if(userRole.includes(allowedRoles[i])) {
            return true;
          }
        }
    }

    return false; //false
  }

  public signUp(signUpData: any) {
    return this.httpclient.post(this.PATH_OF_API + "/registerUser", signUpData, { headers: this.requestHeader})
  }
}
