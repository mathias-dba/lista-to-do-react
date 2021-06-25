import React from "react";

const Form = ({ inputText, setInputText, tareas, setTareas }) => {
    const inputControladorTexto = (e) => {
        setInputText(e.target.value);
    };
    const submitLista = (e) => {
        e.preventDefault();
        if(inputText===""){
            return;
        }else{
            setTareas([
                ...tareas, {id: Math.random(), texto: inputText, completa: false}
            ]);
        }
        setInputText("");
    };

    return(
        <div className="tarea centrar">    
            <form>
                <input                    
                    value={inputText}
                    type="text"
                    placeholder="Agregar una tarea"
                    className="tarea-input fuente"
                    onChange={inputControladorTexto}
                />
                <button
                    className="tarea-submit fuente"
                    onClick={submitLista}>Agregar
                </button>
            </form>
        </div>
    );
}

export default Form;