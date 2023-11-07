let arrayAutos = []

console.log(arrayAutos)

function Auto(m, mo, a, p) {
    this.marca = m;
    this.modelo = mo;
    this.año = a;
    this.precio = p;

}
const auto1 = new Auto('Audi', 'A4', 2005, 20000);
const auto2 = new Auto('Audi', 'R8', 2007, 200000);
const auto3 = new Auto('Audi', 'RS6', 2022, 230000);
const auto4 = new Auto('Porsche', 'GT3RS', 2020, 310000);
const auto5 = new Auto('Porsche', 'Panamera', 2005, 60000);
const auto6 = new Auto('BMW', 'M5', 2005, 50000);
const auto7 = new Auto('BMW', 'Z4', 2018, 70000);
const auto8 = new Auto('Toyota', 'Supra', 1993, 10000);
const auto9 = new Auto('Toyota', 'Trueno', 1986, 20000);
const auto10 = new Auto('Mercedes-Benz', 'GLE', 2023, 250000);
const auto11 = new Auto('Suzuki', 'Celerio', 2015, 100000);



arrayAutos.push(auto1);
arrayAutos.push(auto2);
arrayAutos.push(auto3);
arrayAutos.push(auto4);
arrayAutos.push(auto5);
arrayAutos.push(auto6);
arrayAutos.push(auto7);
arrayAutos.push(auto8);
arrayAutos.push(auto9);
arrayAutos.push(auto10);
arrayAutos.push(auto11);

/* let auto = arrayAutos.filter(auto=> auto.precio <= 50000)
 console.log(auto)

let marca = arrayAutos.filter(marca=> marca.marca == 'Audi')
console.log(marca) //**/

let marcaAudi = arrayAutos.filter(marca => marca.marca == 'Audi')
let marcaPorsche = arrayAutos.filter(marca => marca.marca == 'Porsche')
let marcaBMW = arrayAutos.filter(marca => marca.marca == 'BMW')
let marcaToyota = arrayAutos.filter(marca => marca.marca == 'Toyota')
let marcaMercedes = arrayAutos.filter(marca => marca.marca == 'Mercedes-Benz')

let lista = document.getElementById('lista');

arrayAutos.forEach(auto => {
    let listaAuto = document.createElement("li");
    listaAuto.textContent = 'El vehiculo marca ' + auto.marca + ' modelo ' + auto.modelo + ' Año ' + auto.año + ' tiene un precio de ' + auto.precio + ' USD ';
    lista.appendChild(listaAuto);
})
function marcaA() {
    lista.textContent = "";
    marcaAudi.forEach(auto => {
        let listaAuto = document.createElement("li");
        listaAuto.textContent = 'El vehiculo marca ' + auto.marca + ' modelo ' + auto.modelo + ' Año ' + auto.año + ' tiene un precio de ' + auto.precio + ' USD ';
        lista.appendChild(listaAuto);
    })
};
function marcaP() {
    lista.textContent = "";
    marcaPorsche.forEach(auto => {
        let listaAuto = document.createElement("li");
        listaAuto.textContent = 'El vehiculo marca ' + auto.marca + ' modelo ' + auto.modelo + ' Año ' + auto.año + ' tiene un precio de ' + auto.precio + ' USD ';
        lista.appendChild(listaAuto);
    })
};

function marcaB() {
    lista.textContent = "";
    marcaBMW.forEach(auto => {
        let listaAuto = document.createElement("li");
        listaAuto.textContent = 'El vehiculo marca ' + auto.marca + ' modelo ' + auto.modelo + ' Año ' + auto.año + ' tiene un precio de ' + auto.precio + ' USD ';
        lista.appendChild(listaAuto);
    })
}

function marcaT() {
    lista.textContent = "";
    marcaToyota.forEach(auto => {
        let listaAuto = document.createElement("li");
        listaAuto.textContent = 'El vehiculo marca ' + auto.marca + ' modelo ' + auto.modelo + ' Año ' + auto.año + ' tiene un precio de ' + auto.precio + ' USD ';
        lista.appendChild(listaAuto);
    })
}

function marcaM() {
    lista.textContent = "";
    marcaMercedes.forEach(auto => {
        let listaAuto = document.createElement("li");
        listaAuto.textContent = 'El vehiculo marca ' + auto.marca + ' modelo ' + auto.modelo + ' Año ' + auto.año + ' tiene un precio de ' + auto.precio + ' USD ';
        lista.appendChild(listaAuto);
    })
}

function monto() {
    let montoIngresado = prompt('Ingrese el monto que quiere gastar')
    lista.textContent = "";
    arrayAutos.map(auto => {
        let listaAuto = document.createElement("li");
        listaAuto = arrayAutos.filter(precio => precio.precio <= montoIngresado)

        listaAuto.textContent = 'El vehiculo marca ' + auto.marca + ' modelo ' + auto.modelo + ' Año ' + auto.año + ' tiene un precio de ' + auto.precio + ' USD ';


        console.log(listaAuto);

    })

}














/*  let saldo = document.getElementById("inSalario")
      let dinero = saldo.value;
       console.log(dinero)//**///*
