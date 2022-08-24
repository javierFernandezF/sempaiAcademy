
import './App.css';
import PrimeraParte from './Components/PrimeraParte';
import SegundaParte from './Components/SegundaParte';
import { useState } from 'react';


function App() {
  const [tareas, setTareas] = useState([]);
  const agregarElemento = (elementoAgregar) => {
    setTareas([...tareas, elementoAgregar])
 
  };
  const borrarTarea = (elementoABorrar) => {
    const result = tareas.filter(tarea => tarea.id != elementoABorrar.id);
    setTareas(result)
  }
  return (
    <main className="App">
     <PrimeraParte agregarElemento={agregarElemento} />
     
     <SegundaParte tareas={tareas} borrarTarea={borrarTarea} />
    </main>
  );
}

export default App;
