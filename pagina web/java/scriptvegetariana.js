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
//function verMas(receta) {
  //alert("Detalles de la receta: " + receta + ". ¡Próximamente añadiremos más detalles!");


// función para enviar el formulario (no aparece el mensaje xd)
function enviarFormulario() {
    alert("¡Gracias por contactarnos! Tu mensaje ha sido enviado.");
    return true; // permitir el envío del formulario (igual no es como que se envie a ningun lado)
}
// datos de las recetas
const recetas = {
  "caprese": {
    titulo: "Ensalada Caprese",
    contenido: "Ingredientes: Tomate, mozzarella, albahaca, aceite de oliva, sal. Preparación: Alterna rodajas de tomate y mozzarella, añade albahaca fresca y rocía con aceite de oliva y sal al gusto."
},
"tacos": {
    titulo: "Tacos Vegetarianos",
    contenido: "Ingredientes: Tortillas, frijoles, aguacate, pimientos, queso, salsa. Preparación: Rellena las tortillas con los ingredientes y calienta ligeramente en un sartén."
},
"berenjenas": {
    titulo: "Berenjenas a la Parmesana",
    contenido: "Ingredientes: Berenjenas, salsa de tomate, queso mozzarella, parmesano. Preparación: Alterna capas de berenjenas asadas con salsa de tomate y queso. Hornea hasta que estén doradas."
},
"risotto": {
    titulo: "Risotto de Champiñones",
    contenido: "Ingredientes: Arroz arbóreo, champiñones, caldo de verduras, vino blanco, parmesano. Preparación: Cocina el arroz añadiendo el caldo poco a poco. Mezcla los champiñones salteados y sirve caliente."
},
"hamburguesas": {
    titulo: "Hamburguesas Vegetarianas",
    contenido: "Ingredientes: Garbanzos, avena, cebolla, ajo, especias, pan para hamburguesa. Preparación: Forma hamburguesas con la mezcla de garbanzos triturados y cocínalas en un sartén. Sirve con tus toppings favoritos."
},
"primavera": {
    titulo: "Pasta Primavera",
    contenido: "Ingredientes: Pasta, brócoli, zanahorias, espárragos, ajo, aceite de oliva. Preparación: Cocina la pasta y mézclala con las verduras salteadas en aceite de oliva y ajo. Sirve caliente."
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

//funcion para la barra de busquedas
function searchRecipes() {
    const searchInput = document.getElementById("searchBar").value.toLowerCase();
    const recipes = document.querySelectorAll(".carta_receta");

    recipes.forEach((recipe) => {
        const recipeText = recipe.textContent.toLowerCase();

        // Mostrar/ocultar recetas según coincidencias
        if (recipeText.includes(searchInput)) {
            recipe.classList.remove("hidden");
        } else {
            recipe.classList.add("hidden");
        }
    });
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