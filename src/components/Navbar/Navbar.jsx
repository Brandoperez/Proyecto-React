import { CardWidget } from "../CardWidget/CardWidget"
import styles from "./Navbar.module.css"

export const Navbar = () => {

    return <div className={styles.contenedorNavbar}>
        <h3>Logo</h3>
        <ul style={{display: "flex", gap: "30px"}}>
            <li >Productos</li>
            <li>Servicios</li>
            <li>Contactos</li>
        </ul>
        <CardWidget />
    </div>
}