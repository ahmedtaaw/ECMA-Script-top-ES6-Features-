import { useState } from 'react'


function Counter() {
  let [count, setCount] = useState(10);

  function addOne() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={addOne}>Count = {count}</button>
    </div>
  )
}
function App(){
  return(
    <div className="App">
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  )
}
export default App
