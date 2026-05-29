
//car
let carArr = [];

class Car {
   

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.nome = nome;
       this.preco = preco;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaCacamba = alturaCacamba;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.volumeCacamba = volumeCacamba;
       this.roda = roda;
       this.image = image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
   
    if(carClass instanceof Car){     
        const id = carClass.nome  
        if(el.checked){
            carArr.push(carClass);
            
        } else {
            carArr = carArr.filter(carClass => carClass.nome !== id)
        } 
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if(carArr.length != 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {

    carArr.forEach((car, i) => {
    document.getElementById(`compare_image_${i}`).innerHTML = `<img src="../${carArr[i].image}"></img>`
    document.getElementById(`compare_modelo_${i}`).innerHTML = `<p>${carArr[i].nome}</p>`
    document.getElementById(`compare_alturacacamba_${i}`).innerHTML = `<p>${carArr[i].alturaCacamba}</p>`
    document.getElementById(`compare_alturaveiculo_${i}`).innerHTML = `<p>${carArr[i].alturaVeiculo}</p>`
    document.getElementById(`compare_alturasolo_${i}`).innerHTML = `<p>${carArr[i].alturaSolo}</p>`
    document.getElementById(`compare_capacidadecarga_${i}`).innerHTML = `<p>${carArr[i].capacidadeCarga}</p>`
    document.getElementById(`compare_motor_${i}`).innerHTML = `<p>${carArr[i].motor}</p>`
    document.getElementById(`compare_potencia_${i}`).innerHTML = `<p>${carArr[i].potencia}</p>`
    document.getElementById(`compare_volumecacamba_${i}`).innerHTML = `<p>${carArr[i].volumeCacamba}</p>`
    document.getElementById(`compare_roda_${i}`).innerHTML = `<p>${carArr[i].roda}</p>`
    document.getElementById(`compare_preco_${i}`).innerHTML = `<p>R$ ${carArr[i].preco},00</p>`
    });
}
