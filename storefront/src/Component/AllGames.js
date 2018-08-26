import React, { Component } from 'react'
import games from '../Data/games.json'
import {Link} from 'react-router-dom';

 class AllGames extends Component {
  render() {
        return (
            <div>
              <section>
                  {
                      games.photos.map((photo, i) => {
                          return <Link>
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

export default AllGames;
