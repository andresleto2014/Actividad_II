export function guardarTareas(tareas){
    localStorage.setItem(
        "tareas",
        JSON.stringify(tareas)
    );
}

export function obtenerTareas(){
    return JSON.parse(
        localStorage.getItem("tareas")
    );
}