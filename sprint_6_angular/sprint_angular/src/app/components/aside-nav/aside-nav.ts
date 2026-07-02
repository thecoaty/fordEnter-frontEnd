import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-aside-nav',
  imports: [NgIf, NgClass],
  templateUrl: './aside-nav.html',
  styleUrl: './aside-nav.css',
})
export class AsideNav {
  constructor(private auth: AuthService){}

  logout():void{
    this.auth.logout()
  }

  showElement = false;
  switchElement(){
    this.showElement = !this.showElement
  }
}
