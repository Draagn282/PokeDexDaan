import { useState, useEffect } from 'react';
import './Pokemon.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



const Pokemon = ({pokemon}) => {
    //states
    const [pokemonData, setPokemonData] = useState({})
    
    //fetch functie
    const fetchPokemon = () => {
        fetch(pokemon.url)
        .then((response) => {
            return response.json();

        })
        .then((data) => {
            setPokemonData(data);
        })
    }
    //useeffect
    useEffect(() => {
        fetchPokemon();
    }, []);
    return(
        <div className="pokemon_cube">
            <Popup trigger={<div className="cube_image">{pokemonData && <img src={pokemonData?.sprites?.front_default}/>}</div>}>
                <div className='popup_content_custom'> 
                <p>Shiny version: </p><img src={[pokemonData?.sprites?.front_shiny]} alt="Shiny pokemon"/> 
                <p>Experiance: {[pokemonData?.base_experience]}</p> 
                <p className="text-1xl">PKMN Number: {[pokemonData?.order]}</p>
                <p>Weight: {[pokemonData?.weight]}</p>
                </div>

            </Popup>            
            <div className="cube_name">
                <p className="text-red">{[pokemonData.name]}</p></div>

        </div> 
    )
}
export default Pokemon;