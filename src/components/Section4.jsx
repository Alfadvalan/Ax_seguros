import React from "react";
import { Link } from "react-router-dom";

function Section4() {
    return (
        <section id='section4'>
          <div id='section4_title'>
              <h1>O que está coberto!</h1>
          </div>
          <div id='section4_flex'>
              <div className='sec_4_coluna'>
                <div className='section4_img'>
                  <img src="/images/colisao.png" alt="" />
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
          <div id="simular_botao">
          <Link to='/PageForm'>
            <button type="submit">Simule seu plano!</button>
          </Link>
          </div>
        </section>
    );
}

export default Section4;