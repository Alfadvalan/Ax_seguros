import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {

  useEffect(() => {
      const halfPageHeight = document.documentElement.scrollHeight / 10;
      //let isPastHalfPage = false;
  
      const handleScroll = () => {
        const scrollY = window.scrollY;
  
        if (scrollY > halfPageHeight) {
          navbar.classList.add("show");
        } else {
          navbar.classList.remove("show");
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

return (
  <div className="navbar" id="navbar">
    <nav>
      <div id="logo_navbar">
          <img src="/images/logo.png" alt="Logo AX Seguros" />
      </div>
      
          <Link to='/PageForm'>
            <div id="button_navbar">
                <button>Proteja seu veículo</button>
            </div>
          </Link>
      
    </nav>
  </div>
);
}

export default Navbar;