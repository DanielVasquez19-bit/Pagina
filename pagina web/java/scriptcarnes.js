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
    "ajillo": {
        titulo: "Pollo al Ajillo",
        contenido: "Ingredientes: Pollo troceado, ajo, aceite de oliva, vino blanco, perejil, sal y pimienta. Preparación: Dora el pollo con ajo, añade vino blanco y cocina a fuego lento hasta que esté tierno, condimentar al gusto con sal pimienta y perejil."
    },
    "asada": {
        titulo: "Carne Asada",
        contenido: "Ingredientes: Filetes de res, limón, ajo, sal, pimienta, comino. Preparación: Marina la carne con limón y especias, luego ásala en parrilla o sartén caliente hasta el termino deseado."
    },
    "agridulce": {
        titulo: "Cerdo Agridulce",
        contenido: "Ingredientes: Trozos de cerdo, pimientos, piña, salsa de tomate, vinagre, azúcar. Preparación: Saltea el cerdo, añade pimientos y piña. Cocinar con la salsa agridulce hasta integrar."
    },
    "estofado": {
        titulo: "Estofado de Res",
        contenido: "Ingredientes: Carne de res, zanahorias, papas, cebolla, tomate, caldo, sal y pimienta. Preparación: Cocina la carne con verduras en caldo a fuego lento hasta que quede tierna, condimentar con sal y pimienta al gusto."
    },
    "albondigas": {
        titulo: "Albondigas en Salsa",
        contenido: "ngredientes: Carne molida,  ajo, tomate, cebolla, especias .Preparación: Preparación: Forma albóndigas, dóralas y cocina en salsa de tomate, condimentar al gusto. "
    },
    "peechuga": {
        titulo: "Pechuga de Pollo Rellena",
        contenido: "ngredientes: Pechugas de pollo, queso, jamón, espinacas, sal, pimienta. Preparación: Preparación: Rellena las pechugas, ciérralas con palillos y cocina al horno o sartén."
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

