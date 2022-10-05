import {useState, createContext} from 'react';

export const UserContext = createContext('Default value');
function UseContextHooks(Props){
    const[user, setUser]= useState("Ahmed Tawfik");
    const handleChange=(e)=>{
        setUser(e.target.value);
    }
    return(
        <UserContext.Provider value={{user,setUser,handleChange}}>
            <h1>{`Hello ${user} !`}</h1>
            {Props.children}
        </UserContext.Provider>
        
    );
}
export default UseContextHooks;