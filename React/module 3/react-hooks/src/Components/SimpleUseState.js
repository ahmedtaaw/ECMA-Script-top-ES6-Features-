import React,{useState} from 'react';

function SimpleUseState(){
    const [searchField,setSearchField]=useState();
    console.log(searchField);

    const onSearchChange=(e)=>{
        setSearchField(e.target.value);
    }
    return(
        <>
        <input type="text" onChange={onSearchChange} />
        </>
    )
}
export default SimpleUseState;