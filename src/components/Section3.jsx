import React from "react";

function Section3() {
    return (
        <section id='section3'>
          <div className='section3_title'>
            <h1>Um novo modelo de seguro auto</h1>
            <p id='section3_p'>Preços incríveis. Assinatura mensal.</p>
          </div>
          <div id='container'>
            <div id='linha1'>
              <div id='elemento1'>
                <div className='background_img'>
                  <img src="/images/smartphone.png" alt="Atendimento" />
                </div>
                <div className='section3_text'>
                  <h2 id='elemento1_h2'>Resolução de sinistros super rápida</h2>
                  <p>Teremos detalhes adicionais para nos ajudar a lidar com sua reclamação rapidamente.</p>
                </div>
              </div>
              <div id='elemento2'>
                <div className='background_img'>
                  <img src="/images/volante.png" alt="Volante" />
                </div>
                <div className='section3_text'>
                  <h2 id='elemento2_h2'>Preços justos, com base em como você dirige</h2>
                  <p>Obtenha um desconto e ganhe um prêmio menor à medida que dirige melhor.</p> 
                </div>
              </div>
              <div id='elemento3'>
                <div className='background_img'>
                  <img src="/images/vaso-de-flores.png" alt="Planta" />
                </div>
                <div className='section3_text'>
                  <h2 id='elemento3_h2'>Vamos plantar árvores para limpar depois do seu carro!</h2>
                  <p>Deixe-nos reduzir a pegada de carbono do seu carro plantando árvores.</p>
                </div>
              </div>
            </div>
            <div id='linha2'>
              <div id='elemento4'>
                <div className='background_img'>
                  <img src="/images/sirenes.png" alt="Sirene" />
                </div>
                <div className='section3_text'>
                  <h2 id='elemento4_h2'>Assistência emergencial em caso de colisão</h2>
                  <p>Saberemos se você sofreu um acidente e obteremos a ajuda de que precisa.</p>
                </div>
              </div>
              <div id='elemento5'>
                <div className='background_img'>
                  <img src="images/gancho.png" alt="Gancho" />
                </div>
                <div className='section3_text'>
                  <h2 id='elemento5_h2'>Assistência gratuita na estrada</h2>
                  <p>Rebocadores, partidas de salto, trocas de pneus, e guincho - em nós!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}

export default Section3;