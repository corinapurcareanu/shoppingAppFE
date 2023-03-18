import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthComponent {
  constructor() {}

  public setRole(role: string) {
    localStorage.setItem('roles', JSON.stringify(role));
  }

  public getRole(): string | null{
    return localStorage.getItem('roles');
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
    return this.getRole()  != null ? true : false;
  }

  public isAdmin() : boolean {
    const role: string | null = this.getRole();
    if(role != null) {
      return role.includes("admin");}
    return false;
  }
}
