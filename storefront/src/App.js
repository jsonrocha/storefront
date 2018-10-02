import React, { Component } from 'react';
import './App.css';
import Home from './Component/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Callback from './Component/Callback';
import Dashboard from './Component/Dashboard'

class App extends Component {
  render() {
    return (
      <Router> 
      <div className="App">
        <header className="App-header">
        <h1>Home</h1>
        </header>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/:callback" render ={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>
          <Route path="/:dashboard" exact component={Dashboard}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
