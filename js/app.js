const txtTarea = document.getElementById("txtTarea");
const btnAgregar = document.getElementById("btnAgregar");
const listaTareas = document.getElementById("listaTareas");

let tareas = [];

btnAgregar.addEventListener("click",agregarTarea);

function agregarTarea() {
    
    const tarea = txtTarea.value.trim();
    
    if (tarea === ""){
        alert("Debe ingresar una tarea");
        return;
    }
    
     tareas.push({
        id: Date.now(),
        titulo: tarea,
        completada: false
    });
    
    renderizarTareas();
    guardarTareas();
    txtTarea.value = "";
    
    /**
     const li = document.createElement("li");
    const span = document.createElement("span");
    
    span.textContent = tarea;
    
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    
    btnEliminar.addEventListener("click",() => {
                                 li.remove();
                                 });
    
    li.appendChild(span);
    li.appendChild(btnEliminar);
    listaTareas.appendChild(li);
     */
}

function renderizarTareas() {

    listaTareas.innerHTML = "";

    for(let i = 0; i < tareas.length; i++) {
        const li = document.createElement("li");
        li.innerHTML =
            tareas[i].titulo +
            ' <button onclick="completarTarea(' + tareas[i].id + ')">Completar</button>' +
            ' <button onclick="eliminarTarea(' + tareas[i].id + ')">Eliminar</button>';

        if(tareas[i].completada){
            li.style.textDecoration = "line-through";
        }
        listaTareas.appendChild(li);
    }
    actualizarDashboard();
}

function completarTarea(id){

    for(let i = 0; i < tareas.length; i++){
        if(tareas[i].id == id){
            tareas[i].completada =
                !tareas[i].completada;
            break;
        }
    }
    guardarTareas();
    renderizarTareas();
}

function eliminarTarea(id){

    tareas = tareas.filter(function(tarea){
        return tarea.id != id;
    });
    guardarTareas();
    renderizarTareas();
}

function actualizarDashboard(){
    let pendientes = 0;
    let completadas = 0;
    for(let i = 0; i < tareas.length; i++){
        if(tareas[i].completada){
            completadas++;
        }
        else{
            pendientes++;
        }
    }
    document.getElementById("total").textContent = tareas.length;
    document.getElementById("pendientes").textContent = pendientes;
    document.getElementById("completadas").textContent = completadas;
}

function guardarTareas(){
    localStorage.setItem(
        "tareas",
        JSON.stringify(tareas)
    );
}

function cargarTareas(){
    const tareasGuardadas = localStorage.getItem("tareas");
    if(tareasGuardadas){
        tareas = JSON.parse(
            tareasGuardadas
        );
        renderizarTareas();
    }
}

cargarTareas();
