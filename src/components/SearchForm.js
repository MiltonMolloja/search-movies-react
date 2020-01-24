import React, { Component,  } from "react";

const API_KEY = "916d4b3f";
const API_URL = "http://www.omdbapi.com/?";

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
        this.props.onResult(result.Search)
      });
  };

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
        <br></br>
      </form>
      
    );
  }
}
