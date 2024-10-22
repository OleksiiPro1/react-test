import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Counter from './Components/Counter/Counter';
import Homework from './Components/Homework';
import PokemonApi from './Components/PokemonApi/PokemonApi';

function App() {
  const [state, setstate] = useState(true);
  return (
    <div className="App">
      {/* <Counter />
      <Homework /> */}
      {state && <PokemonApi/>}
      <button onClick={()=>{
setstate(false)
      }}>click delete</button>
    </div>
  );
}

export default App;
