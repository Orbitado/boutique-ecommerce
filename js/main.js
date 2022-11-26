// BUTTON COUNTER
const restar = document.getElementById("rest");
const sumar = document.getElementById("plus");
const value = document.getElementById("value");

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
    for (let i = 0; i < 3; i++) {
        if (i < 1) {
            let nombre = prompt("Por favor, ingresa tu nombre");
            console.log(nombre);
        } else if (i < 2) {
            let compra = prompt("¿Qué quieres comprar?");
            console.log("compra");
        } else if (i < 3) {
            let confirmacion = confirm("¿Deseas dirigirte a la compra?");
            if (confirmacion == true) {
                location.reload();
            }
        }
    }
})
