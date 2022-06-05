import React from "react";
import github from "./media/github.png";
import linkedin from "./media/linkedin.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div>Proyecto React - Coderhouse</div>
      <div>
        <p>
          Copyright &copy; - 2022 &#9830;<span> Maximiliano Cordone</span>
        </p>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/maxi-cordone/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="linkedin" src={linkedin} alt="icono facebook" />
        </a>
        <a
          href="https://github.com/MaxiBoolean/PalAfter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="github" src={github} alt="icono instagram" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
