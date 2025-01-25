import React, { useState, useEffect } from "react";
import "./ArrowDown.css";

const ArrowDown = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000); //3 segundos
    return () => clearTimeout(timer); // Limpa o timeout ao desmontar o componente
  }, []);

  return (
    <footer className={`FooterOne ${visible ? "visible" : "hidden"}`}>
      <img src="/img/arrow-down.png" alt="seta para baixo" className="arrow-icon" />
    </footer>
  );
};

export default ArrowDown;
