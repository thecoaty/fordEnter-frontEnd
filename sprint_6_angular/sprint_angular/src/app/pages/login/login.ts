import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})


export class Login {

  constructor(private authService: AuthService, private router: Router){}

  login(){
    this.authService.login();
    this.router.navigate(["/posts"])
  }
}
