import styles from "./NavBar.module.css";
import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext.jsx";

const NavBar = () => {
  const { sectionState, setSectionState } = useContext(AppContext);

  return (
    <div>
      <ul className={styles.navBar}>
        <li
          className={`${styles.li} ${sectionState === "home" && styles.active}`}
          onClick={() => setSectionState("home")}>
          Inicio
        </li>
        <li
          className={`${styles.li} ${sectionState === "projects" && styles.active}`}
          onClick={() => setSectionState("projects")}>
          Proyectos
        </li>
        <li
          className={`${styles.li} ${sectionState === "resume" && styles.active}`}
          onClick={() => setSectionState("resume")}>
          Curriculum Vitae
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
