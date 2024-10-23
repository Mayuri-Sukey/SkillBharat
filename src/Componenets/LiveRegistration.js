// LiveRegistration.js
import React, { useState, useEffect } from 'react';

const LiveRegistration = () => {
    const [counter, setCounter] = useState(11000);

    useEffect(() => {
        const incrementCounter = () => {
            setCounter(prevCounter => prevCounter + 1);
        };

        const intervalId = setInterval(incrementCounter, 10000);

        return () => clearInterval(intervalId);
    }, []);

    return (
       
       
//        <button class="liveregistration-btn">
//  Live Registration: {counter}
// </button>

/* From Uiverse.io by mrhyddenn */ 
//  <button className='registration-button'>
<button className='button-live'>
  <a> Live Registration: {counter}</a>
</button> 

/* From Uiverse.io by cssbuttons-io */ 
/* <button>Live Registration: {counter}
</button> */


           
        
    );
};

export default LiveRegistration;
