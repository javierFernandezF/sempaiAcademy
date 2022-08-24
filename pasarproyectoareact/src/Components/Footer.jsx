import facebook from "../Materiales/Facebook.png";
import twitter from "../Materiales/twitter.png";
import instagram from "../Materiales/instagram.png"

const Footer = () => {
    return (
        <footer>
        <div className="lineafooter"></div>
        <div className="navfooter">
          <div className="logofooter"><img src="/Materiales/logo-blanco.png" alt="logo-blanco"/></div>
          <div className="nosotrosfooter">
              <ul>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Noticias</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Terminos y condiciones</a></li>
              </ul>
        </div>
          <div className="seguinosfooter">
            <p>Seguinos!</p>
            <ul>
              <li><a href="#"><img src={facebook} alt="logo facebook" style="height: 2vh; width: 2vh;"/></a></li>
              <li><a href="#"><img src={twitter} alt="logo twitter" style="height: 2vh; width: 2vh;"/></a></li>
              <li><a href="#"><img src={instagram} alt="logo instagram" style="height: 2vh; width: 2vh;"/></a></li>
            </ul>
          </div>
        </div>
        <div className="copyright"><p>copyright</p></div>
      </footer> 

    )
};

export default Footer;