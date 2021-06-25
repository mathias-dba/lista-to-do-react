import React from "react";

const Tarea = ({ tarea, tareas, setTareas, texto }) => {
    const borrarTarea = () => {
        setTareas(tareas.filter((el) => el.id !== tarea.id));
    };

    const tareaCompleta = () => {
        setTareas(tareas.map(item => {
            if(item.id===tarea.id){
                return{...item, completa: !item.completa};
            }
            return item;
        }))
    };

    return(
        <div>
            <div onClick={tareaCompleta}>
                <li className={`tarea content fuente list izquierda ${tarea.completa ? "terminada" : ""}`}>{texto}</li>
            </div>
            <button className="fuente izquierda" onClick={borrarTarea}>Borrar</button>
        </div>

    );
}

export default Tarea;