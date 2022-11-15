import React from "react";
import {useState} from "react";

function CounterComp(){
    const[counter,setCounter]=useState(0);
    const increaseCounter=(e)=>{
        setCounter(counter+1);
    };
    return(
        <div>
            <p>Counter: {counter}</p>
            <button onClick={increaseCounter}>Icrease Counter</button>
        </div>
    );
}
export default CounterComp;