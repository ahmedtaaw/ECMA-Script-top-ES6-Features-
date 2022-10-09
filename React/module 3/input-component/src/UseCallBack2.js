import React, {useCallback,useState} from "react";
import Button from "./Button";
class UseCallBack2 extends React.Component {
    state={
        count:0
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    render(){
        console.log("Parent render");
        return(
        <>
        count:{this.state.count}
        <hr/>
        <Button onClick={this.increment}>
            Increment
            </Button>
        </>
        )
    }
}

export default UseCallBack2;