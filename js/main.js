/* esto fue que les dije que estaria aca, al ponerlo aca es mas facil agregar 
o quitar una imagen no deseada, eso si que cada cosa escrita es manual, asi que
para tener una proyeccion perfecta se debe poner cada cosa al pie de las letra,
ojo con los id y las extensiones de las imagenes, por eso cada imagen utilizada esta
en png (esto es un array)*/
const productos = [
    {
        id: "lanzamientos-01",
        titulo: "Peraphone!",
        imagen: "./imagenes/lanzamientos/01.png",
        categoria: {
            nombre: "Lanzamientos!",
            id: "lanzamientos"
        },
        precio: 999.99
    },
    {
        id: "lanzamientos-02",
        titulo: "Peraphone!",
        imagen: "./imagenes/lanzamientos/02.png",
        categoria: {
            nombre: "Lanzamientos!",
            id: "lanzamientos"
        },
        precio: 999.99
    },
    {
        id: "lanzamientos-03",
        titulo: "Peraphone!",
        imagen: "./imagenes/lanzamientos/03.png",
        categoria: {
            nombre: "Lanzamientos!",
            id: "lanzamientos"
        },
        precio: 999.99
    },
    {
        id: "lanzamientos-04",
        titulo: "Peraphone!",
        imagen: "./imagenes/lanzamientos/04.png",
        categoria: {
            nombre: "Lanzamientos!",
            id: "lanzamientos"
        },
        precio: 999.99
    },
    {
        id: "peraphone-01",
        titulo: "Peraphone X",
        imagen: "./imagenes/peraphone/01.png",
        categoria: {
            nombre: "Peraphones",
            id: "peraphones"
        },
        precio: 1100.85
    },
    {
        id: "peraphone-02",
        titulo: "Peraphone 12 pro",
        imagen: "./imagenes/peraphone/02.png",
        categoria: {
            nombre: "Peraphones",
            id: "peraphones"
        },
        precio: 1400.90
    },
    {
        id: "peraphone-03",
        titulo: "Peraphone Xr",
        imagen: "./imagenes/peraphone/03.png",
        categoria: {
            nombre: "Peraphones",
            id: "peraphones"
        },
        precio: 1199.09
    },
    {
        id: "peraphone-04",
        titulo: "Peraphone 14 plus",
        imagen: "./imagenes/peraphone/04.png",
        categoria: {
            nombre: "Peraphones",
            id: "peraphones"
        },
        precio: 2000.99
    },
    {
        id: "peraphone-05",
        titulo: "Peraphone 6",
        imagen: "./imagenes/peraphone/05.png",
        categoria: {
            nombre: "Peraphones",
            id: "peraphones"
        },
        precio: 500.00
    },
    {
        id: "peraphone-06",
        titulo: "Peraphone 8",
        imagen: "./imagenes/peraphone/06.png",
        categoria: {
            nombre: "Peraphones",
            id: "peraphones"
        },
        precio: 700.00
    },
    {
        id: "peraphone-07",
        titulo: "Peraphone 7",
        imagen: "./imagenes/peraphone/07.png",
        categoria: {
            nombre: "Peraphones",
            id: "peraphones"
        },
        precio: 650.51
    }, {
        id: "peraphone-08",
        titulo: "Peraphone 15 plus",
        imagen: "./imagenes/peraphone/08.png",
        categoria: {
            nombre: "Peraphones",
            id: "peraphones"
        },
        precio: 2999.99
    },
    {
        id: "perabook-01",
        titulo: "Perabook Air",
        imagen: "./imagenes/perabook/01.png",
        categoria: {
            nombre: "Perabook",
            id: "perabook"
        },
        precio: 999.99
    },
    {
        id: "perabook-02",
        titulo: "Perabook Pro",
        imagen: "./imagenes/perabook/02.png",
        categoria: {
            nombre: "Perabook",
            id: "perabook"
        },
        precio: 1999.99
    },
    {
        id: "perabook-03",
        titulo: "Perabook Air",
        imagen: "./imagenes/perabook/03.png",
        categoria: {
            nombre: "Perabook",
            id: "perabook"
        },
        precio: 1199.98
    },
    {
        id: "perabook-04",
        titulo: "Perabook Air",
        imagen: "./imagenes/perabook/04.png",
        categoria: {
            nombre: "Perabook",
            id: "perabook"
        },
        precio: 1299.95
    },
    {
        id: "perabook-05",
        titulo: "Perabook pro",
        imagen: "./imagenes/perabook/044.png",
        categoria: {
            nombre: "Perabook",
            id: "perabook"
        },
        precio: 1399.90
    },
    {
        id: "perabook-06",
        titulo: "Perabook Air",
        imagen: "./imagenes/perabook/06.png",
        categoria: {
            nombre: "Perabook",
            id: "perabook"
        },
        precio: 1599.99
    },
    {
        id: "perabook-07",
        titulo: "Perabook Air",
        imagen: "./imagenes/perabook/07.png",
        categoria: {
            nombre: "Perabook",
            id: "perabook"
        },
        precio: 1599.99
    },
    {
        id: "perabook-08",
        titulo: "Perabook Air",
        imagen: "./imagenes/perabook/08.png",
        categoria: {
            nombre: "Perabook",
            id: "perabook"
        },
        precio: 1599.90
    },
    {
        id: "perapod-01",
        titulo: "Perapod 3rd",
        imagen: "./imagenes/perapod/01.png",
        categoria: {
            nombre: "Perapod",
            id: "perapod"
        },
        precio: 280.00
    },
    {
        id: "perapod-02",
        titulo: "Perapod 2da",
        imagen: "./imagenes/perapod/02.png",
        categoria: {
            nombre: "Perapod",
            id: "perapod"
        },
        precio: 165.99
    },
    {
        id: "perapod-03",
        titulo: "Perapod 1ra",
        imagen: "./imagenes/perapod/03.png",
        categoria: {
            nombre: "Perapod",
            id: "perapod"
        },
        precio: 100.00
    },
    {
        id: "perapod-04",
        titulo: "Perapod Max",
        imagen: "./imagenes/perapod/04.png",
        categoria: {
            nombre: "Perapod",
            id: "perapod"
        },
        precio: 565.99
    },
    {
        id: "perapod-05",
        titulo: "Perapod Ultra",
        imagen: "./imagenes/perapod/05.png",
        categoria: {
            nombre: "Perapod",
            id: "perapod"
        },
        precio: 699.99
    },
    {
        id: "perapod-06",
        titulo: "Perapod",
        imagen: "./imagenes/perapod/06.png",
        categoria: {
            nombre: "Perapod",
            id: "perapod"
        },
        precio: 99.99
    },
    {
        id: "perapod-07",
        titulo: "Perapod",
        imagen: "./imagenes/perapod/07.png",
        categoria: {
            nombre: "Perapod Ultra 3ra",
            id: "perapod"
        },
        precio: 3499.99
    },
    {
        id: "perapod-08",
        titulo: "Perapod",
        imagen: "./imagenes/perapod/08.png",
        categoria: {
            nombre: "Perapod Ultra 2da",
            id: "perapod"
        },
        precio: 2999.99
    }
];
/* aca llamamos nuestras clases y nuestros id que utilizamos en HTML */
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");
const buscadorInput = document.querySelector("#input-buscar")

function cargarProductos(productosElegidos){
/* innerHTML es lo que nos permite escribir codigo html en jacascript 
es esta propiedad  */
    contenedorProductos.innerHTML = "";
    
/*al pasar primero el innerhtml vacio, nos permite que al utilizar el filtro para 
la seleccion de categorias, los productos no se duplique sino que inicie todo 
de cero, vacio */


    productosElegidos.forEach(producto =>{
       
 /*el forech se encarga de recorrer cada uno de los elemntos del array */
    const div = document.createElement("div");
    
    div.classList.add("producto");
    div.innerHTML = `
    <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
      <div class="producto-detalles">
        <h3 class="producto-titulo">${producto.titulo}</h3>
        <p class="producto-precio">$${producto.precio}</p>
        <button class="producto-agregar" id="${producto.id}">Comprar</button>
      </div> 
    `;
    /*aca se baja el div de html y como el array se llama producto, creamos un div del mismo 
para luego llamar el innerhtml que contendra en el los productos de las propiedas
del array, recordando que el array es lo que inicia esta cadena de codigos 
 */
       contenedorProductos.append(div);

   })
       
       actualizarBotonesAgregar();
}

cargarProductos(productos);/*se agrego productos como parametro para que cargue todo al iniciar la pagina */
/*aca se hace que el active osea el espacio seleccionado en la categoria cambie, segun 
nosotros lo vayamos moviendo, le pasamos como parametro el click y un evento, al 
igual que se uso currenttarget, porque no es tan especifico como el simple target, se le 
por cada vez que cliquemos en otra categoria del menu se que quite la etiqueta active
y se le agregue a la que le dimos click */
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        /*el find es lo que nos encuentra por cada navbar su propio titulo osea el nombre */
        const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
        tituloPrincipal.innerText = productoCategoria.categoria.nombre;
        /*gracias al filter es que se trae los productos del navbar selecionado */
        const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
        cargarProductos(productosBoton);
       /*con la propiedad id traemos el elemnto html */

    })
});
buscadorInput.addEventListener("input", () => {
    const searchTerm = buscadorInput.value.toLowerCase();
    const productosFiltrados = productos.filter(producto =>
        producto.titulo.toLowerCase().includes(searchTerm)
    );
    cargarProductos(productosFiltrados);
});
function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
      boton.addEventListener("click", agregarAlCarrito);
    });
}
let productosEnCarrito;
/*aca nos dice que si hay algo en el ls los productos en el carrito sera igual a eso
de lo contrario es solo un array vacio. */
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
    /*igual tambien ponemos el actualizar el numerito porque sino comienza en 0 aunque todo se este 
    guardando en el ls, pues por eso tambien utilice una funcion que nos deja usarla cuantabas veces
    querramos en nuestro array */
}else{
    productosEnCarrito = [];
}  

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    /*con some hacemos que aumente en cantidad unitaria y no simplemente que se duplique
    ya que some es un array que nos devuelve verdadero o falso */
    if(productosEnCarrito.some(producto => producto.id === idBoton)){
       const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
       productosEnCarrito[index].cantidad++;

    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    
}
/* con esto actualizamos el span para el numero del carrito */

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}