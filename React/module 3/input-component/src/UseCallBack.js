import react, {useCallback,useState} from 'react';
import ToDos from './ToDos';
function UseCallBack(){
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);


    const increment = ()=>{
        setCount((c)=>c+1);
    }
    const addTodo= ()=>{
        setTodos((t)=>[...t,"new Todo"])
    }

    return(
        <>
            <ToDos todos={todos} addTodo={addTodo}/>
            <hr/>
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    )

}

export default UseCallBack;