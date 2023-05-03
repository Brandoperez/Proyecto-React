import { useState } from "react";


const Form = () => {
    const [userData, SetUserData] = useState({
        nombre: "",
        apellido: "",
        telefono: ""
    })

    const handleChange = (e) => {
        SetUserData({...userData, [e.target.name]: e.target.value});
    }

    const envioFormulario = (evento) => {
        evento.preventDefault()

        //LOGIN
        console.log(userData);
    }

  return (
    <div>
        <h1>Estamos en el formulario</h1>

        <form onSubmit={envioFormulario}>
            <input type="text" placeholder="Ingrese su nombre" name="nombre" value={userData.nombre} onChange={handleChange}/>
            <input type="text" placeholder="Ingresa tu apellido" name="apellido" value={userData.apellido} onChange={handleChange} />
            <input type="text" placeholder="Ingresa tu telefono" name="telefono" value={userData.telefono} onChange={handleChange} />

            <button type="submit">Enviar</button>
            <button type="button">Cancelar</button>
        </form>
    </div>
  )
}

export default Form;
