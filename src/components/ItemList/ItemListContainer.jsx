import styles from "./ItemList.module.css"
import ItemList from "./ItemList";
import {products} from "../../productsMock";
import { useEffect, useState } from "react";


const ItemListContainer = ( ) => {

    let [items, setItems] = useState([]);

   useEffect( () => {
    let tarea = new Promise((resolve, reject) => {
    resolve(products);
    //reject("No se pudo resolver");
});

tarea
.then((res) => {setItems(res)})
.catch((error) => {console.log("Catch:", error)});
}, [])

    return (
    <div>
        <ItemList items = {items} />
    </div>
    );
}

export default ItemListContainer;