import React from "react";
import useFetch from "../../Utils/Hooks/useFetch";

const PruebaFetchUno = () => {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/users", []);

  return(
  <div>
    {
        data?.map( user => <h4 key={user.id}>{user.name}</h4>)
    }

    <h2>Acá Finaliza </h2>
  </div>)
  
};
export default PruebaFetchUno;
