let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);/*con esto traemos la info del ls */

const contenedorcarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonMasCantidad = document.querySelectorAll(".mas-cantidad");
let botonMenosCantidad = document.querySelectorAll(".menos-cantidad");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");

function cargarProductosCarrito() {
    if (productosEnCarrito && productosEnCarrito.length > 0) {


        /*aca ocultamos y mostramos segun asignemos remove o add con la clase disabled que
        ya esta puesta en el html del carrito. */
        contenedorcarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");

        contenedorCarritoProductos.innerHTML = "";
        /*aca se trajo el codigo de html de nuestro carrito */
        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
            <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="carrito-producto-titulo">
                <small>Titulo</small>
                <h3>${producto.titulo}</h3>
            </div>
            <div class="carrito-producto-cantidad">
                <small>Cantidad</small>
                <button class="mas-cantidad">+</button>
                <span class="cantidad">${producto.cantidad}</span>
                <button class="menos-cantidad">-</button>
            </div>
            <div class="carrito-producto-precio">
                <small>Precio</small>
                <p>$${producto.precio}</p>
            </div>
            <div class="carrito-producto-subtotal">
                <small class="subtotal">subtotal</small>
                <p>$${(producto.precio * producto.cantidad).toFixed(2)}</p>
            </div>
            <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash3"></i></button>
            `;
            contenedorCarritoProductos.append(div);
        })



    } else {
        contenedorcarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }
    botonesActualizarCantidad();
    actualizarBotonesEliminar();
    actualizarTotal();
}

cargarProductosCarrito();

function botonesActualizarCantidad() {
    botonMasCantidad = document.querySelectorAll(".mas-cantidad");
    botonMenosCantidad = document.querySelectorAll(".menos-cantidad");

    botonMasCantidad.forEach(boton => {
        boton.addEventListener("click", sumarUno);
    });
    botonMenosCantidad.forEach(boton => {
        boton.addEventListener("click", menosUno);
    });
}

function sumarUno (e){
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id = idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    
     } else {
        const productoAgregado = productos.find(producto => producto.id === idBoton);
         productoAgregado.cantidad = 1;
        
     }
    

       cargarProductosCarrito();
        localStorage.setItem("productos-en-carrito",  JSON.stringify(productosEnCarrito));
    
    
    }
    function menosUno (e){
        const idBoton = e.currentTarget.id;
        const index = productosEnCarrito.findIndex(producto => producto.id = idBoton);
    
        if(productosEnCarrito.some(producto => producto.id === idBoton)){
            const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
            
            productosEnCarrito[index].cantidad--;
        
         } else {
            const productoAgregado = productos.find(producto => producto.id === idBoton);
             productoAgregado.cantidad = 1;
            
         }
        
    
           cargarProductosCarrito();
            localStorage.setItem("productos-en-carrito",  JSON.stringify(productosEnCarrito));
        
        
        }
        
    


function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}


function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id = idBoton);
    /** el splice es lo que nos permitiria eliminar los objetos del carrito */
    productosEnCarrito.splice(index, 1);

    cargarProductosCarrito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));



}
botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}

function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    // Redondea y limita los centavos a dos dígitos
    const totalFormateado = totalCalculado.toFixed(2);

    // Actualiza el elemento HTML que muestra el total en la página
    total.innerText = `$${totalFormateado}`;
}
botonComprar.addEventListener("click", comprarCarrito);

function comprarCarrito() {
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

    contenedorcarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");
}