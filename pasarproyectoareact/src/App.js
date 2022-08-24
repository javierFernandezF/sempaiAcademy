
import './App.css';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Noticias from './Components/Noticias';
import Oportunidades from './Components/Oportunidades';
import Soluciones from './Components/Soluciones';
import Contacto from './Components/Contacto';


function App() {
  return (
    <div className="App">
   <Nav />
   <Header />
   <Noticias />
   <Oportunidades />
   <Soluciones />
   <Contacto />

    </div>
  );
}

export default App;
