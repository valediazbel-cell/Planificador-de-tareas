let validationTarea = document.getElementById("validationTarea");
let validationDes = document.getElementById("validationDes");
let validacionfecha = document.getElementById("validacionfecha");
let validationprio = document.getElementById("validationprio");




function validFormFieldInput(data) {
const nombre = validationTarea.value;
const descricion = validationDes.value;
const fecha = validacionfecha.value;
const prioridad = validationprio.value;


if (nombre.trim() === "") {
    console.log("esta vacio, coloca la tarea")
}
if (descricion.trim() === "") {
    console.log("esta vacio,coloca la descripcion ")
}
if (fecha.trim() === "") {
    console.log("esta vacio,coloca la fecha")
}
if (prioridad.trim() === "") {
    console.log("esta vacio, coloca la prioridad")
}


}

validFormFieldInput ()