import {useState} from 'react';

function UseStateHooks(){
    const [inputText, setText]=useState('Default Text');
    const handleChange=(e)=>{
        setText(e.target.value)
    };
    return(
        <>
            <input value={inputText} onChange={handleChange}/>
            <h2>You Typed:{inputText}</h2>
            <button onClick={()=>setText('Updated Default Text')}>
                Reset
            </button>
        </>
    )
}

export default UseStateHooks;