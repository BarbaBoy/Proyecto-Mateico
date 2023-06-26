

const productos = [
    // Abrigos
    {
        id: "matePampa",
        titulo: "Mate Pampa XL",
        imagen: "img/mate-pampa.jpg",
        precio: 9560,
    },
    {
        id: "mateCriollo",
        titulo: "Mate Criollo",
        imagen: "img/criollo-handmade-ceramic-mate-with-bombilla-straw-included-pink-1.jpg",
        precio: 7220,
    },
    {
        id: "mateElectrico",
        titulo: "Mate Electrico Full Black",
        imagen: "img/mate-electrico.jpg",
        precio: 36600
    },
    {
        id: "mateMadera",
        titulo: "Mate de Madera",
        imagen: "img/mates-pintados.jpg",
        precio: 1700,
    },
    {
        id: "mateImperial",
        titulo: "Mate Imperial Alpaca",
        imagen: "img/imperial-alpaca.jpg",
        precio: 12700,
    },
    {
        id: "torpedoImperial",
        titulo: "Mate Torpedo Imperial",
        imagen: "img/torpedo-imperial.jpg",
        precio: 10600,
    },
    // Termos
    {
        id: "termoStanley",
        titulo: "Termo Stanley",
        imagen: "img/stanley.png",
        
        precio: 38550,
    },
    {
        id: "termoAceroManija",
        titulo: "Termo Acero Manija",
        imagen: "img/acero-manija.jpg",
        precio: 8000,
    },
    {
        id: "TermoElectrico",
        titulo: "Termo Electrico Peabody",
        imagen: "img/termo-electrico.jpeg",
        precio: 29900,
    },
    {
        id: "TermoSeleccion",
        titulo: "Termo Luminox SeleccionArg",
        imagen: "img/lumilagro-campeon.png",
        precio: 20200
    },
    {
        id: "termoLumilagro",
        titulo: "Termo Lumilagro Terra",
        imagen: "img/lumilagro-de-vidrio.jpg",
        precio: 4500,
    },
];

let carrito = [];

productos.forEach((product)=> {
    let content = document.createElement("div");
    content.innerHTML = `
    <img src="${product.imagen}">
    <h3>${product.titulo}</h3>
    <p>${product.precio} $</p>
    `;


})