import React,{useEffect,useState} from 'react';

const PokemonApi = () => {
// const [offset, setOffset] = useState(0);
// const [pokemonList, setPokemonList] = useState([]);
const [pokemon, setPokemon] = useState(null);
const [inputValue, setinputValue] = useState('');

// useEffect(() => {
//     function getPokemons() {
//         fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`)
//         .then((res)=>{
//             return res.json()
//         })
//         .then((data)=>{
//             console.log(data);
//             setPokemonList((prev)=>{
//                 return [...prev,...data.results]
//             })
//         })

//     }

//     getPokemons()

// }, [offset]);

function handleInput(e) {
  
    setinputValue(e.target.value)

}

function handleSubmit(e) {
    e.preventDefault()
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                console.log(data);
               setPokemon(data)
            })
            console.log(e.target);
setinputValue('')
}


    return (
        <div>
            <form onSubmit={handleSubmit} action="submit">
            <input onChange={handleInput} value={inputValue} type="color" />
            <button type='submit'>find pokemon</button>
             </form>
          {pokemon && <div>
<p>{pokemon.name}</p>
<img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
           </div>}


        </div>
    );
}

export default PokemonApi;
