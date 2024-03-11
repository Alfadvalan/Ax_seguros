import React from "react";
import { Link } from 'react-router-dom';

function Section1(){

    return (
        <section id='section1'>
          <div id='logos'>
            <img src="/images/logo3.png" alt="logo axseguros" id="logo_ax"/>
            <img src="/images/susep.png" alt="logo Susep" id="logo_susep"/>
          </div>
          <div id='content_section1'>
            <div id='section1_h1'>
              <h1>Esqueça tudo o que você sabe sobre <span>seguros!</span></h1>
            </div>
            <div id='section1_p'>
              <p>Conheça AX, {/*<div id="logo_metade"><img src="images/logo-ax-metade.png" alt="" /></div>*/} o seu seguro digital</p>              
            </div>
            <div id='section1_button'>
              <Link to='/PageForm' >
                  <button type='button'>Cotação em 1 minuto!</button>
              </Link>
            </div>
          </div>
        </section>
    );
}

export default Section1;