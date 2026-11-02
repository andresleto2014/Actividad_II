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

    tareas.forEach(tarea => {

        const li = document.createElement("li");

        li.textContent = tarea.titulo;

        listaTareas.appendChild(li);

    });

}