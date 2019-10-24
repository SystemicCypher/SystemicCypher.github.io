import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
           
      <div className='header'>
        
        <div className='subgrid'>
          <div className='Top'>
            <a href='/'><img src='./syscy-clear.png' id='logo-img' alt='Logo, red and black gear' /></a>
          </div>
          <div className='Bottom'>
            <span> </span>
            <ul>
              <a href='projects'><li>Projects</li></a>
              <a href='resume'><li>Resume</li></a>
              <a href='apps'><li>Web apps</li></a>
            </ul>
          </div>
        </div>

      </div>
      
      <div className='content'>
        
        <h1>Austin Loza</h1>
        <h2>Software Dev and Machine Learning Specialist</h2>

        <div className='mainstuff'>
          <div className='greeting'>
            Hello, I'm Austin. I'm a software dev with skills in 
            full-stack web development, machine learning, and native app programming 
            (PC/Android).
          </div>
          
            <div className='skill' id='projects'>
              
            </div>

            <div className='skill' id='resume'>

            </div>

            <div className='skill' id='webapps'>

            </div>
          
        </div>

      </div>


      <div className='footer'>
        <span>~~</span>
      </div>
      
    </div>
  );
}

export default App;
