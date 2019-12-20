import React, {Component} from 'react';
import '../styles/Home.css';

export class Home extends Component{


    render(){
        return (
            <>
            <div className='content'>
                <h1>Austin Loza</h1>
                <h2>Software Developer and Machine Learning Specialist</h2>
        
                <div className='mainstuff'>
                    <div className='greeting'>
                        <h3>Hello, I'm Austin. I'm a software dev with experience in 
                        full-stack web development, machine learning, and native app programming 
                        (PC/Android).</h3>
                    </div>
                    <div className='main-content'>
                        Please check out my projects and resume, or use any of my apps.
                    </div>
                
                </div>
        
            </div>            
            </>
            );
    }
}