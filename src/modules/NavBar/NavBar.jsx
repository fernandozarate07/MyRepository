import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className={styles.navBar}>
        <NavLink to="/" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}>
          <i className={`fa-solid fa-house ${styles.icon}`}></i>
          <span>INICIO</span>
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}>
          <i className={`fa-solid fa-file ${styles.icon}`}></i>
          <span> PROYECTOS</span>
        </NavLink>
        <NavLink to="/aboutme" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}>
          <i className={`fa-brands fa-dev ${styles.icon}`}></i>
          <span> SOBRE MÍ</span>
        </NavLink>
        <NavLink to="/contactme" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}>
          <i className={`fa-solid fa-message ${styles.icon}`}></i>
          <span>CONTACTAME</span>
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
