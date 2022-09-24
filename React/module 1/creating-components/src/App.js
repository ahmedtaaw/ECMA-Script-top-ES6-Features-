import logo from './logo.svg';
import './App.css';
import Head from './Components/Head';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
 return (
  <div>
    <Head name="This is title Props" title="this is another title props"/>
    <Main />
    <Footer/>
  </div>
 )
}

export default App;
