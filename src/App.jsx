// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import Pokemon from './Pokemon';
import 'reactjs-popup/dist/index.css';




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
      <h1 className='Title'>POKEMON</h1>
      <p>Click on the pokemon to learn more!</p>
      <div className="dex">
        
        {pokemon.map((pokemon, index) =>
          ( <Pokemon key={index} pokemon={pokemon} />)
          )}
        </div>
    </div>
  );
}

export default App;
