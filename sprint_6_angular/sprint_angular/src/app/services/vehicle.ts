import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veiculo, Vin } from '../models/veiculo.model';

@Injectable({
  providedIn: 'root',
})
export class Vehicle {
  private apiUrl = "http://localhost:3001/"
  
  constructor(private http: HttpClient){}

  getVehicles():Observable<Veiculo[]>{
    return this.http.get<Veiculo[]>(`${this.apiUrl}vehicles`);
  }

  postVin(id: string):Observable<Vin>{
    const body= { vin: id }
    return this.http.post<Vin>(`${this.apiUrl}vehicleData`,body);
  }
}
