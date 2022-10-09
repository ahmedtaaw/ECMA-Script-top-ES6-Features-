import React, {useCallback,useState} from "react";
import Button from "./Button";
//function component
function UseCallBack2(){
    const [count,setCount] = useState(0)
    function increment(){
        setCount(count+1)
    }
    return(
        <>
        count:{count}
        <hr/>
        <Button onClick={increment}>
            Increment
            </Button>
        </>
    )
}
//class component
class UseCallBack2_Class extends React.Component {
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