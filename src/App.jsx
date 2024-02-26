import React from 'react';
import './styles/Section1.css'
import './styles/Section2.css';
import './styles/Section3.css';
import './styles/Section4.css';
import './styles/Section5.css';
import './styles/Section6.css';
import './styles/Section7.css';
import './styles/App.css';
import './styles/Responsividade.css';
import './styles/Navbar.css';
import './styles/ArrowIcon.css';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <header>
        <Navbar />
        <Section1 />
      </header>
      <main>
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </main>
      <footer>
        <Section7 />
      </footer>
    </>
  )
}

export default App;
