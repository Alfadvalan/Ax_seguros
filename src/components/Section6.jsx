import React from "react";
import ScrollArrow from "./ScrollArrow";

function Section6() {
    return (
        <section id='section6'>
          <div id='text_6'>
            <h1>Escritórios pelo Nordeste</h1>
          </div>      
          <div id='mapa'>
            <iframe src="https://www.google.com/maps/d/embed?mid=1JtTFdwTaocQDsRnf40TUEf2fYVtsBDw&ehbc=2E312F&noprof=1"></iframe>
          </div>
          <ScrollArrow targetSectionId="section1" />
        </section>
    );
}

export default Section6;