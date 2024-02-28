import React from "react";

function Section7() {
    return (
        <section id='rodape'>
          <div id='logo_responsiva'><img src="/images/logo-preto-e-branco.png" alt="logo AX" /></div>
          <div id='flex_rodape'>
            <div id='logo_rodape'> 
              <img src="/images/logo-preto-e-branco.png" alt="logo AX" />
            </div>
            <div id='sobre'>
              <h2>Sobre</h2>
              <p>CNPJ: 36.117.103/0001-83</p>
              <a href="">Política de Privacidade</a>
              <a href="">Termos</a>
            </div>
            <div id="local">
              <h2>Local</h2>
              <p>R. Artur Antônio da Silva - <br />Universitário 445, Caruaru - PE, <br />55016-445</p>
              <p>(81)98545-6525</p>
            </div>
            <div id='div_branca'></div>
            <div id="redes">
              <h2>Redes</h2>
              <a href=""><img src="/images/twitter.png" alt="twitter" /></a>
              <a href=""><img src="/images/facebook.png" alt="facebook" /></a>
              <a href="https://www.instagram.com/ax.seguros?igsh=dXIzM3l3azBpNXZh"><img src="/images/instagram.png" alt="instagram" /></a>
              <a href=""><img src="/images/youtube.png" alt="youtube" /></a>
              <p>&copy; Grupo Alfa. Todos os direitos reservados.</p>
            </div>
          </div>
        </section>
    );
}

export default Section7;