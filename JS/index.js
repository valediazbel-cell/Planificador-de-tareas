
const taskManager = new TaskManager();
console.log(taskManager.tasks);




let validationTarea = document.getElementById("validationTarea");
let validationDes = document.getElementById("validationDes");
let validacionfecha = document.getElementById("validacionfecha");
let validationprio = document.getElementById("validationprio");

//ALERTAS
let alertTarea = document.getElementById("alertTarea")
let alertDes = document.getElementById("alertDes")
let alertFecha = document.getElementById("alertFecha")
let alertPrio = document.getElementById("alertPrio")




function validFormFieldInput(data) {
    const nombre = validationTarea.value;
    const descricion = validationDes.value;
    const fecha = validacionfecha.value;
    const prioridad = validationprio.value;



    if (nombre.trim() === "") {
        alertTarea.innerHTML = "Ingresa el nombre de la tarea"
        alertTarea.classList.remove("ocultaAlert");
        console.log("esta vacio, coloca la tarea")
    } else {
        alertTarea.classList.add("ocultaAlert");
    }
    if (descricion.trim() === "") {
        alertDes.innerHTML = "La descripción es obligatoria"
        alertDes.classList.remove("ocultaAlert");
        console.log("esta vacio,coloca la descripcion ")
    } else {
        alertDes.classList.add("ocultaAlert");
    }
    if (fecha.trim() === "") {
        alertFecha.innerHTML = "Selecciona una fecha"
        alertFecha.classList.remove("ocultaAlert");
        console.log("esta vacio,coloca la fecha")
    }else {
        alertFecha.classList.add("ocultaAlert");
    }
    if (prioridad.trim() === "") {
        alertPrio.innerHTML = "Selecciona una prioridad"
        alertPrio.classList.remove("ocultaAlert");
        console.log("esta vacio, coloca la prioridad")
    }else {
        alertPrio.classList.add("ocultaAlert");
    }


}

const checkboxes =document.querySelectorAll(".form-check-input")

checkboxes.forEach(function(checkbox){
    checkbox.addEventListener("change",function(){
        const tarea = checkbox.closest(".tarea");
tarea.classList.toggle("tarea-completada")
    });
});

