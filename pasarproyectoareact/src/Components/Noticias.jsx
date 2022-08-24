const Noticias = () => {
    return (
        <div className="noticias" id="NoticiasID">
        <div className="titulo-noticia-principal">Noticias</div>
        <a className="noticias-a" href="">ver todos</a>
        <div className="grid-conteiner">
        <div className="tarjeta">
          <div className="foto1"></div>
          <div className="info-noticias">
          <div className="fechatiempo">
            <div className="fecha"><div class="calendario"></div>1/1/2001</div>
            <div className="tiempo"><div class="reloj"></div> 4min</div>
          </div>
          <div className="titulo-noticia">Fundapaas abre nuevo centro</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Recusandae dolorum id eos pariatur fugit rerum maiores culpa
             quam numquam distinctio!</p>
          <div className="vermas">ver mas</div>
        </div>
        </div>
        <div className="tarjeta">
          <div className="foto2"></div>
          <div className="info-noticias">
          <div className="fechatiempo">
            <div className="fecha"><div class="calendario"></div>1/1/2001</div>
            <div className="tiempo"><div class="reloj"></div> 4min</div>
          </div>
          <div className="titulo-noticia">Direct TV y Techo inaguraron </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Recusandae dolorum id eos pariatur fugit rerum maiores culpa
             quam numquam distinctio!</p>
          <div className="vermas">ver mas</div>
        </div>
        </div>
        <div className="tarjeta">
          <div className="foto3"></div>
          <div className="info-noticias">
          <div className="fechatiempo">
            <div className="fecha"><div className="calendario"></div>1/1/2001</div>
            <div className="tiempo"><div className="reloj"></div> 4min</div>
          </div>
          <div className="titulo-noticia">Jornada de voluntariados</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Recusandae dolorum id eos pariatur fugit rerum maiores culpa
             quam numquam distinctio!</p>
          <div className="vermas">ver mas</div>
        </div>
        </div>
        <div className="tarjeta">
          <div className="foto4"></div>
          <div className="info-noticias">
          <div className="fechatiempo">
            <div className="fecha"><div class="calendario"></div>1/1/2001</div>
            <div className="tiempo"><div class="reloj"></div> 4min</div>
          </div>
          <div class="titulo-noticia">Lanzamiento de plan tu techo</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Recusandae dolorum id eos pariatur fugit rerum maiores culpa
             quam numquam distinctio!</p>
          <div class="vermas">ver mas</div>
        </div>
        
        </div>
        <div class="puntos">...</div>


        </div>
        </div>
    )
};

export default Noticias;