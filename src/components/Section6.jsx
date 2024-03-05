import React from "react";
import ScrollArrow from "./ScrollArrow";

function Section6() {
    return (
        <section id='section6'>
          <div id="container_section6">
            <div id='container-text'>
              <h1>Fale com a gente!</h1>
              <p>Envie uma mensagem no nosso Whatsapp.</p>
              <div id='contato'>
                <a href="https://bit.ly/3Sk88LS">
                  <button>Entre em contato!</button>
                </a>
              </div>
            </div>
            <div id="img_whatsapp">
              <img src="/images/whatsappmaior.png" alt="ícone Whatsapp" />
            </div>      
          </div>
          <ScrollArrow targetSectionId="section1" />
        </section>
    );
}

export default Section6;