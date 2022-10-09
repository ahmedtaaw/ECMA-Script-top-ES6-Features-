import React, {useCallback,useState} from "react";

function Button(props){
    const randomColour = ()=>'#'+(Math.random()*0xFFFFFF<<0).toString(16);
    console.log("child render");
    return(
    <>
        
        <button onClick={props.onClick} style={{background:randomColour()}}>
            {props.children}
        </button>
    </>
    )
}
export default React.memo(Button);