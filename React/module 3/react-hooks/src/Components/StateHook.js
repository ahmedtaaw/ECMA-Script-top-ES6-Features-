import React,{useState,useCallback,useEffect } from 'react';

function StateHooks(){
    const [count,setCount]=useState(0);
    const [age, dayAfterDayAge]=useState(1);
    const [students, schoolStudents]=useState([]);
    const [todos,setTodos]=useState([]);
    
    const dayHuman=()=>{
        dayAfterDayAge((a)=>a+1);
    };

    const addStudent=useCallback(()=>{
        schoolStudents((t)=>[...t,"New Student"]);
    });

    const addTodos=(e)=>{
        setTodos((d)=>[...d,e]);
    };
    useEffect(()=>{
        document.title=`you clicked ${count} times`
    })
    const onPressEnter=(e)=>{
        if(e.key==='Enter'){
            addTodos(e.target.value);
            e.target.value="";
        }
    };
    
    return(
        <>
            <p>you clicked {count} time</p>
            <button onClick={()=>setCount(count+1)}>
                Click me
            </button>
            <p>day after day Age: {age}</p>
            <button onClick={dayHuman}>
                click me for day after day Mr. Human
            </button>
            <hr/>
            <p>School Students</p>
            <button onClick={addStudent}>Add Student</button>
            <table>
                <tbody>
                {students.map((student,index)=>{
                return <tr  key={index}>
                    <td>{student} with key {index}</td>
                </tr>
               
            })}
                </tbody>
            </table>
            <hr/>
            <p>press enter to add todo</p>
            <input  type="text"  onKeyDown={onPressEnter} ></input>
            <table>
                <tbody>
                {todos.map((todo,index)=>{
                    return <tr key={index}>
                        <td>{todo}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </>
    )
}

export default StateHooks;