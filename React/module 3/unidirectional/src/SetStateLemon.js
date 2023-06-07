import React, {useState} from "react";
import LemonHeading from "./LemonHeading";

function SetStateLemon(){

    const [word, setWord] = React.useState('Eat');

    function handleClick(){
        setWord('Drink');
    }

    return(
        <div className="Lemon">
            <LemonHeading msg={word+" the Lemon"}/>
            <button onClick={handleClick}>Click Here!</button>
        </div>
    )

}

export default SetStateLemon;