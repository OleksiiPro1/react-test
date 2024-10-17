import React, {useState} from 'react';

const Homework = () => {
const [feedBack, setFeedBack] = useState({
    bad:0,
    neutral:0,
    good:0
});


const obj = {
    a:1,
    b:2
}

console.log(obj['b']);

function handleFeedBack(e) {
    console.log(e.target.dataset.type);
    setFeedBack((prev)=>{
return {
    ...prev,
    [e.target.dataset.type]: prev[e.target.dataset.type]+1
}
 })
}
   console.log(feedBack);
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
                    <p>{feedBack.good}</p>
                    <button data-type='good' onClick={handleFeedBack}>good</button>
                </div>
                <div className="container">
                    <p>{feedBack.neutral}</p>
                    <button data-type='neutral' onClick={handleFeedBack}>neutral</button>
                </div>
                <div className="container">
                    <p>{feedBack.bad}</p>
                    <button data-type='bad' onClick={handleFeedBack}>bad</button>
                </div>  
            </div>
        </div>
    );
}

export default Homework;
