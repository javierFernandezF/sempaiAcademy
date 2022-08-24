import iconoMano from "../Materiales/icono-mano.png";
import iconoMas from "../Materiales/icono-mas.png"

const Oportunidades = () => {
    return (
        <div className="oportunidades">
        <div className="titulo-oportunidades">
          Encuentra las mejores oprtunidades
        </div>
        <p className="p-oportunidades">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi earum
          rem cum porro quam fuga, non repellat sunt nostrum suscipit aliquid ab
          labore voluptates beatae quod est saepe ducimus eum.
        </p>

        <div className="caja-oportunidades">
          <button className="caja rojo">
            <img
              className="icono icono-rojo"
              src={iconoMano}
              alt="mano"
            />
            <img className="mas" src={iconoMas} alt="mas" />
            <p>Ser voluntario</p>
          </button>
          <button className="caja amarillo">
            <img
              className="icono"
              src="/Materiales/icono-mano-corazon.png"
              alt="mano"
            />
            <img className="mas" src="/Materiales/icono-mas.png" alt="mas" />
            <p>Donar</p>
          </button>
          <button className="caja verde">
            <img
              className="icono"
              src="/Materiales/icono-reciclar.png"
              alt="mano"
            />
            <img className="mas" src="/Materiales/icono-mas.png" alt="mas" />
            <p>Reciclar</p>
          </button>
          <button className="caja celeste">
            <img className="icono" src="/Materiales/icono-maletin.png" alt="mano" />
            <img
              className="mas-llamados"
              src="/Materiales/icono-mas.png"
              alt="mas"
            />
            <p className="p-llamados">Llamados<br />laborales</p>
          </button>
        </div>
        </div>
    )
};

export default Oportunidades;