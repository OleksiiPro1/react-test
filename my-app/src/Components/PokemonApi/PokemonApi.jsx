import React,{useEffect,useState} from 'react';

const PokemonApi = () => {
const [offset, setOffset] = useState(0);
const [pokemonList, setPokemonList] = useState([]);


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

function askOlkesii(params) {
    console.log('oleksii');
}
askOlkesii()

useEffect(() => {
    console.log('useefect');
   
}, []);

useEffect(() => {

    console.log('pokemon');

}, [pokemonList]);


useEffect(() => {
    
    return () => {
     console.log('компонент розібраний');   
    };
}, []);

    return (
        <div>
           <ul>
               {pokemonList.map((pokemon)=>{
                   return (<li>{pokemon.name}</li>)
               })}
           </ul>

<button onClick={()=>{
                setOffset(offset+10)
            }}>next page</button>
        </div>
    );
}

export default PokemonApi;
