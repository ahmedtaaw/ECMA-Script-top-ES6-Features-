import logo from './logo.svg';
import './App.css';
import Head from './Components/Head';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  const bool = false;
  const str1 = "just";
 return (
  <div>
    <Head thelogo={logo} name="This is title Props" title="this is another title props"/>
    <Main />
    <Footer
    toggleBoolean={!bool}
    math={(10+20)/3}
    str={str1+' yet another '+'string'}
    />
  </div>
 )
}

export default App;
