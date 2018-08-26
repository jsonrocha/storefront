import React, { Component } from 'react'
import games from '../Data/games.json'
import {Link} from 'react-router-dom';

 class GameList extends Component {
  render() {
      if (!games[this.props.match.params.category]){
          return <h3>Nothing was found...</h3>
      } else {
        return (
            <div>
              <header>{games[this.props.match.params.category].title}</header>
              <p>{games[this.props.match.params.category].description}</p>
              <section>
                  {
                      games[this.props.match.params.category].photos.map((photo, i) => {
                          return <Link to={`/${this.props.match.params.category}/${i}`}>
                          <h1>{photo.title}</h1>
                          <img className="game" src={photo.imageURL} alt={photo.title} />
                          </Link>
                      })
                  }
                  </section>
            </div>
          );
      }
  }
}

export default GameList;
