import React from 'react';
import './App.css';
import './Media.css'
function App() {
  return (
    <>
      <header>
        <section id='section1'>
          <div id='logo'>
            <img src="/images/logo.png" alt="logo axseguros" />
          </div>
          <div id='section1_h1'>
            <h1>Esqueça tudo o que você sabe <br /> sobre seguros</h1>
          </div>
          <div id='section1_p'>
            <p>Rápido. Preço justo. Sem burocracia.</p>
          </div>
          <div id='section1_button'>
            <button type='button'>CONFIRA NOSSOS PREÇOS</button>
          </div>
        </section>
      </header>
      <main>
        <section id='section2'>
          <div id='flex_section2'>
            <div id='section2_h1'>
              <h1>Quem é a AX?</h1>
            </div>
            <div id='section2_p'>
              <p>A AX é uma Seguradora, que tem por objetivo proporcionar aos seus clientes segurança e tranquilidade ao utilizar o seu patrimônio, somando esforços para garantir uma excelente assistência e sempre buscando as melhores parcerias e serviços.</p>
            </div>
          </div>
          <div id='section2_img'>
            <img src="/images/quem_e.png" alt="Equipe AXseguros" />
          </div>
        </section>
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
        <section id='section5'>
          <div id='text_5'>
            <h1>Já está protegido? Vamos ajudá-lo a mudar!</h1>
            <p>As pessoas deixaram essas seguradoras para se juntar à AX:</p>
          </div>
          <div id='circulos'>
            <div id='linha1_circulos'>
              <div id='circulo1'>
                <h1>31%</h1>
                <p></p>
              </div>
              <div id='circulo2'><h1></h1></div>
              <div id='circulo3'></div>
            </div>
            <div id='linha2_circulos'>
              <div id='circulo4'></div>
              <div id='circulo5'></div>
              <div id='circulo6'></div>
            </div>
          </div>
          <div id='section5_btn'>
            <button type='submit'>VERIFICAR PREÇOS E MUDAR</button>
          </div>
        </section>
        <section id='section6'>
          <div id='text_6'>
            <h1>Escritórios pelo <br />Nordeste</h1>
          </div>         
        </section>
      </main>
      <footer>
        <section id='rodape'>
          
        </section>
      </footer>
    </>
  )
}

export default App
