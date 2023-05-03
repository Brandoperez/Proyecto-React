import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({stock, onAdd}) =>{
    const [contador, setCounter] = useState(0);

    const sumar = () =>{
        Counter < stock ? setCounter(contador + 1): alert("No hay más unidades disponibles");

       
    }
    const restar = () => {
        setCounter(contador - 1);
    }
    const reiniciar = () =>{
        setCounter(0);
    }
    return(
        <div>
            <Counter
            sumar = {sumar}
            restar = {restar}
            onAdd = {onAdd}
            contador = {contador} />
        </div>
    )
}

export default CounterContainer;
