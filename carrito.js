function mostrarCarrito(){
  console.log(`Entre a mostrarCarrito()`);
}
let carritoDeCompras = [];

function agregarProductos(nombre, precio, cantidad) {
  const producto = {
    nombre: nombre,
    precio: precio,
    cantidad: cantidad
  };
  carritoDeCompras.push(producto);
  console.log(`Agregaste: ${cantidad} ${nombre} ($${precio} c/u).`);
}

function eliminarUltimoProducto() {
  const producto = carritoDeCompras.pop();
  if (producto) {
    console.log(`Se eliminó ${producto.nombre}`);
  } else {
    console.log("El carrito ya está vacío.");
  }
}

function calcularTotal() {
  let total = 0;
  for (let producto of carritoDeCompras) {
    total += producto.precio * producto.cantidad;
  }
  return total;
}

function mostrarCarrito() {
    if (carritoDeCompras.length === 0) {
    alert("El carrito está vacío.");
  } else {
    carritoDeCompras.forEach((producto, i) => {
      alert(`${i + 1}) ${producto.cantidad} x ${producto.nombre} - $${producto.precio} c/u`);
    });
    alert(`Total: $${calcularTotal().toFixed(2)}`);
  }
  console.log("------------------------------");
};

function menu() {
  let opcion;
  do {
    opcion = prompt(
      "Seleccione una opción:\n" +
      "1 - Agregar producto al carrito\n" +
      "2 - Ver carrito\n" +
      "3 - Eliminar último producto\n" +
      "4 - Ver total\n" +
      "5 - Salir"
    );

    switch (opcion) {
      case "1":
        const nombre = prompt("Ingrese el nombre del producto:");
        const precio = parseFloat(prompt("Ingrese el precio del producto:"));
        const cantidad = parseInt(prompt("Ingrese la cantidad:"));

        if (!nombre || isNaN(precio) || isNaN(cantidad)) {
          alert("Datos inválidos. Intente de nuevo.");
        } else {
          agregarProductos(nombre, precio, cantidad);
        }
        break;

      case "2":
        mostrarCarrito();
        break;

      case "3":
        eliminarUltimoProducto();
        break;

      case "4":
        alert(`Total: $${calcularTotal().toFixed(2)}`);
        break;

      case "5":
        alert("Gracias por confiar en nosotros.");
        console.log(`Carrito`);
        mostrarCarrito();
        break;

      default:
        alert("Opción inválida.");
    }
  } while (opcion !== "5");
};
window.onload = function() {
  menu();
};