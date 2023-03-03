import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthComponent {
  constructor() {}

  public setRoles(roles:[]) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): [] {
    return JSON.parse(localStorage.getItem('roles') || '{}');
  }

  public setName(name: string) {
    localStorage.setItem('name', name);
  }

  public getName(): string {
    return localStorage.getItem('name') || ""
  }

  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }

  public getToken(): string {
    return localStorage.getItem('jwtToken') || "";
  }


  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() : boolean {
    return this.getRoles().length > 0 ? true : false;
  }

  public isAdmin() : boolean {
    const roles: any[] = this.getRoles();
    if(roles.length > 0) {return roles[0].roleName === 'admin';}
    return false;
  }
}
