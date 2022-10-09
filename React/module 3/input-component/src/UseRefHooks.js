import React, { useEffect, useState } from "react";

function UseRefHooks(){
    const [fname, setFName]=useState('');
    const [lname, setLName]=useState('');

    const fNameRef = React.useRef();
    const lNameRef = React.useRef();
    const buttonRef= React.useRef();

    useEffect(()=>{
        fNameRef.current.focus();
    },[]);

    function onFirstKeyDown(e){
        if(e.key==='Enter'){
            lNameRef.current.focus();
        }
    }
    function onLastKeyDown(e){
        if(e.key==='Enter'){
            buttonRef.current.focus();
        }
    }

    const run = ()=>{
        console.log({fname,lname});
    }
    return(
        <>
        <input ref={fNameRef} onKeyDown={onFirstKeyDown} value={fname} onChange={(e)=>setFName(e.target.value)}/>
        <input ref={lNameRef} onKeyDown={onLastKeyDown} value={lname} onChange={(e)=>setLName(e.target.value)}/>
        <button ref={buttonRef} onClick={run}>Save</button>
        </>
    )



}
export default UseRefHooks;