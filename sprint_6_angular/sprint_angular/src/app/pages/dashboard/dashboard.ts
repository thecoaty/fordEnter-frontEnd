import { Component } from '@angular/core';
import { AsideNav } from "../../components/aside-nav/aside-nav";
import { Vehicle } from '../../services/vehicle';
import { Veiculo, Vin } from '../../models/veiculo.model';
import { NgFor, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [AsideNav, NgForOf, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  public selectedVehicle: Veiculo | null = null;
  public vehicles:Veiculo[] = []

  public vinCode: string = '';
  public searchedVin:Vin | null = null;


constructor(private apiVehicles: Vehicle){}
  ngOnInit(){
    this.getVehicles(); 
  }
  getVehicles(){
    this.apiVehicles.getVehicles().subscribe(
      (dadosRecebidos:any) =>{
        this.vehicles = dadosRecebidos.vehicles;
        if(this.vehicles.length > 0){
          this.selectedVehicle = this.vehicles[0];
        }
      },
      (erro)=>{
        console.error(erro)
      }
    )
  }
  onVehicleChange(event: Event) {
  const selectElement = event.target as HTMLSelectElement;
  const selectedId = Number(selectElement.value);
  
  const found = this.vehicles.find(car => car.id === selectedId);
  if (found) {
    this.selectedVehicle = found;
  }
}

verifyVin() {
  this.apiVehicles.postVin(this.vinCode).subscribe(
    (veiculoEncontrado: any) => {
      if (veiculoEncontrado) {
        this.searchedVin = veiculoEncontrado;
      }
    },
    (erro) => {
      console.error(erro);
    }
  );
}
}