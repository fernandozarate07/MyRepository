import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul className={styles.navBar}>
        <li>
          <NavLink to="/" className={({ isActive }) => `${styles.li} ${isActive ? styles.active : ""}`}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => `${styles.li} ${isActive ? styles.active : ""}`}>
            Proyectos
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" className={({ isActive }) => `${styles.li} ${isActive ? styles.active : ""}`}>
            Curriculum Vitae
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
