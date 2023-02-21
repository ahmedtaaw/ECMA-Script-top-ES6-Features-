import React  from "react";
function ToDos(props){
    
    let todos=props.todos;
    let addTodo=props.addTodo;
    console.log("child render");
    return(
        <>
            <h2>My Todos</h2>
            {todos.map((todo,index)=>{
                return <p key={index}>{todo}</p>
            })}
            <button onClick={addTodo}>Add Todo</button>
        </>
    )
}
export default React.memo(ToDos);
//React.memo is a higher order component. 
//If your component renders the same result given the same props
// you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.