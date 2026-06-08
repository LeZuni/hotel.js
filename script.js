let habitaciones = [];

function mostrarMenu() {
  let opcion = prompt(
    "=== HOTEL ===\n 1. Registrar nueva habitación\n 2. Listar habitaciones\n 3. Buscar habitación por número\n 4. Cambiar estado de una habitación\n 5. Eliminar habitación\n 6. Salir\n\n Elige una opción:",
  );
  if (opcion === "1") registrarHabitacion();
  else if (opcion === "2") listarHabitaciones();
  else if (opcion === "3") buscarHabitacion();
  else if (opcion === "4") cambiarEstado();
  else if (opcion === "5") eliminarHabitacion();
  else if (opcion === "6") {
    console.log("Saliendo del sistema. ¡Hasta luego!");
  } else {
    console.log("Opción no válida. Inténtalo de nuevo.");
    mostrarMenu();
  }
}

function registrarHabitacion() {
  let numero = prompt("Numero de habitacion: ");
  let tipo = prompt("Tipo (Sencilla / Doble / Suite):");
  let precio = prompt("Precio por noche:");
  console.log("Validando información de la habitación");

  setTimeout(function () {
    let habitacion = {
      numero: numero,
      tipo: tipo,
      precioNoche: precio,
      estado: "Libre",
      huesped: "",
    };

    habitaciones.push(habitacion);
    console.log("Habitación registrada correctamente.");
    mostrarMenu();
  }, 2000);
}
