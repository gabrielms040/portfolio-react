import "./Header.css"

const handleRedirect = (url) => {
  window.open(url, "_blank");
}


const Header = () => {
  return (
    <header className='header'>
   <button onClick={() => handleRedirect("https://github.com/gabrielms040")}> GitHub <img src="/img/github.png" alt="img github" /> </button>
   <button onClick={() => handleRedirect("https://www.linkedin.com/in/gabriel-morais123/")}> Linkedin <img src="/img/linkedin.png" alt="img LinkedinInstagram" /> </button>
   <button onClick={() => handleRedirect("https://www.instagram.com/gabriel87.6/")}> Instagram <img src="/img/instagram.png" alt="img Instagram" /> </button>
   <button onClick={() => handleRedirect("https://w.app/DQI4cC")}> Whatsapp <img src="/img/whatsapp.png" alt="img Whatsapp" /> </button>
    
    </header>
  )
}

export default Header