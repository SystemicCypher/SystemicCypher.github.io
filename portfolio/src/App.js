import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import {Home} from './components/screens/Home';
import {Project} from './components/screens/Projects';

function App() {
  return(
    <>
    <Router>
      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/projects'>
          <Project />
        </Route>

        <Route path='/resume'>
          
        </Route>

      </Switch>
    </Router>
    </>
  );
}

export default App;
