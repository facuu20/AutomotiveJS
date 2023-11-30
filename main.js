/*let listaAutos = [
    {
        marca: 'hyundai',
        modelo: 'hb20',
        año: 2024,
        img: './carpetaAutos/m5.jpg',
        id: 0
    },
    
    {
        marca: 'audi',
        modelo: 'a4',
        año: 2005,
        img: './carpetaAutos/a4.jpg',
        id: 1

    },
    {
        marca: 'opel',
        modelo: 'corza',
        año: 2000,
        img: './carpetaAutos/supra.jpg',
        id: 2
    }
]
*/
function descargarLocalStorage(lista) {
    let listaAutosString = localStorage.getItem(lista)
    let listaAutos = JSON.parse(listaAutosString)
    return listaAutos

}
function listarAutos(autos) {
    let cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = "";
    if (autos) {
        autos.forEach(auto => {
            let articleCard = document.createElement('article');
            let headerCard = document.createElement('header');
            let footerCard = document.createElement('footer');
            let mainCard = document.createElement('img');

            headerCard.textContent = auto.marca + '-' + auto.modelo
            footerCard.textContent = auto.año
            mainCard.src = auto.img

            articleCard.appendChild(headerCard);
            articleCard.appendChild(mainCard);
            articleCard.appendChild(footerCard);
            cardContainer.appendChild(articleCard);

            
            console.log(auto)
        });
        
    } else (
        cardContainer.innerHTML = "<p style='color:gray'>No se encontraron vehiculos, agregue uno nuevo</p> "
        )
        
        cargarSelect(autos)
    }
    
    function agregarAuto() {
        let marca = prompt('Ingrese marca')
    let modelo = prompt('Ingrese modelo')
    let año = prompt('Ingrese ano')
    let img = prompt('Ingrese img')
    let id = listarAutos.length
    let auto = {
        marca: marca,
        modelo: modelo,
        año: año,
        img: img,
        id: id
    }
    
    if (!lista) {
        let lista = descargarLocalStorage('listaAutos')
    }
    lista.push(auto)


    listarAutos(lista)
    actualizarLocalStorage(lista)

}
function filtrarMarca() {
    let marca = document.getElementById('selectMarca').value
    let autoFiltrado = listaAutos.filter(auto => auto.marca == marca);

    console.log(autoFiltrado)
    listarAutos(autoFiltrado)

}
function cargarSelect(autos) {
    let selectFiltro = document.getElementById('selectMarca');
    selectFiltro.innerHTML = ""
    autos.forEach(auto => {
        selectFiltro.innerHTML += "<option value='" + auto.marca + "'>" + auto.marca + "</option>"

    });

}

function actualizarLocalStorage(listaAutos) {
    let listaAutosString = JSON.stringify(listaAutos)
    localStorage.setItem('listaAutos', listaAutosString)
}






let listaStorage = descargarLocalStorage('listaAutos')
console.log(listaStorage)
listarAutos(listaStorage)






