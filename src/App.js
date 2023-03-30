import logo from "./logo.svg";
import "./App.css";
import CounterContainer from "./components/Counter/CounterContainer";
import { ItemList } from "./components/ItemList/ItemList";
import { Navbar } from "./components/Navbar/Navbar";



function App() {

let saludo = "Hola Brando!!";
let edad  = 25;



  return <div class="App">
    <h1>Home</h1>
    <Navbar color="red" />
    <ItemList saludo={saludo} edad={edad} />
    <CounterContainer />
   


  </div>
}

export default App;
