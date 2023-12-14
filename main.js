function descargarLocalStorage(lista) {
    let listaAutosString = localStorage.getItem(lista);
    let listaAutos = JSON.parse(listaAutosString);
    return listaAutos || []; // Devolver un array vacío si no hay datos en el localStorage
}

function listarAutos(autos) {
    let cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = "";
    if (autos && autos.length > 0) { // Verificar si hay autos en la lista
        autos.forEach(auto => {
            let articleCard = document.createElement('article');
            let headerCard = document.createElement('header');
            let footerCard = document.createElement('footer');
            let mainCard = document.createElement('img');

            headerCard.textContent = auto.marca + '-' + auto.modelo;
            footerCard.textContent = auto.año;
            mainCard.src = auto.img;

            articleCard.appendChild(headerCard);
            articleCard.appendChild(mainCard);
            articleCard.appendChild(footerCard);
            cardContainer.appendChild(articleCard);

            console.log(auto);
        });
        cargarSelect(autos); // Llamar a la función cargarSelect con la lista de autos
    } else {
        cardContainer.innerHTML = "<p style='color:gray'>No se encontraron vehiculos, agregue uno nuevo</p>";
    }
}

function agregarAuto() {
    let marca = prompt('Ingrese marca');
    let modelo = prompt('Ingrese modelo');
    let año = prompt('Ingrese año');
    let img = prompt('Ingrese img');

    // Obtener la lista de autos del localStorage
    let lista = descargarLocalStorage('listaAutos') || []; // Obtener la lista o crear un array vacío

    let id = lista.length; // Obtener el ID como la longitud de la lista
    let auto = {
        marca: marca,
        modelo: modelo,
        año: año,
        img: img,
        id: id
    };

    lista.push(auto); // Agregar el nuevo auto a la lista
    actualizarLocalStorage(lista); // Actualizar el localStorage con la nueva lista de autos
    listarAutos(lista); // Mostrar la lista actualizada de autos
}

function filtrarMarca() {
    let marca = document.getElementById('selectMarca').value;
    let listaAutos = descargarLocalStorage('listaAutos') || []; // Obtener la lista de autos del localStorage
    let autoFiltrado = listaAutos.filter(auto => auto.marca === marca);

    console.log(autoFiltrado);
    listarAutos(autoFiltrado);
}

function cargarSelect(autos) {
    let selectFiltro = document.getElementById('selectMarca');
    selectFiltro.innerHTML = "";
    autos.forEach(auto => {
        selectFiltro.innerHTML += "<option value='" + auto.marca + "'>" + auto.marca + "</option>";
    });
}

function actualizarLocalStorage(listaAutos) {
    let listaAutosString = JSON.stringify(listaAutos);
    localStorage.setItem('listaAutos', listaAutosString);
}

let listaStorage = descargarLocalStorage('listaAutos');
console.log(listaStorage);
listarAutos(listaStorage);

$(function () {

    $("#cardContainer").mouseover(function () {
        $("h1").addClass("grey");

});
});