import React, {useState} from 'react';

const Homework = () => {
const [feedBack, setFeedBack] = useState(()=>{
    const localFeedback = JSON.parse(localStorage.getItem('feedback'))

    return localFeedback || {
    bad:0,
    neutral:0,
    good:0
}});

function handleFeedBack(e) {
    const typeFeedback = e.target.dataset.type;
    console.log(e.target.dataset.type);
    // localStorage.removeItem

    setFeedBack((prev)=>{
        localStorage.setItem('feedback',JSON.stringify( {
            ...prev,
            [typeFeedback]: prev[typeFeedback]+1
        }))
return {
    ...prev,
    [typeFeedback]: prev[typeFeedback]+1
}
 })
}

function resetAll() {
    setFeedBack((prev)=>{
        localStorage.setItem('feedback',JSON.stringify( {
            ...prev,
            bad:0,
            neutral:0,
            good:0
        }))
        return {
            ...prev,
            bad:0,
            neutral:0,
            good:0
        }
         })
}


   const totalFeedback = feedBack.bad + feedBack.neutral + feedBack.good;
   
   const positiveFeedback = (feedBack.good / totalFeedback * 100).toFixed(1)+"%";
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
                <div>
                    {totalFeedback ? <><p>Total feedback: {totalFeedback}</p><p>Total positive feedback: {positiveFeedback}</p></> : <p>No feedback yet</p> }
                    
                   

                </div> 
                <div>
                {totalFeedback ? <button onClick={resetAll}>Reset</button> : ''}
                </div>
        </div>
    );
}

export default Homework;
