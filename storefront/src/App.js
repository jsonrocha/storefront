import React, { Component } from 'react';
import './App.css';
import CategoryList from './Component/CategoryList';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import GameList from './Component/GameList';
import AllGames from './Component/AllGames';
import GameDetail from './Component/GameDetail'

class App extends Component {
  render() {
    return (
      <Router> 
      <div className="App">
        <header className="App-header">
        <img src="https://i.scdn.co/image/49f64d0079acea59cd65a49688f7cfba673714d1"></img>
        </header>
        <Switch>
          <Route path="/" exact component={CategoryList}/>
          <Route path="/:category" exact component={GameList}/>
          <Route path="/:category/:index" exact component={GameDetail}/>
          <Route path="/:index" exact component ={AllGames}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
