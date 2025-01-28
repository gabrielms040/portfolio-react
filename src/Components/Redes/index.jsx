import React from "react";
import "./Redes.css";

const handleRedirect = (url) => {
  window.open(url, "_blank");
}

const Footer = () => {
  return (
    <footer className='Footer'>
      <button onClick={() => handleRedirect("https://github.com/gabrielms040")}>
        <span className="social-text">GitHub</span>
        <img src="/img/github.png" alt="GitHub" className="social-icon" />
      </button>
      <button onClick={() => handleRedirect("https://www.linkedin.com/in/gabriel-morais123/")}>
        <span className="social-text">LinkedIn</span>
        <img src="/img/linkedin.png" alt="LinkedIn" className="social-icon" />
      </button>
      <button onClick={() => handleRedirect("https://www.instagram.com/gabriel87.6/")}>
        <span className="social-text">Instagram</span>
        <img src="/img/instagram.png" alt="Instagram" className="social-icon" />
      </button>
      <button onClick={() => handleRedirect("https://w.app/DQI4cC")}>
        <span className="social-text">WhatsApp</span>
        <img src="/img/whatsapp.png" alt="WhatsApp" className="social-icon" />
      </button>
    </footer>
  );
}

export default Footer;
