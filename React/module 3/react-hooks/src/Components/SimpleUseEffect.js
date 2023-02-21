import React,{useState,useEffect} from 'react';

function SimpleUseEffect(){
    const [searchField,setSearchField]=useState();
    const [monsters,setMonsters]=useState([]);
    console.log(searchField);
    //useEffect(()=>{call back function},[array of dependencies ])
    /*
    useffect run when app mounts and when one of dependencies changes
    useEffect(()=>{
        //code or the effect we want to happen inside our functional component
    },[state or props passed when changed the useffect is called])
    
   
   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=>setMonsters(users));
   },[]) 
 const filterMonsters = monsters.filter((monster)=>{
        return monster.name.includes(searchField);
    })*/
    const onSearchChange=(e)=>{
        const searchFieldStr=e.target.value.toLocaleLowerCase();
        setSearchField(searchFieldStr);
    }
   
    return(
        <>
        <input type="text" onChange={onSearchChange} />
        </>
    )
}
export default SimpleUseEffect;