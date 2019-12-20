import React, {Component} from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import {Home} from './components/screens/Home';
import {Project} from './components/screens/Projects';
import { Resume } from './components/screens/Resume';

class App extends Component {
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
    return(
      <div className='main-structure'>
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
        <Router>
          <Switch>

            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/projects'>
              <Project />
            </Route>

            <Route path='/resume'>
              <Resume />
            </Route>

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
