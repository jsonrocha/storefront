import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Callback from './Component/Callback';
import Dashboard from './Component/Dashboard'
import Auth from './Auth/Auth';
import history from './Auth/History';
import SplashPage from "./Component/SplashPage"

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

class App extends Component {
  render() {
    return (
      <Router history={history}> 
      <div className="App">
      <script type="text/javascript" src="node_modules/auth0-js/build/auth0.js"></script>        <header className="App-header">
        <Link to="/"><h1>Log In</h1></Link>
        <Link to="/:dashboard">Dashboard</Link>
        <Link to="/:callback">Callback</Link>
        </header>
        <Switch>
          <Route path="/" exact component={SplashPage}/>
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
