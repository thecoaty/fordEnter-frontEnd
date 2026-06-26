import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAut = signal<boolean>(false);
  login(){
    this.isAut.set(true);
  }
  logout(){
    this.isAut.set(false);
  }

  isLogged(){
    return this.isAut;
  }
}
