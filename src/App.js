import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import { Title } from "./components/Title";
import { SearchFrom } from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <header>
        <Title>Buscador De Peliculas</Title>
        <div className='SearchForm-wrapper'>
          <SearchFrom/>
        </div>
      </header>
    </div>
  );
}

export default App;
