import React, { useState } from "react";
import './App.css';
import Form from "./components/Formulario";
import Lista from "./components/Lista";

function App() {
  const [inputText, setInputText] = useState("");
  const [tareas, setTareas] = useState([]);

  return (
    <div>
    <div className="header centrar">
      <h1 className="titulo fuente">Lista de tareas</h1>
    </div>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        tareas={tareas}
        setTareas={setTareas}
      />
      <Lista tareas={tareas} setTareas={setTareas} />
    </div>
    
  );
}

export default App;
