import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import Form from "./components/Form/Form";
import CartContainer from "./components/Cart/CartContainer";

function App() {


  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Navbar />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:categoryName" element={<ItemListContainer />} />
              <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
              <Route path="/Cart" element={<CartContainer />} />
              <Route path="/form" element={<Form />} />
              <Route path="*" element={<h1>La ruta seleccionada no existe.</h1>} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
