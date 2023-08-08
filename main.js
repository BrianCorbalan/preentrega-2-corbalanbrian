function Producto(nombreProducto, precioProducto, tipoProducto,talleProducto){
    // Función para agregar un producto a una lista y sumar +1 al ID
    this.id = productos.length + 1;
    this.nombre = nombreProducto;
    this.precio = precioProducto;
    this.tipo = tipoProducto;
    this.talle = talleProducto;
}

function vender(){
    // unción para restar -1 a la cantidad
    this.cantidad -= 1 
}

function agregarAlCarrito(producto) {
    // Función para agregar una remera al carrito
  const remera = catalogoRemeras.find(item => item.id === producto);
  if (remera) {
    carritoDeCompras.push(remera);
    alert(`Se agregó "${remera.nombre}" al carrito.`);
  } else {
    alert("No se encontró la producto en nuestro catálogo.");
  }
}

function mostrarCarrito() {
    // Función para mostrar el contenido del carrito
    let mensaje = "Carrito de Compras:\n";
    carritoDeCompras.forEach(item => {
        mensaje += `${item.nombre} - Precio: $${item.precio}\n`;
    });
    alert(mensaje);
}
  
function buscarRemerasporTalle(talle) {
    // Función de búsqueda y filtrado en el catálogo de remeras
const remerasFiltradas = catalogoRemeras.filter(item => item.talle === talle);
return remerasFiltradas;
}

function salirDeCarrito(){
    // Función para salir del carrito y cerrar el prompt
    alert("Saliendo del carrito");
}

function procesoBusquedaRemera(){
    // Función para buscar remera por talle
    let talleBuscada = prompt("Ingrese el talle que desea buscar:");
    let remerasFiltradas = buscarRemerasporTalle(talleBuscada);
    if (remerasFiltradas.length > 0) {
        let mensaje = `Remeras disponibles en talle ${talleBuscada}:\n`;
        remerasFiltradas.forEach(item => {
            mensaje += `${item.nombre} - Precio: $${item.precio}\n`;
        });
        alert(mensaje);
    } else {
        alert(`No se encontraron remeras en talle ${talleBuscada}`);
    }
}

function filtrarPorTipo(tipo) {
    // Función para filtrar producto por tipo
    return catalogoRemeras.filter(item => item.tipo === tipo);
}

function filtrarPorTalle(talle) {
    // Función para filtrar producto por talle
    return catalogoRemeras.filter(item => item.talle.toUpperCase() === talle.toUpperCase());
}

function filtradoBusqueda(opcion){
    // Función para elegir una opción de filtrado de búsqueda
    switch (opcion) {
        case "1":
            const remeras = filtrarPorTipo("Remera");
            mostrarResultados(remeras);
            break;
        case "2":
            const buzos = filtrarPorTipo("Buzo");
            mostrarResultados(buzos);
            break;
        case "3":
            const talle = prompt("Ingrese el talle a filtrar:");
            const porTalle = filtrarPorTalle(talle);
            mostrarResultados(porTalle);
            break;
        default:
            alert("Opcion invalida");
            break;
    }
}

function mostrarResultados(resultados) {
    // Función para mostrar resultados
    let mensaje = "Resultados:\n";
    resultados.forEach(item => {
        mensaje += `ID: ${item.id}\nNombre: ${item.nombre}\nPrecio: $${item.precio}\ntalle: ${item.talle}\nTipo: ${item.tipo}\n\n`;
    });
    alert(mensaje);
}

const carritoDeCompras = []; // Carrito vacio
const catalogoRemeras = [
    {id: 1, nombre: "Guardianes de la galaxia", precio: 1200, tipo: "Remera", talle: "M"},
    {id: 2, nombre: "Sonic", precio: 1200, tipo: "Remera", talle: "L"},
    {id: 3, nombre: "Zero", precio: 1200, tipo: "Remera", talle: "L"},
    {id: 4, nombre: "Wanda Vision", precio: 1200, tipo: "Remera", talle: "S"},
    {id: 5, nombre: "Digimon", precio: 1200, tipo: "Remera", talle: "XL"},
    {id: 6, nombre: "Attack On Titans", precio: 1200, tipo: "Buzo", talle: "S"},
    {id: 7, nombre: "Demon Slayer", precio: 1200, tipo: "Buzo", talle: "XS"},
    {id: 8, nombre: "Spiderman", precio: 1200, tipo: "Buzo", talle: "M"},
];


// Acá empieza el prompt

let opcionInicio = ""; 
while (opcionInicio !== "ESC") {
    let opcion = prompt("¡Bienvenido al carrito de REIWA STYLE!\n\nElige una opción:\n1: Ver catálogo\n2: Agregar producto al carrito\n3: Mostrar carrito\nESC: para salir");
  
    switch (opcion) {
      case "1":
        let catalogoMensaje = "Nuestros Productos:\n\n";
        catalogoRemeras.forEach(item => {
          catalogoMensaje += `ID: ${item.id} - ${item.nombre} - Precio: $${item.precio}\n`;
        });
        alert(catalogoMensaje);
        respuesta = prompt("Podemos Filtrarlos por:\n(Elige una opción)\n1: Remeras\n2: Buzos\n3: Talles");
        filtradoBusqueda(respuesta)        
        break;
      case "2":
        let idRemera = parseInt(prompt("Ingrese el ID de la remera que desea agregar al carrito:"));
        agregarAlCarrito(idRemera);
        break;
      case "3":
        mostrarCarrito();
        break;
      case "ESC":
        opcionInicio = "ESC";
        salirDeCarrito();
        break;
      default:
        alert("Opción no válida");
        break;
    }
}


