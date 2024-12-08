import styles from "./NavBar.module.css";
import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext.jsx";

const NavBar = () => {
  const { setSectionState } = useContext(AppContext);

  return (
    <ul className={styles.navBar__ul}>
      <li className={`${styles.navBar__home} ${styles.li}`}>
        <span onClick={() => setSectionState("home")}>Sobre mí</span>
      </li>
      <li className={`${styles.navBar__projects} ${styles.li}`}>
        <span onClick={() => setSectionState("projects")}>Proyectos</span>
      </li>
      <li className={`${styles.navBar__resume} ${styles.li}`}>
        <span onClick={() => setSectionState("resume")}>Curriculum</span>
      </li>
    </ul>
  );
};
export default NavBar;
