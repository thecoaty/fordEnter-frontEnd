import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

const usuario_key = "auth-user";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private router: Router){}
  private http = inject(HttpClient)
  private apiUrl = 'http://localhost:3001';
  
  login(usuario: Pick<Usuario, 'nome'|'senha'>): Observable<Usuario>{
    return this.http.post<Usuario>(`${this.apiUrl}/login`,usuario).pipe(
      tap(response=>{
        sessionStorage.setItem(usuario_key, JSON.stringify(response))
      })
    )
  }
  logout():void{
    sessionStorage.removeItem(usuario_key);
    this.router.navigate(['/login'])
  }
  islogged(): boolean{
    const user = sessionStorage.getItem(usuario_key);
    return user ? true : false
  }
}
