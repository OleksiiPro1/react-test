import React, {useState} from 'react';

const Homework = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    function incrementGood() {
        setGood(good + 1);
    }
    function incrementNeutral() {
        setNeutral(neutral + 1);
    }
    function incrementBad() {
        setBad(bad + 1);
    }
    return (
        
        <div>
            <style>{`
        .container {
        margin: 10px;
        }
        `}</style>
            <hr />
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div className="container">
                    <p>{good}</p>
                    <button onClick={incrementGood}>good</button>
                </div>
                <div className="container">
                    <p>{neutral}</p>
                    <button onClick={incrementNeutral}>neutral</button>
                </div>
                <div className="container">
                    <p>{bad}</p>
                    <button onClick={incrementBad}>bad</button>
                </div>  
            </div>
        </div>
    );
}

export default Homework;
