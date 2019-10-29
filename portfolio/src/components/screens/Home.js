import React, {Component} from 'react';

export class Home extends Component{
    constructor(props){
        super(props);
        this.state = {width : 0, height : 0};
        this.winsizeChange = this.winsizeChange.bind(this);
    }

    componentDidMount(){
        window.addEventListener('resize', this.winsizeChange);
        this.setState({width : window.innerWidth, height : window.innerHeight});
    }

    winsizeChange(e){
        this.setState({width : window.innerWidth, height : window.innerHeight});
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.winsizeChange);
    }

    render(){
        return (
            <div className="main-structure">
                
            <div className='header'>
                
                <div className='subgrid'>
                    <div className='Top'>
                        <a href='/'><img src='./syscy-clear.png' id='logo-img' alt='Logo, red and black gear' /></a>
                    </div>
                    <div className='Bottom'>
                        {
                        (this.state.width > 1200) ?
                        <>
                        <ul>
                        <a href='projects'><li>Projects</li></a>
                        <a href='resume'><li>Resume</li></a>
                        <a href='apps'><li>Web apps</li></a>
                        </ul>
                        </>
                        :
                        <>
                        <input type='checkbox' id='menu' />
                            <span className='ham'> </span>
                            <span className='ham'> </span>
                            <span className='ham'> </span>
                        </>
                        }
                    </div>
                    
                </div>
        
            </div>
            
            <div className='content'>
                
                <h1>Austin Loza</h1>
                <h2>Software Dev and Machine Learning Specialist</h2>
        
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
        
            
            </div>
            );
    }
}