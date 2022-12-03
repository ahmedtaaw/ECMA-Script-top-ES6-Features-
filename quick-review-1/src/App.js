import logo from './logo.svg';
import './App.css';
import CounterComp from './components/lev1-counter';
import CallAPI from './components/lev1-callAPI';
function App() {
  return (
    <div className="App">
     {/**
      * <CounterComp/>
      **/}
     <CallAPI/>
    </div>
  );
}

export default App;
