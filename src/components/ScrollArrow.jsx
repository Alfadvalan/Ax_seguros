import React, { useEffect } from "react";
import ArrowIcon from "./ArrowIcon";

function ScrollArrow({ targetSectionId }) {
  useEffect(() => {
    const arrowElement = document.getElementById("scroll-arrow");

    const handleScroll = () => {
        console.log("Scrolling...");
        const targetSection = document.getElementById(targetSectionId);
        const arrowElement = document.getElementById("scroll-arrow");
    
        if (targetSection && arrowElement) {
            if (targetSectionId === "Section1" && window.scrollY === 0) {
                arrowElement.classList.remove("show");
            } else if (targetSection.getBoundingClientRect().top < window.innerHeight / 2) {
                arrowElement.classList.add("show");
            } else {
                arrowElement.classList.remove("show");
            }
        }
    };
  
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
}, [targetSectionId]);

  const scrollToSection = () => {
    const targetSection = document.getElementById(targetSectionId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="scroll-arrow right" id="scroll-arrow" onClick={scrollToSection}>
      <ArrowIcon />
    </div>
  );
}

export default ScrollArrow;
