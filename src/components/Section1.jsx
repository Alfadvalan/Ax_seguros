import React from "react";

function Section1(){
    return (
        <section id='section1'>
          <div id='logo'>
            <img src="/images/logo.png" alt="logo axseguros" />
          </div>
          <div id='content_section1'>
            <div id='section1_h1'>
              <h1>Esqueça tudo o que você sabe <br />sobre seguros</h1>
            </div>
            <div id='section1_p'>
              <p>Rápido. Preço justo. Sem burocracia.</p>
            </div>
            <div id='section1_button'>
              <a href="https://lp.alfacb.org.br/">
                <button type='button'>CONFIRA NOSSOS PREÇOS</button>
              </a>
            </div>
          </div>
        </section>
    );
}

export default Section1;