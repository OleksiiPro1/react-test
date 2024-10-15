import React, {useState} from "react";
const Counter = () => {
    const [counter, setCounter] = useState({count: 0});
    function increment(dop) {
        setCounter((prev) => {
            return {count: prev.count + 1 + dop};
        });
    }
    function decrement() {
        setCounter((prev) => {
            return {count: prev.count - 1};
        });
    }
    return (
        <div>
            <p>{counter}</p>
            <button onClick={()=>increment(4)}>+1</button>
            <button onClick={decrement}>-1</button>
        </div>
    );
}

export default Counter;