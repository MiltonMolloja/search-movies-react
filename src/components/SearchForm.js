import React, { Component, Children } from "react";
import { Title } from "./Title";

const API_KEY = "916d4b3f";
const API_URL = "http://www.omdbapi.com/?";

class ItemMovie extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        {!!this.props && (
          <div>              
            {Object.keys(children).map(chi => (
              <div key={chi}>
                {!!children[chi].Year && <div > {children[chi].Title} - {children[chi].Year}</div>}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export class SearchFrom extends Component {
  state = {
    inputMovie: "",
    result: ""
  };

  _handleChange = e => {
    this.setState({ inputMovie: e.target.value });
  };

  _handleSubmit = e => {
    e.preventDefault();
    const { inputMovie } = this.state;
    fetch(API_URL + "apikey=" + API_KEY + "&s=" + inputMovie)
      .then(res => res.json())
      .then(result => {
        this.setState({ result });
      });
  };

  _mapItem () {          
      if (!!this.state.result.Search) {
        return this.state.result.Search.map( obj => (
            <div key={obj.imdbID}>
                <ItemMovie> { obj } </ItemMovie>
            </div>
          ))    
      }      
      return null
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              onChange={this._handleChange}
              type="text"
              placeholder="Find a repository"
            />
          </div>
          <div className="control">
            <button type="submit" className="button is-info">
              Buscar
            </button>
          </div>
        </div>
        { !this.state.result.Search 
            ? <p>Sin Resultados </p>
            : this._mapItem() }        
      </form>
    );
  }
}
