import React from "react";
import Tarea from "./Tarea";

const Lista = ({ tareas, setTareas }) => {
    return(
        <div class="centrar">
            <ul className="fuente">
                {tareas.map(tarea => (
                    <Tarea
                        key={tarea.id}
                        texto={tarea.texto}
                        tarea={tarea}
                        tareas={tareas}
                        setTareas={setTareas}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Lista; 