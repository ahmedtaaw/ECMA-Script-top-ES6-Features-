import logo from './logo.svg';
import './App.css';
import  Child from './Child';
import InputComponent from './InputComponent';
import RegisterForm from './RegisterForm';
import TextInputWithFocusButton from './TextInputWithFocusButton';
import SetStateLemon from './SetStateLemon';
function App() {

  const date= new Date();

  return (
    <div className="App">
      <Child message={date.toLocaleTimeString()}/>
      <InputComponent/>
      <RegisterForm/>
      <TextInputWithFocusButton/>
      <SetStateLemon/>
    </div>
  );
}

export default App;
