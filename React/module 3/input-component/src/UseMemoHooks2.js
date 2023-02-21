import React from "react"; 
import { useState, useMemo } from "react";
function UseMemoHooks2(){
    const randomColour = ()=>'#'+(Math.random()*0xFFFFFF<<0).toString(16);
    const [firstName, setFirstName]=useState('');
    const [lastName, setLastName]=useState('');
    const [email, setEmail]=useState('');

    const fullName= useMemo(()=>(<span style={{color:randomColour()}}>first Name:{firstName}<br/>Last Name:{lastName}<br/>Email:{email}</span>),[email,lastName]);

    return(
        <>
            <div>
                <label>First Name</label>
                <input value={firstName}
                onChange={e=>{setFirstName(
                    e.target.value
                )}}/>
            </div>
            <div>
                <label>last Name</label>
                <input value={lastName}
                onChange={e=>{setLastName(
                    e.target.value
                )}}/>
            </div>
            <div>
                <label>Email</label>
                <input value={email}
                onChange={e=>{setEmail(
                    e.target.value
                )}}/>
            </div>
            <h2>{fullName}</h2>
        </>
    )
}
export default UseMemoHooks2;