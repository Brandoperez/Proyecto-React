import React, {useEffect, useState} from "react";
import { ItemDetail } from "./ItemDetail";
import {products} from "../../productsMock";

import { useParams } from "react-router-dom";



export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});


    let {id} = useParams();

    const x = useParams()
    console.log(x);

    useEffect(() => {
        let encontrado = products.find((prod) => prod.id === +id);
            setProduct(encontrado);
    }, [id]);

    const onAdd = (cantidad) => {
      let data = {
        ...product,
        quantity: cantidad
      }
      console.log(data);
    }

  return (
    <div>
        <ItemDetail product ={product} onAdd= {onAdd} />
    </div>
  )
}
