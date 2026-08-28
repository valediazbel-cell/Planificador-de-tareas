


const taskManager = new TaskManager();

/*taskManager.addTask(
 'Sacar la basura',
 'Sacar la basura al frente de la casa',
 '2020-09-20',
  'Alta',
 'PORHACER'
);
console.log(taskManager.tasks);

taskManager.addTask(
 'Hacer de cenar',
 'Preparar la cena para la familia',
 '2020-09-20',
 'Alta',
 'PORHACER'
);
console.log(taskManager.tasks);*/


const form = document.getElementById("newTaskForm");

form.addEventListener("submit", function(event){
    event.preventDefault();
console.log ("entramos");
validFormFieldInput();
if ( validFormFieldInput() == true ){
console.log ("todo lleno");
    const nombre = validationTarea.value.trim();
    const descricion = validationDes.value.trim();
    const fecha = validacionfecha.value;
    const prioridad = validationprio.value;
    const status = "PORHACER";
    taskManager.addTask(
        nombre,
        descricion,
        fecha,
        prioridad,
        status
    );
   console.log(taskManager.tasks);
   pintarTarea();
   //form.reset();
} 

});



function pintarTarea(){
let listaTareas = document.getElementById("lista-tareas");

for (let k = 0; k< taskManager.tasks.length; k++){
    let nuevaTarea = document.createElement("li");
    nuevaTarea.classList.add ("list-grup-item","tarea");

    nuevaTarea.innerHTML = '<div>'+
                        '<input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">'+
                        '<label class="form-check-label" for="firstCheckbox">'+ taskManager.tasks[k].name+'</label>'+
                          ' </div>'+
                   '<div>'+
                      '  <button type="button" class="btn btn-outline-primary botonEliminar">Eliminar</button>'+
                    '</div>'

                    listaTareas.appendChild(nuevaTarea);
                 
}


}




let validationTarea = document.getElementById("validationTarea");
let validationDes = document.getElementById("validationDes");
let validacionfecha = document.getElementById("validacionfecha");
let validationprio = document.getElementById("validationprio");

//ALERTAS
let alertTarea = document.getElementById("alertTarea")
let alertDes = document.getElementById("alertDes")
let alertFecha = document.getElementById("alertFecha")
let alertPrio = document.getElementById("alertPrio")




function validFormFieldInput() {
    const nombre = validationTarea.value;
    const descricion = validationDes.value;
    const fecha = validacionfecha.value;
    const prioridad = validationprio.value;



    if (nombre.trim() === "") {
        alertTarea.innerHTML = "Ingresa el nombre de la tarea"
        alertTarea.classList.remove("ocultaAlert");
        console.log("esta vacio, coloca la tarea")
        return false
    } else {
        alertTarea.classList.add("ocultaAlert");
    }
    if (descricion.trim() === "") {
        alertDes.innerHTML = "La descripción es obligatoria"
        alertDes.classList.remove("ocultaAlert");
        console.log("esta vacio,coloca la descripcion ")
         return false
    } else {
        alertDes.classList.add("ocultaAlert");
    }
    if (fecha.trim() === "") {
        alertFecha.innerHTML = "Selecciona una fecha"
        alertFecha.classList.remove("ocultaAlert");
        console.log("esta vacio,coloca la fecha")
        return false
    }else {
        alertFecha.classList.add("ocultaAlert");
    }
    if (prioridad.trim() === "") {
        alertPrio.innerHTML = "Selecciona una prioridad"
        alertPrio.classList.remove("ocultaAlert");
        console.log("esta vacio, coloca la prioridad")
         return false
    }else {
        alertPrio.classList.add("ocultaAlert");
    }
    return true

} 








