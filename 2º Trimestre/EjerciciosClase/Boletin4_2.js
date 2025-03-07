/*function invisible(){
    if(count==3){
        document.getElementById("p1").style.visibility="visible"
        document.getElementById("p2").style.visibility="visible"
        document.getElementById("p3").style.visibility="visible"
        count=0
    }else
    parrafos=["p1","p2","p3"]
    ale=Math.floor(Math.random()*3)
    document.getElementById(parrafos[ale]).style.visibility="hidden"
    count++
}*/
let count = 0; // Contador para los párrafos invisibles

// Función para hacer que un párrafo se vuelva invisible de forma aleatoria
function invisible() {
    // Array con los ids de los párrafos
    const parrafos = ["p1", "p2", "p3"];

    // Si todos los párrafos están invisibles, restauramos la visibilidad
    if (count === 3) {
        // Restaurar la visibilidad de todos los párrafos
        for (let i = 0; i < parrafos.length; i++) {
            document.getElementById(parrafos[i]).style.visibility = "visible";
        }
        count = 0; // Restablecemos el contador a 0
    } else {
        // Seleccionar un párrafo aleatorio para hacerlo invisible
        let ale = Math.floor(Math.random() * 3);

        // Hacer el párrafo seleccionado invisible
        document.getElementById(parrafos[ale]).style.visibility = "hidden";
        count++; // Incrementar el contador de párrafos invisibles
    }
}


function cambiarTamaño() {
    var imagen = document.getElementById("imagen");
    var width = imagen.width;
    var height = imagen.height;

    // Aseguramos que la imagen no crezca más allá del tamaño de la ventana
    var maxWidth = window.innerWidth;
    var maxHeight = window.innerHeight;

    // Si la imagen no ha alcanzado el tamaño máximo, la duplicamos
    if (width * 2 <= maxWidth && height * 2 <= maxHeight) {
        imagen.width = width * 2;
        imagen.height = height * 2;
    }
}

// Función para restaurar el tamaño original de la imagen
function restaurarTamaño() {
    var imagen = document.getElementById("imagen");
    imagen.width = 300;  // Tamaño original en px
    imagen.height = 300; // Tamaño original en px
}

function añadirTarea() {
    // Pedir al usuario el nombre de la tarea
    var tarea = prompt("¿Qué tarea quieres añadir?");
    
    // Si el usuario no deja el campo vacío, la añadimos a la lista
    if (tarea && tarea.trim() !== "") {
        // Obtener el elemento de la lista (ul)
        var listaTareas = document.getElementById("tareas");
        
        // Crear un nuevo elemento de lista (li)
        var nuevoElemento = document.createElement("li");
        
        // Asignar el texto de la tarea al elemento de lista
        nuevoElemento.textContent = tarea;
        
        // Añadir el nuevo elemento a la lista de tareas
        listaTareas.appendChild(nuevoElemento);
    } else {
        alert("Por favor, ingresa una tarea válida.");
    }
}