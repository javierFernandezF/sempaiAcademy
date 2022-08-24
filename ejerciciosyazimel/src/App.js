import './App.css';
import PrimerComponente from './PrimerComponenete';
import SegundoComponente from './SegundoComponente';
import { useState } from 'react';
/*Ejercicio 1: 
/Construir dos componentes que interactúen entre sí:
	-Primer componente: que tenga un input y un botón.
	-Segundo componente: que tenga un textarea
Hacer que al pulsar el botón del primer componente, el textarea muestre lo que dice el input en ese momento.*/
function App() {
  
  const [texto,setTexto] = useState("")
    return (
    <div className="App">
      <PrimerComponente setTexto={setTexto} />
      
      <SegundoComponente texto={texto}/>
    </div>
  );
}

export default App;
