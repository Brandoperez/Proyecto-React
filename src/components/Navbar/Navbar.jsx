import styles from "./Navbar.module.css"

export const Navbar = ({color}) => {

    return <div className={styles.contenedorNavbar}>
        <ul>
            <li style={{backgroundColor: color}}>Productos</li>
            <li>Servicios</li>
            <li>Contactos</li>
        </ul>
    </div>
}