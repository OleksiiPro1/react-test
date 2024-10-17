import React, {useState} from "react";
const Counter = () => {
    const [counter, setCounter] = useState([]);
    const [inputValue, setinputValue] = useState('');
    
console.log(counter);
function handleChange(e) {
    e.preventDefault()
    setinputValue(e.target.value)

}

    function increment() {
        setCounter((prev) => {
            return [...prev,true]
        });
    }
    function decrement() {
        setCounter((prev) => {
            console.log(prev);
            return [...counter,false]
        });
    }
    return (
        <div>
            <input onChange={handleChange} value={inputValue} type="text" />
            <button onClick={()=>{
                setCounter((prev) => {
                    return [...prev,inputValue]
                });
                setinputValue('')
            }}>add</button>
            <p>{counter.dop}</p>
            <button onClick={increment}>True</button>
            <button onClick={decrement}>False</button>
        </div>
    );
}

export default Counter;


