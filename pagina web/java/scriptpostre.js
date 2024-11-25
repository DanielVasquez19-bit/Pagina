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
    "tiramisu": {
    titulo: "Tiramisú",
    contenido: "Ingredientes: Mascarpone, huevos, azúcar, café, bizcochos, cacao en polvo. Preparación: Alterna capas de bizcocho empapado en café con crema de mascarpone. Enfría y espolvorea cacao antes de servir."
},
"brownies": {
    titulo: "Brownies de Chocolate",
    contenido: "Ingredientes: Chocolate, mantequilla, azúcar, huevos, harina, nueces. Preparación: Mezcla todos los ingredientes, vierte en un molde y hornea. Deja enfriar antes de cortar en cuadrados."
},
"cheesecake": {
    titulo: "Cheesecake Clásico",
    contenido: "Ingredientes: Queso crema, galletas trituradas, mantequilla, azúcar, huevos, vainilla. Preparación: Hornea la base de galletas y luego el relleno de queso crema. Refrigera antes de servir."
},
"flan": {
    titulo: "Flan de Caramelo",
    contenido: "Ingredientes: Leche condensada, leche evaporada, huevos, azúcar, vainilla. Preparación: Haz caramelo, mezcla el resto de los ingredientes y cocina al baño maría hasta que esté firme."
},
"crepas": {
    titulo: "Crepas con Nutella",
    contenido: "Ingredientes: Harina, huevos, leche, mantequilla, Nutella. Preparación: Prepara las crepas, úntalas con Nutella y dóblalas. Puedes decorar con frutas o azúcar glass."
},
"gelatina": {
    titulo: "Gelatina de Frutas",
    contenido: "Ingredientes: Gelatina de sabores, frutas (fresas, piña, mango). Preparación: Prepara la gelatina según las instrucciones, añade las frutas picadas y refrigera hasta que esté firme."
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

