// Limpiar carrito
const cleanCart = document.querySelector("#cleanCart");
cleanCart.addEventListener("click", ()=>{
    Swal.fire({
        title: '¿Quieres eliminar todos los productos en el carrito?',
        text: "¡No es posible deshacer esta acción!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Si, eliminalos!',
        cancelButtonText: '¡No, quiero mantenerlos!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            '¡Carrito vacio!',
            'Han sido removidos todos los productos seleccionados anteriormente.',
            'success'
          )
          localStorage.clear("Carrito");
          cartValue.innerHTML = 0;
          innerCart.innerHTML = "";
        }
      })
})
// INNER Html de los elementos en el carrito
const innerCart = document.querySelector("#listContainer");
carrito = JSON.parse(localStorage.getItem("Carrito"));
carrito.forEach(item => {
    const {nombre, precio, img} = item;
    innerCart.innerHTML += `
    <!-- RELLENO JS -->
                <div class="productContainer container d-flex justify-content-around align-items-center gap-5">
                    <!-- IMAGEN -->
                    <div class="image">
                        <img src="${img}" id="cartProductImage">
                    </div>
                    <!-- NOMBRE -->
                    <div class="item" id="cartProductName">
                        <small>Producto</small>
                        <h3>${nombre}</h3>
                    </div>
                    <!-- CANTIDAD -->
                    <div class="price" id="cartProductPrice">
                        <small>Cantidad</small>
                        <p class="m-0 text-center">1</p>
                    </div>
                    <!-- PRECIO -->
                    <div class="price" id="cartProductPrice">
                        <small>Precio</small>
                        <p class="m-0">$${precio}</p>
                    </div>
                </div>
            <!-- RELLENO JS -->
    `
});

// Finalizar Compra
const purchaseItems = document.querySelector("#purchaseItems");
purchaseItems.addEventListener("click", ()=> {
    Swal.fire({
        title: '¿Deseas confirmar la compra?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Si, comprar mis productos!',
        cancelButtonText: '¡No, seguir comprando!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            '¡Compra realizada con éxito!',
            'Tus productos llegaran en 3 días hábiles',
            'success'
          )
        }
      })
})