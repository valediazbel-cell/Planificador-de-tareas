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
        alertTarea.innerHTML = "esta vacio, coloca la tarea"
        alertTarea.classList.remove("ocultaAlert");
        console.log("esta vacio, coloca la tarea")
    } else {
        alertTarea.classList.add("ocultaAlert");
    }
    if (descricion.trim() === "") {
        alertDes.innerHTML = "esta vacio,coloca la descripcion"
        alertDes.classList.remove("ocultaAlert");
        console.log("esta vacio,coloca la descripcion ")
    } else {
        alertDes.classList.add("ocultaAlert");
    }
    if (fecha.trim() === "") {
        alertFecha.innerHTML = "esta vacio,coloca la fecha"
        alertFecha.classList.remove("ocultaAlert");
        console.log("esta vacio,coloca la fecha")
    }else {
        alertFecha.classList.add("ocultaAlert");
    }
    if (prioridad.trim() === "") {
        alertPrio.innerHTML = "esta vacio, coloca la prioridad"
        alertPrio.classList.remove("ocultaAlert");
        console.log("esta vacio, coloca la prioridad")
    }else {
        alertPrio.classList.add("ocultaAlert");
    }


}

