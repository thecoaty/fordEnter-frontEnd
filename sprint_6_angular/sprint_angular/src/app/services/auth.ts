import { HttpClient } from '@angular/common/http';
import { Injectable, signal, inject } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient)
  private apiUrl = 'http://localhost:3001/login';

  private isAut = signal<Usuario | null>(null);
  
  login(nome: string, senha: string): Observable<Usuario>{
    return this.http.post<Usuario>(this.apiUrl,{nome, senha}).pipe(
      tap((usuario)=>{
        this.isAut.set(usuario);
      })
    );
  }
  logout(){
    this.isAut.set(null);
  }
  public islogged(){
    return this.isAut()
  }
}
