const Contacto = () => {
    return (
         <div className="contacto" id="ayudaID">
            <div className="fotocontacto"></div>
            <div className="inputscontacto">
            <div className="row1contacto"><h2>Contacto</h2></div>
             <div className="row2col1contacto">
            <p >Texto dato</p>
            <input  type="text" placeholder=" Dato a completar." />
            <p>Texto dato</p>
            <input  type="text" placeholder=" Dato a completar." />
            </div>
            <div className="row2col2contacto">
            <p>Mensaje</p>
            <textarea placeholder=" Escriba su mensaje." className="mensajecontacto"></textarea>
             </div>
            <div className="row3contacto"><button className="buttoncontacto">ENVIAR</button>
            </div>
        </div>
      </div> 

    )
};

export default Contacto;