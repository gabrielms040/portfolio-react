import { useState } from "react"
import "./SectionFour.css"
import emailJs from "@emailjs/browser"
import Footer from "../Redes"

const SectionFour = (e) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e){
    e.preventDefault(); 

    if(name === "" || email === "" || message === ""){
      alert("Preencha todos os campos");
      return;
    }

  const templateParams = {
    from_name: name,
    message: message,
    email:email
  }

emailJs.send("service_8k2nqce", "template_x6e5lvg", templateParams,"UcEHBzRrDoJBSLb2B")
.then(() => {
setName("")
setEmail("")
setMessage("")
})
  }
  return (
    <div className="SectionFour">
       <div className='contacts'>
        <h2>CONTATOS</h2>        
      </div>
      <h1 className="title">EMAIL</h1>
      <div className="contentFour">

      <form className="form" onSubmit={sendEmail}>
        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Enviar" />
      </form>
      </div>
      <Footer/>
    </div>
  );
}


export default SectionFour