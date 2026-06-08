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

function listarHabitaciones() {
  if (habitaciones.length === 0) {
    console.log("No hay habitaciones registradas.");
  } else {
    for (let i = 0; i < habitaciones.length; i++) {
      let habitacion = habitaciones[i];
      console.log(
        `Habitación ${habitacion.numero} - Tipo: ${habitacion.tipo} - Precio: Q${habitacion.precioNoche} - Estado: ${habitacion.estado}`,
      );
    }
  }
  mostrarMenu();
}

function buscarHabitacion() {
  let numero = prompt("Número de habitación a buscar:");
  console.log("Buscando habitación...");
  setTimeout(() => {
    let habitacion = habitaciones.find((h) => h.numero === numero);
    if (habitacion) {
      console.log(
        `Habitación ${habitacion.numero} - Tipo: ${habitacion.tipo} - Precio: Q${habitacion.precioNoche} - Estado: ${habitacion.estado}`,
      );
    } else {
      console.log("Habitación no encontrada.");
    }
    mostrarMenu();
  }, 2000);
}

function cambiarEstado() {
  var numero = prompt("Número de habitación:");

  console.log("Esperando al personal del hotel...");

  setTimeout(function () {
    var habitacion = habitaciones.find(function (h) {
      return h.numero === numero;
    });

    if (!habitacion) {
      console.log("Habitación no encontrada.");
      mostrarMenu();
      return;
    }

    var nuevoEstado = prompt("Nuevo estado (Libre / Ocupada / Limpieza):");
    habitacion.estado = nuevoEstado;

    if (nuevoEstado === "Ocupada") {
      habitacion.huesped = prompt("Nombre del huésped:");
    } else if (nuevoEstado === "Libre") {
      habitacion.huesped = "";
    }

    console.log("Estado actualizado correctamente.");
    mostrarMenu();
  }, 3000);
}

function eliminarHabitacion() {
  let numero = prompt("Número de habitación a eliminar:");
  let index = habitaciones.findIndex((h) => h.numero === numero);
  if (index !== -1) {
    habitaciones.splice(index, 1);
    console.log("Habitación eliminada correctamente.");
  } else {
    console.log("Habitación no encontrada.");
  }
  mostrarMenu();
}

mostrarMenu();