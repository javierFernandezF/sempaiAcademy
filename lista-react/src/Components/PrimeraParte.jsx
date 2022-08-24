import '../Styles/PrimeraParte.css';
import { useState } from 'react';
import {v4 as uuidv4} from "uuid";




const PrimeraParte =({agregarElemento}) => {
    const [input, setInput]= useState("");
    const [select, setSelect]=useState("");

    const onInputChange = (evento) => {
        setInput(evento.target.value); 
        
    };

    const onSelectChange = (evento) => {
        setSelect(evento.target.value);
    };

    const agregarTarea = () => {
        agregarElemento({nombre: input, prioridad: select, id: uuidv4() })
    }
     
    return(
       
        <>
                <h1>Lista de tareas!</h1>
             <form action="javascript:void(0);">
                <input id="tarea" type="text" name="tarea" placeholder="Descripción de la tarea"  onChange={onInputChange} value={input} />
                <select name="prioridad" id="prioridad" onChange={onSelectChange} value={select} >
                    <option value="" disabled selected>Prioridad</option>
                    <option value="prioridad-baja">baja</option>
                    <option value="prioridad-media">media</option>
                    <option value="prioridad-alta">alta</option>
                </select>     
          
                <button id="agregar" onClick={agregarTarea}>Agregar!</button>
             </form>
             
        </>
  

        
    
    )
}

export default PrimeraParte;

