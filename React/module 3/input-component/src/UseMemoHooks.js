import { useState,useMemo } from 'react';
import ReactDom from 'react-dom/client'
function UseMemoHooks(){
    const [count, SetCount] = useState(0);
    const [todos, setTodos] = useState([]);


    const expensiveCalculation=(num)=>{
        console.log("Calculation ...");
        for(let i=0;i<1000000000;i++){
            num +=1;
        }
        return num;
    }

    const calculation = useMemo (()=>expensiveCalculation(count),[count]);

    const increment = ()=>{
        SetCount((c)=>c+1);
    }

    const addTodo = ()=>{
        setTodos((t)=>[...t,"new Todo"]);
    }


    return(
        <div>
            <div>
                <h2>My Todo's</h2>
                {todos.map((todo,index)=>{
                    return <p key={index}>{todo}</p>
                })}
                <button onClick={addTodo}>add todo</button>
            </div>
            <hr/>
            <div>
                Count:{count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculations</h2>
                {calculation}
            </div>
        </div>
    )

}
export default UseMemoHooks;