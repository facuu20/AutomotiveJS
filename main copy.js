let arrayAutos = []

console.log(arrayAutos)




let lista = document.getElementById('lista');


arrayAutos.forEach(auto => {
    let listaAuto = document.createElement("li");
    listaAuto.textContent = 'El vehiculo marca ' + auto.marca + ' modelo ' + auto.modelo + ' Año ' + auto.año + ' tiene un precio de ' + auto.precio + ' USD ';
    lista.appendChild(listaAuto);
})
let listaCards = document.getElementById('cards');
arrayAutos.forEach(auto => {
    let card = document.createElement("article");
    
    let cardMain = document.createElement('img');
    cardMain.innerHTML= '<img src="carpetaAutos\a4.jpg" alt"">';


    let cardHeader = document.createElement('header');
    cardHeader.textContent = auto.marca + '   ' + auto.modelo;
    
    let cardFooter = document.createElement('footer');
    cardFooter.textContent = auto.precio + ' USD';
    
    
    
    card.appendChild(cardHeader);
    card.appendChild(cardMain);
    card.appendChild(cardFooter);
    listaCards.appendChild(card);
    
    

});



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
    lista.textContent="";
    let dinero = prompt('Ingrese monto a gastar ')
    let listaDinero = arrayAutos.filter(precio => precio.precio <= dinero)
    listaDinero.forEach(auto => {
         listaDinero= document.createElement("li")
        listaDinero.textContent = 'El vehiculo marca ' + auto.marca + ' modelo ' + auto.modelo + ' Año ' + auto.año + ' tiene un precio de ' + auto.precio + ' USD ';
      console.log(listaDinero)
      lista.appendChild(listaDinero)
    })
}