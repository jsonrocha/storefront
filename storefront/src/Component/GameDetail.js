import React, { Component } from 'react'
import games from '../Data/games.json'

 class GameDetail extends Component {
  render() {
      const _category = this.props.match.params.category;
      const _index = this.props.match.params.index;
      const _photoData = games[_category].photos[_index]

    return (
      <div className="image-card">
       <span>
        <h1 className="price">
        $29.99 
        </h1>
        <div className="spanbutton">
        <button>
        Add to Cart
        </button>
        </div>
        </span>
        <header>{_photoData.title}</header>
        <span className="price info">{_photoData.info}</span>
        <img className="game" src={_photoData.imageURL} alt={_photoData.title} />
      </div>
    )
  }
}

export default GameDetail;