import { CardWidget } from "../CardWidget/CardWidget";
import styles from "./Navbar.module.css";
import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return(
    <div>
    <div className={styles.contenedorNavbar}>
      <Link to="/"><h3>Logo</h3></Link>

      <ul style={{ display: "flex", gap: "30px" }}>
        <Link to="/">Productos</Link>
        <Link to="/category/Hombre">Hombres</Link>
        <Link to="/category/Mujer">Mujeres</Link>
      </ul>
      <CardWidget />
    </div>

    <Outlet />
  </div>
  );
};
