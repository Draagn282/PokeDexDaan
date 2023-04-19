// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import Pokemon from './Pokemon';
import 'reactjs-popup/dist/index.css';

import PocketMonster from "./PocketMonster";
import {Link, BrowserRouter ,Routes, Route} from "react-router-dom";

const App = () => {

  const [pokemon, setPokemon] = useState([]);
  const [pokemonId, setPokemonId] = useState();

  const fetchPokemon = async () => {
    try{
       const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=350&offset=0`)
       const data = await response.json();
       setPokemon(data.results);
    }
    catch{
      alert('i broke my back, ma back is broken')
    }
  }
  useEffect(() => {
    fetchPokemon();
  }, [pokemonId]);

  return (
    <div className="App">
      <div className="dex">
        <BrowserRouter>
        <Routes>
              <Route path="/PocketMonster" element={<PocketMonster/>}/>
        </Routes>
              
              <Link to="/PocketMonster">details</Link>
              <Link to="/App">index</Link>
        </BrowserRouter>
 

          {pokemon.map((pokemon, index) =>
          ( <Pokemon key={index} pokemon={pokemon} />)
          )}
        </div>
    </div>
  );
}

export default App;
