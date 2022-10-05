import {useState, createContext, useContext} from 'react';
import {UserContext} from './UseContextHooks';
function Component2(){
    const user = useContext(UserContext)
    return(
        <>
            <h1>Component2</h1>
            <h4>{`Hello ${user.user} again !!!`}</h4>
            <input value={user.user} onChange={user.handleChange}/>
              
        </>
    )
}
export default Component2;