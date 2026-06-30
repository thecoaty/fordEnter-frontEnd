import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})


export class Login {

  constructor(private authService: AuthService, private router: Router){}
  
  mensagemErro = signal<string | null> (null);
  carregando = signal<boolean>(false);
  private fb = inject(FormBuilder);
  
  loginForm = this.fb.group({
    name: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  onSubmit(){
    if(this.loginForm.invalid) return;

    this.carregando.set(true);
    this.mensagemErro.set(null);
    const {name, password} = this.loginForm.value;

    this.authService.login(name!, password!).subscribe({
      next: (usuario)=>{
        this.carregando.set(false)
        this.router.navigate(["/dashboard"]);
      },
      error: (err) =>{
        this.carregando.set(false);
        const erroApi = err.error?.menssage;
        this.mensagemErro.set(erroApi);
      }
    })
    
  }

}
