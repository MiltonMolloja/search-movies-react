import React, { Component } from "react";

export class ItemMovie extends Component {
  render() {
    const { children } = this.props;
    return (
      <div >
        {!!this.props && (
          <div >
            {Object.keys(children).map(chi => (
              <div <key={chi}>
                {!!children[chi].Year && (
                  <div >
                    <div >
                      <div className="card">
                        <div className="card-image">
                          <figure className="image is-4by3">
                            <img
                              src={children[chi].Poster}
                              alt={children[chi].Title}
                            />
                          </figure>
                        </div>
                        <div className="card-content">
                          <div className="media">
                            <div className="media-left">                              
                            </div>
                            <div className="media-content">
                              <p className="title is-4">{children[chi].Title}</p>
                              <p className="subtitle is-6">{children[chi].Year}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default ItemMovie;
