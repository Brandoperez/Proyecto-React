import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = () =>{
    const [contador, setCounter] = useState(0);

    const sumar = () =>{
        setCounter(contador + 1);
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
            reiniciar = {reiniciar}
            contador = {contador} />
        </div>
    )
}

export default CounterContainer;
