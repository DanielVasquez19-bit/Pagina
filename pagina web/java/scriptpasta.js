// mostrar botón de "subir al inicio" al deslizar la pagina hacia abajo
window.onscroll = function () {
    const botonSubir = document.getElementById("boton-subir");
    if (window.scrollY > 200) {
        botonSubir.style.display = "block";
    } else {
        botonSubir.style.display = "none";
    }
};

// función para subir al principio
function subirAlInicio() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// función para ver más detalles de una receta (aun no lo hago)
function verMas(receta) {
    alert("Detalles de la receta: " + receta + ". ¡Próximamente añadiremos más detalles!");
}

// función para enviar el formulario (no aparece el mensaje xd)
function enviarFormulario() {
    alert("¡Gracias por contactarnos! Tu mensaje ha sido enviado.");
    return true; // permitir el envío del formulario (igual no es como que se envie a ningun lado)
}
// datos de las recetas
const recetas = {
    "carbonara": {
        titulo: "Spaghetti alla Carbonara",
        contenido: "Ingredientes: Spaghetti, huevo, panceta, queso parmesano, pimienta Preparación: Cocina la pasta, mezcla el huevo y el queso, añade la panceta y la mezcla de huevo con queso sobre la pasta caliente."
    },
    "lasagna": {
        titulo: "Lasagna al Horno",
        contenido: "Ingredientes: Placas de lasagna, carne picada, salsa de tomate, queso mozzarella, queso parmesano, bechamel. Preparación: Intercala capas de pasta, carne y salsa, cubre con queso y gratina al horno."
    },
    "pesto": {
        titulo: "Pasta al Pesto",
        contenido: "Ingredientes: Spaghetti, albahaca fresca, piñones, queso parmesano, aceite de oliva, dientes de ajo, sal y pimienta al gusto. Preparación: Cocinar la pasta, en una licuadora mezclar la albahaca, piñones, ajo, queso y sal al gusto, agregar el aceite de oliva poco a poco, al final mezclar la pasta con la salsa, sal y pimienta al gusto."
    },
    "marinara": {
        titulo: "Pasta alla Marinara",
        contenido: "Ingredientes: Spaghetti, 1 lata de tomates enteros pelados, dientes de ajo, aceite de oliva, azucar, sal y pimienta, hojas de albahaca fresca. Preparación: Cocinar la pasta, en una sarten sofreir el ajo con el aceite de oliva, añadir los tomates enlatados y azucar al gusto, cocinar a fuego medio hasta que espese. agregar la salsa a la pasta y decorar con albahaca ."
    },
    "bolognese": {
        titulo: "Pasta alla Bolognese",
        contenido: "Ingredientes: Spaghetti, carne molida, 1 lata de tomates triturados, zanahoria, cebolla, ajo, vino (opcional), caldo de carne, aceite de oliva, sal y pimienta al gusto, queso parmesano. Preparación: En una sarten sofreir la cebolla, zanahoria y ajo, agregar la carne molida y cocinar, añadir el vino y dejar reducir luego agregar el caldo de res y los tomates, cocinar a fuego lento hasta que espese, cocinar la pasta y agregarle la salsa y el queso "
    },
    "alfredo": {
        titulo: "Fettucinne Alfredo",
        contenido: "Ingredientes: Pasta Fettuccine, crema de leche, mantequilla, queso parmesano, sal y pimienta, perejil. Preparación: Cocinar la pasta, en una sarte derretir la mantequilla, agregar la crema de leche y cocinar a fuego bajo, añadir el queso parmesano, agregar la pasta a la salsa condimentar con sal y pimienta y decorar con perejil fresco."
    },
  
};
// funcion pa que funcione el boton ese 
function mostrarRecetaModal(tipo) {
    const receta = recetas[tipo];
    const contenidoHTML = `<h2>${receta.titulo}</h2><p>${receta.contenido}</p>`;
    document.getElementById("contenido-modal").innerHTML = contenidoHTML;
    document.getElementById("modal-receta").style.display = "block";
}

function cerrarModal() {
    document.getElementById("modal-receta").style.display = "none";
}
// funcion para la barra de busqueda
function buscarReceta() {
    const query = document.getElementById("busqueda").value.toLowerCase().trim();

    // si no hay texto, muestra alerta
    if (!query) {
        alert("Por favor ingresa el nombre de una receta.");
        return;
    }

    // buscar recetas que coincidan con la busqueda
    const resultados = Object.keys(recetas).filter((key) => {
        return recetas[key].titulo.toLowerCase().includes(query);
    });

    // si hay resultados, mostrar en el modal o mostrar alerta si no se encuentran
    if (resultados.length > 0) {
        mostrarResultados(resultados);
    } else {
        alert("No se encontraron recetas con esa palabra.");
    }
}

// mostrar los resultados de la busqueda en un modal
function mostrarResultados(resultados) {
    let contenidoHTML = "<h2>Resultados de busqueda:</h2>";
    resultados.forEach((key) => {
        contenidoHTML += `<p>${recetas[key].titulo}: ${recetas[key].contenido}</p>`;
    });

    document.getElementById("contenido-modal").innerHTML = contenidoHTML;
    document.getElementById("modal-receta").style.display = "block";
}

// funcion para cerrar el modal
function cerrarModal() {
    document.getElementById("modal-receta").style.display = "none";
}



