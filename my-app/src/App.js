import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Counter from './Components/Counter/Counter';
import Homework from './Components/Homework';
import PokemonApi from './Components/PokemonApi/PokemonApi';
import Store from './Components/Store/Store';
import Contacts from './Components/Contacts/Contacts';

function App() {
  const [state, setstate] = useState(true);
  return (
    <div className="App">
      <Store />
      {/* <Counter />
      <Homework /> */}
   {/* <PokemonApi/> */}
   {/* <Contacts /> */}
      {/* <button onClick={()=>{
setstate(false)
      }}>click delete</button> */}

    </div>
  );
}

export default App;
