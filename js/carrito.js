const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.imagen}">
    <h3>${product.titulo}</h3>
    <p>${product.precio} $</p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar"

    content.append(comprar);

    comprar.addEventListener("click", () => {

        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

        if (repeat) {
            carrito.map((prod) => {
                if (prod.id === product.id) {
                    prod.cantidad++;
                }
            });
        } else {

            carrito.push({
                id: product.id,
                imagen: product.imagen,
                titulo: product.titulo,
                precio: product.precio,
                cantidad: product.cantidad,
            });

            console.log(carrito);
            console.log(carrito.length);
            carritoCounter();
            saveLocal();
        }

    });
});


const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex"

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito:<h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h2");
    modalbutton.innerHTML = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalbutton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
        <img src="${product.imagen}">
        <h3>${product.titulo}</h3>
        <p>$${product.precio}</p>
        <span class="restar"> - </span>
        <p>Cantidad: ${product.cantidad}</p>
        <span class="sumar"> + </span>
        <p>Total: ${product.cantidad * product.precio}</p>
        <span class="delete-product"> ❌ </span>
    `;
        modalContainer.append(carritoContent);

        let restar = carritoContent.querySelector(".restar")

        restar.addEventListener("click", () => {
            if(product.cantidad !== 1) {

            
            product.cantidad--;
            saveLocal();
            pintarCarrito();
        }
        });

        let sumar = carritoContent.querySelector(".sumar")

        sumar.addEventListener("click", () => {
            if(product.cantidad !== 99) {

            
            product.cantidad++;
            saveLocal();
            pintarCarrito();
        }
        });

        let eliminar = carritoContent.querySelector(".delete-product")
        eliminar.addEventListener("click", () => {
        eliminarProducto(product.id);    
        });

        
    });

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `Total a pagar: $${total}`;
    modalContainer.append(totalBuying);
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    saveLocal();
    pintarCarrito();
};


const carritoCounter = () => {


};


/* Set item */

const saveLocal = () => {

    localStorage.setItem("carrito", JSON.stringify(carrito))

};

/* Get item */