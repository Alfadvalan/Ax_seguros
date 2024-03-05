import React from "react";
import { Link } from "react-router-dom";

function Section2() {
    return (
        <section id='section2'>
          <div id='flex_sec2'>
            <div id="conteudo_section2">
              <h1>Um seguro auto mensal,
                  simples e fácil de contratar</h1>
              <p>Seguro por assinatura que você paga mês a
                mês, que te oferece um pacote de benefícios essenciais para proteger o seu veículo.</p>
              <div id="contratar">
                <Link to='/PageForm'>
                  <button type="submit">Quero contratar</button>
                </Link>
              </div>
            </div>
            <div id='section2_img'>
              <img src="images/man.png" alt="" />
            </div>
          </div>
        </section>
    );
}

export default Section2;