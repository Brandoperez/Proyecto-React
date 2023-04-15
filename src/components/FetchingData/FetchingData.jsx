import React, { useState } from 'react'
import { useEffect } from 'react';

export const FetchingData = () => {

  const [data, setData] = useState([])
  const [dataId, setDataId] = useState({})


  useEffect(()=>{
    const obtenerPost = fetch("https://jsonplaceholder.typicode.com/posts");
    obtenerPost.then(res => res.json()).then(res => setData(res));

    const obtenerPorId = fetch("https://jsonplaceholder.typicode.com/posts/2");
    obtenerPorId.then(res => res.json()).then(res => setDataId(res));

  },[]);

  const crearNuevoPost = () => {
    const crearPost = fetch("https://jsonplaceholder.typicode.com/posts", {
      method : "POST",
      //headers : {},
        body : JSON.stringify({
          userId : 7,
          title : "Estoy creando un POST",
          body : "Esta es la prueba del verbo post desde el front end",
        }),
    }); 
    crearPost.then(res => res.json()).then(res => console.log(res))
  };
  
   
  console.log(data);
  console.log(dataId);
  return (
    <div>
        <h1>Peticiones</h1>
        <button onClick={crearNuevoPost}>Crear Producto</button>
    </div>
  )
}
