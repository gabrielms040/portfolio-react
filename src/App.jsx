import React from 'react';
import './App.css';
import SectionOne from "./Components/SectionOne";
import SectionTwo from './Components/SectionTwo';
import SectionThree from './Components/SectionThree';
import Header from './Components/Header';

function App() {
  return (
    <div id='main-container' className='animated-gradient'>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}

export default App;
