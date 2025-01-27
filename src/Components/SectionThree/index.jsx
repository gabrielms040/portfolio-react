import React, { Component } from "react";
import Slider from "react-slick";
import "./SectionThree.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const handleRedirect = (url) => {
  window.open(url, "_blank");
}


const SectionThree = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='SectionThree' >
      <div className='projects'>
        <h2>PROJETOS E APLICAÇÕES</h2>        
      </div>
      <div className="slider-container">
      <Slider {...settings}>
        {data.map((props)=> ( 
        <div className='cardProject'>
          <h5>{props.title}</h5>
          <p>{props.contentCard}</p>
          <div className='buttons'>
          <button onClick={() => handleRedirect(props.linkDeploy)}>
           <span>Deploy</span>
           </button> 
           <button onClick={() => handleRedirect(props.LinkCode)}>
           <span>Code</span>
           </button>
          </div>
        </div>
        ))}
      </Slider>
      </div>
    </div>
  )
}

const data = [
  {
    title:"TaskList",
    contentCard:"Aplicação simples criada com HTML, CSS e JavaScript, que possibilita adicionar, concluir e excluir tarefas. Os dados são armazenados no localStorage, dispensando servidores externos.",
    linkDeploy:"https://lista-de-tarefas-js.vercel.app",
    LinkCode:"https://github.com/gabrielms040/ListaDeTarefas.js"
  },
  {
    title:"ReactCards",
    contentCard:"Projeto que permite cadastrar colaboradores com nome, cargo, imagem e time. Desenvolvido para criar cards interativos e personalizados que exibem essas informações de forma visual.",
    linkDeploy:"https://projeto-react-five-xi.vercel.app",
    LinkCode:"https://github.com/gabrielms040/projeto-react"
  },  
  {
    title:"CoinTax",
    contentCard:"É uma ferramenta prática feita em Python com PySimpleGUI, permitindo a conversão entre moedas em tempo real.Ideal para conversões rápidas, utiliza uma API atualizada e é simples de usar.",
    linkDeploy:"https://github.com/gabrielms040/ConversorDeMoeda.py",
    LinkCode:"https://github.com/gabrielms040/ConversorDeMoeda.py"
  },
]

export default SectionThree