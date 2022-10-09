import logo from './logo.svg';
import './App.css';
import UseStateHooks from './UseStateHooks';
import UseStateHooks2 from './UseStateHooks2';
import UseContextHooks from './UseContextHooks';
import Component2 from './Component2';
import UseMemoHooks from './UseMemoHooks';
import UseMemoHooks2 from './UseMemoHooks2';
import UseCallBack from './UseCallBack';
import UseCallBack2 from './UseCallBack2';
import UseRefHooks from './UseRefHooks';

function App() {
  return (
    <div className="App">
      {/** <UseStateHooks/>
      <UseStateHooks2/>
      <UseContextHooks>
        <Component2/>
      </UseContextHooks>
      
      <UseMemoHooks/>
      <UseMemoHooks2/>
      <UseCallBack/>
      <UseCallBack2/>*/}
      <UseRefHooks/>
      
    </div>
  );
}

export default App;
