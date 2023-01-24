// Container de Productos
const productContainer = document.querySelector("#productContainer");
// Contador de Productos en el Carrito
const cartValue = document.querySelector("#cart-value");
// Carrito de los Productos
let carrito = []; 
// Carga de datos desde el JSON de productos
const url = "../js/productos.json";
let productData;
fetch(url)
    .then(response => response.json())
    .then(data => {
        productData = data;
        productData.forEach(producto => {
            const {id, nombre, desc, cantidad, precio, img} = producto;
            productContainer.innerHTML += `
            <div class="card" style="width: 18rem;">
            <img src="${img}" class="card-img-top m-2" alt="...">
            <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">${desc}</p>
                <p class="card-text">$${precio}</p>
                <button onclick="agregarProducto('${nombre}')" class="btn btn-danger">Añadir al carrito</button>
                </div>
            </div> `
    }); 
})
    .catch(error => console.error("Error"));

// "Mother Function" => Disparará todas las funciones hechas más abajo y es la que se llama cuando hacemos click en el button "Añadir al carrito"
function agregarProducto(nombre) {
    Toastify({
        text: `Añadiste correctamente "${nombre}"`,
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
    }).showToast();
    addCounter();
    pushCart(nombre);
}

// Al hacer click en "Añadir al Carrito", se incrementa 1 en el CartValue
let cartCounter = cartValue.innerHTML = localStorage.getItem("Counter");

function addCounter() {
    cartCounter++;
    localStorage.setItem("Counter", cartCounter);
    cartValue.innerHTML = localStorage.getItem("Counter");
}
// Push de los elementos agregados al carrito.
let carritoStorage;
function pushCart(nombre) {
    const item = productData.find((producto) => producto.nombre === nombre);
    carrito.push(item);
    localStorage.setItem("Carrito", JSON.stringify(carrito))
    console.log(carrito)
}