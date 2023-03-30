const Counter = ({sumar, restar, reiniciar, contador}) =>{
    return(
        <div>
            <h1>Este es el Contador</h1>
            <button onClick={sumar}>Sumar</button>
            <h2>{contador}</h2>
            <button onClick={restar}>Restar</button>
            <button onClick={reiniciar}>Reiniciar</button>
        </div>
    );
};

export default Counter