import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [NgIf],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private auth: AuthService, private router: Router){}

  logout():void{
    this.auth.logout()
  }

  showElement = true;
  switchElement(){
    this.showElement = !this.showElement
  }
}
