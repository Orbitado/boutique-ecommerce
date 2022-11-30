// NAVBAR
const navToggle = document.querySelector(".toggle");
const innerWidth = parseInt(window.innerWidth);

if (innerWidth < 997) {
    navToggle.classList.toggle("active");
} else {
    navToggle.classList.remove("active")
}

// BUTTON COUNTER
const restar = document.getElementById("rest");
const sumar = document.getElementById("plus");
const value = document.getElementById("value");
// CART COUNTER
const cartValue = document.getElementById("cart-value");
// CARRITO
const cart = document.getElementById("cart");

let numero = 0;

sumar.addEventListener("click", ()=>{
    numero++;
    value.innerHTML = numero;
})

restar.addEventListener("click", ()=>{
    if (numero == 0) {
    } else {
        numero--;
        value.innerHTML = numero;
    }
});
// BUTTON ADD TO CART
const addCart = document.getElementById("add-cart");
addCart.addEventListener("click", ()=>{
    cartValue.innerHTML = numero;
    for (let i = 0; i < 3; i++) {
        if (i < 1) {
            let nombre = prompt("Por favor, ingresa tu nombre");
            console.log(nombre);
        } else if (i < 2) {
            let compra = prompt("¿Qué quieres comprar?");
            console.log("compra");
        } else if (i < 3) {
            let confirmacion = confirm("¿Deseas añadir esta cantidad al carrito?");

        }
    }
});

