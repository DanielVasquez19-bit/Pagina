// Mostrar botón de "Subir al Inicio" al hacer scroll hacia abajo
window.onscroll = function () {
    const botonSubir = document.getElementById("boton-subir");
    if (window.scrollY > 200) {
        botonSubir.style.display = "block";
    } else {
        botonSubir.style.display = "none";
    }
};

// Función para subir al inicio
function subirAlInicio() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Función para ver más detalles de una receta (simulación)
function verMas(receta) {
    alert("Detalles de la receta: " + receta + ". ¡Próximamente añadiremos más detalles!");
}

// Función de confirmación para el formulario de contacto
function enviarFormulario() {
    alert("¡Gracias por contactarnos! Tu mensaje ha sido enviado.");
    return true; // Permitir el envío del formulario
}
// Datos de las recetas
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
        contenido: "Ingredientes: Spaghetti, huevo, panceta, queso parmesano, pimienta. Preparación: Cocina la pasta, mezcla el huevo y el queso, añade la panceta y la mezcla de huevo con queso sobre la pasta caliente."
    },
    "marinara": {
        titulo: "Pasta alla Marinara",
        contenido: "Ingredientes: Spaghetti, huevo, panceta, queso parmesano, pimienta. Preparación: Cocina la pasta, mezcla el huevo y el queso, añade la panceta y la mezcla de huevo con queso sobre la pasta caliente."
    },
    "bolognese": {
        titulo: "Pasta alla Bolognese",
        contenido: "Ingredientes: Spaghetti, huevo, panceta, queso parmesano, pimienta. Preparación: Cocina la pasta, mezcla el huevo y el queso, añade la panceta y la mezcla de huevo con queso sobre la pasta caliente."
    },
    "alfredo": {
        titulo: "Fettucinne Alfredo",
        contenido: "Ingredientes: Spaghetti, huevo, panceta, queso parmesano, pimienta. Preparación: Cocina la pasta, mezcla el huevo y el queso, añade la panceta y la mezcla de huevo con queso sobre la pasta caliente."
    },
  
};

function mostrarRecetaModal(tipo) {
    const receta = recetas[tipo];
    const contenidoHTML = `<h2>${receta.titulo}</h2><p>${receta.contenido}</p>`;
    document.getElementById("contenido-modal").innerHTML = contenidoHTML;
    document.getElementById("modal-receta").style.display = "block";
}

function cerrarModal() {
    document.getElementById("modal-receta").style.display = "none";
}



