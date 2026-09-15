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

    let formularioValido = true;


    if (nombre.trim() === "") {
        alertTarea.innerHTML = "Ingresa el nombre de la tarea"
        alertTarea.classList.remove("ocultaAlert");
        console.log("esta vacio, coloca la tarea")
        formularioValido = false;
    } else {
        alertTarea.classList.add("ocultaAlert");
    }
    if (descricion.trim() === "") {
        alertDes.innerHTML = "La descripción es obligatoria"
        alertDes.classList.remove("ocultaAlert");
        console.log("esta vacio,coloca la descripcion ")
        formularioValido = false;
    } else {
        alertDes.classList.add("ocultaAlert");
    }
    if (fecha.trim() === "") {
        alertFecha.innerHTML = "Selecciona una fecha"
        alertFecha.classList.remove("ocultaAlert");
        console.log("esta vacio,coloca la fecha")
        formularioValido = false;
    } else {
        alertFecha.classList.add("ocultaAlert");
    }
    if (prioridad.trim() === "Selecciona") {
        alertPrio.innerHTML = "Selecciona una prioridad"
        alertPrio.classList.remove("ocultaAlert");
        console.log("esta vacio, coloca la prioridad")
        formularioValido = false;
    } else {
        alertPrio.classList.add("ocultaAlert");
    }
    return formularioValido;

}



const taskManager = new TaskManager();

taskManager.load();
pintarTarea()
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

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("entramos");
    validFormFieldInput();
    if (validFormFieldInput() == true) {
        console.log("todo lleno");
        const nombre = validationTarea.value.trim();
        const descricion = validationDes.value.trim();
        const fecha = validacionfecha.value;
        const prioridad = validationprio.value;
        const status = "Por Hacer";

        taskManager.addTask(
            nombre,
            descricion,
            fecha,
            prioridad,
            status
        );
        taskManager.save();
        console.log(taskManager.tasks);
        pintarTarea();
        //form.reset();
    }

});



function pintarTarea() {
    let listaTareas = document.getElementById("lista-tareas");
    listaTareas.replaceChildren();

    for (let k = 0; k < taskManager.tasks.length; k++) {
        let nuevaTarea = document.createElement("li");
        nuevaTarea.classList.add("list-group-item", "tarea");

        let check = "";
        if (taskManager.tasks[k].status == "Hecho") {
            nuevaTarea.classList.add("tareaCompletada");
            check = "checked"
        }

        nuevaTarea.innerHTML =
            '<div class="filaTarea">' +
            '<div class="tituloYdescri">' +
            '<div>' +
            '<input class="form-check-input me-1 checkTarea" data-status="' + k + '" type="checkbox"   value=""  id="' + taskManager.tasks[k].id + '" ' + check + ' >' +
            '<label class="form-check-label titulos-tarea" for="firstCheckbox">' + taskManager.tasks[k].name + '</label>' +
            ' </div>' +
            '<div class= "descripcion-tarea">' + taskManager.tasks[k].description + ' </div>' +

            '</div>' +
            '<div class="fec-pri-sta-borr">' +
            '<div>' + taskManager.tasks[k].dueDate + ' </div>' +
            '<div class="prioridad-' + taskManager.tasks[k].prioridad + '">' + taskManager.tasks[k].prioridad + ' </div>' +
            '<div class="status-' + taskManager.tasks[k].status + '">' + taskManager.tasks[k].status + ' </div>' +
            '<div>' +
            '  <button type="button" class="btn btn-outline-primary botonEliminar" data-borrar="' + k + '">Eliminar</button>' +
            '</div>' +
            '</div>' +
            '</div>'
        listaTareas.appendChild(nuevaTarea);

    }


    const hechaTareas = document.querySelectorAll(".checkTarea");
    hechaTareas.forEach(function (checkbox) {
        checkbox.addEventListener("change", function (event) {
            if (event.target.checked) {


                console.log("Está hecha la tarea:" + event.target.id);

                taskManager.tasks[parseInt(event.target.dataset.status)].status = "Hecho";
                console.log("click lista tarea" + event.target.dataset.status);

                taskManager.save();
                pintarTarea();

            } else {
                taskManager.tasks[parseInt(event.target.dataset.status)].status = "Por Hacer";
                taskManager.save();
                pintarTarea();
            }


        });
    });

    const eliminarTareas = document.querySelectorAll(".botonEliminar");
    eliminarTareas.forEach(function (boton) {
        boton.addEventListener("click", function (event) {


            console.log("click emilinar tarea" + event.target.dataset.borrar);

            taskManager.tasks.splice(parseInt(event.target.dataset.borrar), 1);
            taskManager.save();
            pintarTarea();

        });
    });




}


pintarTarea();
