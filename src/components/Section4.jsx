import React from "react";

function Section4() {
    return (
        <section id='section4'>
          <div id='section4_title'>
              <h1>O que está coberto</h1>
              <p>Seja uma dobra de para-lamas ou perda total, nossa equipe e aplicativo estão prontos para ajudar!</p>
          </div>
          <div id='section4_flex'>
            <div id='linha3'>
              <div className='sec_4_coluna'>
                <div className='section4_img'>
                  <img src="/images/placa-de-carro.png" alt="Placa de carro" />
                </div>
                <h2>Se você estiver em um acidente de carro</h2>
                <p>Cobriremos ou recuperaremos os custos para reparar os danos.</p>
              </div>
              <div className='sec_4_coluna'>
                <div className='section4_img'>
                  <img src="/images/pneu-furado.png" alt="Pneu furado" />
                </div>
                <h2>Se você está parado na rodovia</h2>
                <p>Incluímos assistência na estrada para reboques, saltos e muito mais.</p>
              </div>
              <div className='sec_4_coluna'>
                <div className='section4_img'>
                  <img src="/images/relampago.png" alt="Relâmpago" />
                </div>
                <h2>Se o inesperado acontecer</h2>
                <p>Cobriremos danos causados por incêndios, clima, vandalismo e muito mais.</p>
              </div>
            </div>
            <div id='linha4'>
              <div className='sec_4_coluna'>
                <div className='section4_img'>
                  <img src="/images/Group 58.png" alt="Vidro quebrado" />
                </div>
                  <h2>Se o seu vidro estiver danificado</h2>
                  <p>Cobriremos reparos para para-brisas, tetos lunares e muito mais</p>
              </div>
              <div className='sec_4_coluna'>
                <div className='section4_img'>
                  <img src="/images/martelo.png" alt="Martelo" />
                </div>
                  <h2>Se você for processado por responsabilidade</h2>
                  <p>Ajudaremos a cobrir os custos de um advogado para defendê-lo.</p>
              </div>
              <div className='sec_4_coluna'>
                <div className='section4_img'>
                  <img src="/images/ladrao.png" alt="Ladrão" />
                </div>
                  <h2>Se o seu carro for roubado</h2>
                  <p>Vamos cobrir o custo para substituí-lo por um carro novo.</p>
              </div>
            </div>
          </div>
        </section>
    );
}

export default Section4;