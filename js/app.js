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
    li.textContent=tarea;
    
    listaTareas.appendChild(li);
    txtTarea.value="";
}