import logo from "../Materiales/logo.png"


const Nav = () => {
   return (
    <nav className="navStyle">
    <img src={logo} />
    <ul className="listaCompu">
      {/* <li><a href=#SolucionesID>Nosotros</a></li>
      <li><a href=#NoticiasID>Noticias</a></li>
      <li><a href=#ayudaID>Ayuda</a></li> */}
    </ul>
    <button type="login" id="botonID" class="botonCompu">INGRESAR</button>
    <button type="submit" className="botonCelu" id="botonCelu">&#9776</button>
    </nav>
   ) 
};

export default Nav;