import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.css',
})


export class Login {

  constructor(private authService: AuthService, private router: Router){}
  
  usuario = {
    nome: '',
    senha: '' 
  }

  mensagemErro : string | null = null;

  onSubmit(){
    this.mensagemErro = null;
    this.authService.login(this.usuario).subscribe({
      next:(response)=>{
        this.router.navigate(["/home"]);
      },
      error:(err) =>{
        this.mensagemErro = err.error.message || "Usuario ou senha incorretos"
      }
    })
    
  }
}
