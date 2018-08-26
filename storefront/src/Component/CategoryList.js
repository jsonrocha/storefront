import React, { Component } from 'react'
import games from '../Data/games.json'
import {Link} from 'react-router-dom'


 class CategoryList extends Component {
 
    componentDidMount () {
        console.log({ data: games, keys: Object.keys(games) })
    }
  
  render() {
    return (
      <div className="body">

      {Object.keys(games).map(( gameKey, i ) => {
           return <div className="image-card" key={i}>
           <header><Link to={`/${gameKey}`}>{games[gameKey].title}</Link></header>
           <p>{games[gameKey].description}</p>
           <img className="game" src={games[gameKey].photos[0].imageURL} alt={games[gameKey].photos[0].title}></img>
         </div>
      })}
      </div>
    );
  }
}

export default CategoryList;
