import React from "react";

function Section7() {
    return (
        <section id='rodape'>
          <div id="container1-rodape-responsivo">
              <div id='logo_rodape_responsiva'> 
                <img src="/images/logo.png" alt="logo AX" />
              </div>
              <div className="info_text_responsivo">
                <p>A AX Seguros é uma Representante de Seguros da Split Risk, que possui autorização da Superintendência de Seguros Privados (SUSEP) para operar,  conforme processo da Susep (Sandbox Regulatório) nº15414.618377/2020-87.</p>
              </div>
            </div>
          <div id='flex_rodape'>
            <div id="container1-rodape">
              <div id='logo_rodape'> 
                <img src="/images/logo.png" alt="logo AX" />
              </div>
              <div className="info_text">
                <p>A AX Seguros é uma Representante de Seguros da Split Risk, que possui autorização da Superintendência de Seguros Privados (SUSEP) para operar,  conforme processo da Susep (Sandbox Regulatório) nº15414.618377/2020-87.</p>
              </div>
            </div>    
            <div id='div_azul'></div>
            <div id="container-info">
              <div id="endereco">
                <h2>Endereço e contato</h2>
                <p>R. Artur Antônio da Silva - <br />Universitário 445, Caruaru - PE, <br />55016-445 </p>
                <p>Telefone: 0800 042 1841</p>
                
              </div>
              <div id='ouvidoria'>
                <h2>Ouvidoria</h2>
                <p>ouvidoria@axseguro.com</p> 
              </div>
            </div>
            <div id="container-redes">
              <h2>Nossas redes</h2>
              <div id="img-redes">
                <a href=""><img src="/images/facebook.png" alt="facebook" /></a>
                <a href="https://www.instagram.com/ax.seguros?igsh=dXIzM3l3azBpNXZh"><img src="/images/instagram.png" alt="instagram" /></a>
              </div>
              <p>&copy; Grupo Alfa. Todos os direitos reservados.</p>
            </div>
          </div>
        </section>
    );
}

export default Section7;