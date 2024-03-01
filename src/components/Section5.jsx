import React from "react";
import { Link } from "react-router-dom";

function Section5() {
    return (
        <section id='section5'>
          <div id='text_5'>
            <h1>Já está protegido? Vamos ajudá-lo a mudar!</h1>
            <p>As pessoas deixaram essas seguradoras para se juntar à AX:</p>
          </div>
          <div id='circulos'>
            <img className='imagem_circulo' src="/images/circulos2.png" alt="" />
          </div>
          <Link to='/PageForm'>
            <div id='section5_btn'>
              <button type='submit'>VERIFICAR PREÇOS E MUDAR</button>
            </div>
          </Link>
          
        </section>
    );
}

export default Section5;