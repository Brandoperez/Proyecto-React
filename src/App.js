import logo from "./logo.svg";
import "./App.css";
import CounterContainer from "./components/Counter/CounterContainer";
import { Navbar } from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { FetchingData } from "./components/FetchingData/FetchingData";



function App() {

let saludo = "Hola Brando!!";




  return <div class="App">
    <h1>Home</h1>
    <Navbar color="red" />
    <ItemListContainer />
    <CounterContainer />
    <FetchingData />
   


  </div>
}

export default App;
