// BUTTON COUNTER
const restar = document.getElementById("rest");
const sumar = document.getElementById("plus");
const value = document.getElementById("value");
// CART COUNTER
const cartValue = document.getElementById("cart-value");
// CARRITO
const cart = document.getElementById("cart");
// PRODUCTOS
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}

const productos = [];
productos.push(new Producto("Remera", "120"));
productos.push(new Producto("Pantalón", "150"));
productos.push(new Producto("Buzo", "200"));
productos.push(new Producto("Campera", "250"));

const carritoUsuario = [];

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
        cartValue.innerHTML = numero;
        if (i < 1) {
            let nombre = prompt("Ingrese su Nombre");
            if (nombre.length >= 3) {
                let compraUsuario = prompt("Ingrese el nombre del producto que desea comprar \n" + " Remera \n Pantalón \n Buzo \n Campera");
                carritoUsuario.push(compraUsuario);
            } else {
                alert("Por favor, ingrese su nombre.");   
            }
        } else if (i < 2) {
            for (const producto of productos) {
                producto.sumaIva();
            }
        }
    }
});

cart.addEventListener("click", ()=>{
    if (carritoUsuario.length == 0) {
        alert("Usted no tiene elementos en el carrito")
    } else {
        let decision = confirm("Usted tiene en el carrito " + carritoUsuario + "\n¿Desea eliminar estos elementos?");
        if (decision == true) {
            carritoUsuario.pop();
            alert("Se borraron los elementos del carrito");
            location.reload();
        } else {
            alert("Puede continuar comprando");
        }
    }
})
//FUNCION ELIMINAR OBJETOS DEL CARRITO
const eliminar = (nombre) => {
    let index = carritoUsuario.indexOf(nombre)

    if (carritoUsuario != -1) {
        carritoUsuario.splice(index, 1)
    }
}