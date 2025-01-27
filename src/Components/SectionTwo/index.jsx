import React from 'react';
import './SectionTwo.css';
import ArrowDown from '../ArrowDown';

const SectionTwo = () => {
  return (
    <div className='SectionTwo'> 
        <h2 className='experiences'>EXPERIÊNCIAS</h2>
        <div className='middle'>
          <div className='card frontEnd'>
            <h2>Front-End</h2>
            <div className='topics'>
              <p>• React</p>
              <p>• JavaScript</p>
              <p>• HTML</p>
              <p>• CSS</p>
            </div>
          </div>
          <div className='card backEnd'>
            <h2>Back-End</h2>
            <div className='topics'>
              <p>• Node.js</p>
              <p>• PostgreSQL</p>
              <p>• Python</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default SectionTwo;
