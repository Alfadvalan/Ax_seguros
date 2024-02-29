import React from "react";
import { Link } from 'react-router-dom';
import PageForm from './PageForm';

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
              <Link to={'./PageForm'}>
                  <button type='button'>CONFIRA NOSSOS PREÇOS</button>
              </Link>
            </div>
          </div>
        </section>
    );
}

export default Section1;