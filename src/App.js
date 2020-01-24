import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import { Title } from "./components/Title";
import { ItemMovie } from "./components/ItemMovie+";
import { SearchFrom } from "./components/SearchForm";

class App extends Component {
  state = {
    results: []
  };

  _handleResult = results => {
    this.setState(results === undefined ? { results: [] } : { results });
  };

  _mapItem() {
    if (!!this.state.results) {
      return this.state.results.map(obj => (
        <div className='cardDosColumn' key={obj.imdbID} >
          <ItemMovie> {obj} </ItemMovie> 
        </div>
      ));
    }
    return null;
  }

  render() {
    return (
      <div className="App">
        <header>
          <Title>Buscador De Peliculas</Title>
          <div  className="SearchForm-wrapper">
            <SearchFrom onResult={this._handleResult} />
          </div>
          {this.state.results.length === 0 ? (
            <p>Sin Resultados </p>
          ) : (            
            this._mapItem()
          )}
        </header>
      </div>
    );
  }
}

export default App;
