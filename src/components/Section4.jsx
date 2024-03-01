import React from "react";

function Section4() {
    return (
        <section id='section4'>
          <div id='section4_title'>
              <h1>O que está coberto!</h1>
              <p>Seja uma dobra de para-lamas ou perda total, nossa equipe e aplicativo estão prontos para ajudar!</p>
          </div>
          <div id='section4_flex'>
            <div id='linha3'>
              <div className='sec_4_coluna'>
                <div className='section4_img'>
                  <img src="" alt="" />
                </div>
                <h2>Se você sofrer uma colisão</h2>
                <p>Recuperamos ou cobriremos os custos para reparar os danos.</p>
              </div>
              <div className='sec_4_coluna'>
                <div className='section4_img'>
                  <img src="" alt="" />
                </div>
                <h2>Se você está parado na rodovia</h2>
                <p>Seu veículo quebrou? Temos assistência 24h, basta apenas ligar.</p>
              </div>
              <div className='sec_4_coluna'>
                <div className='section4_img'>
                  <img src="" alt="" />
                </div>
                <h2>Se o inesperado acontecer</h2>
                <p>Cobriremos danos causados por incêndios, alagamentos, perda parcial e perda total.</p>
              </div>
            </div>
            <div id='linha4'>
              <div className='sec_4_coluna'>
                <div className='section4_img'>
                  <img src="" alt="" />
                </div>
                  <h2>Se o seu vidro danificar</h2>
                  <p>Cobriremos reparos para vidros, retrovisores, para-brisas, lanternas e faróis.</p>
              </div>
              <div className='sec_4_coluna'>
                <div className='section4_img'>
                  <img src="" alt="" />
                </div>
                  <h2>Se você estiver em qualquer lugar do Brasil</h2>
                  <p>Cobertura nacional, norte, sul, leste e oeste. </p>
              </div>
              <div className='sec_4_coluna'>
                <div className='section4_img'>
                  <img src="" alt="" />
                </div>
                  <h2>Se o seu carro for roubado ou furtado</h2>
                  <p>Você será ressarcido em 100% da tabela fipe.</p>
              </div>
            </div>
          </div>
          <div id="simular_botao">
            <button type="submit">Simule seu plano!</button>
          </div>
        </section>
    );
}

export default Section4;