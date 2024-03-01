import React from "react";

function Section3() {
    return (
        <section id='section3'>
          <div className='section3_title'>
            <h1>Um novo modelo de seguro auto</h1>
          </div>
          <div id='container'>
            <div id='linha1'>
              <div id='elemento1'>
                <div className='background_img'>
                  <img src="/images/smartphone.png" alt="Atendimento" />
                </div>
                <div className='section3_text'>
                  <h2 id='elemento1_h2'>Para Quem?</h2>
                  <p>Para todos os tipos de pessoas,
                    uso particular e para fins comerciais,
                    Seja você, motorista de APP, frotas, taxistas.</p>
                </div>
              </div>
              <div id='elemento2'>
                <div className='background_img'>
                  <img src="/images/volante.png" alt="Volante" />
                </div>
                <div className='section3_text'>
                  <h2 id='elemento2_h2'>Quais Veículos?</h2>
                  <p>Automóveis e motocicletas nacionais de até R$ 150 mil. </p> 
                </div>
              </div>
              <div id='elemento3'>
                <div className='background_img'>
                  <img src="/images/vaso-de-flores.png" alt="Planta" />
                </div>
                <div className='section3_text'>
                  <h2 id='elemento3_h2'>Do Seu Jeito!</h2>
                  <p>Você escolhe as assistências que precisa e que cabe no seu dia, ou planos com valor fixo. Adicione ou remova serviços de acordo com seu bolso</p>
                </div>
              </div>
            </div>
          </div>
          <div id="fazer_parte_botao">
            <button type="submit">Faça parte da AX!</button>
          </div>
        </section>
    );
}

export default Section3;