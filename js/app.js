const txtTarea = document.getElementById("txtTarea");
const btnAgregar = document.getElementById("btnAgregar");
const listaTareas = document.getElementById("listaTareas");

btnAgregar.addEventListener("click",agregarTarea);

function agregarTarea() {
    
    const tarea = txtTarea.value.trim();
    if (tarea === ""){
        alert("Debe ingresar una tarea");
        return;
    }
    
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
    txtTarea.value="";
}