import styles from "./NavBar.module.css";
import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext.jsx";

const NavBar = () => {
  const { sectionState, setSectionState } = useContext(AppContext);

  return (
    <ul className={styles.navBar__ul}>
      <li
        className={`${styles.navBar__home} ${styles.li} ${sectionState === "home" && styles.active}
`}
        onClick={() => setSectionState("home")}>
        {/* <i className="fa-solid fa-house"></i> */}
        <span>Inicio</span>
      </li>
      <li
        className={`${styles.navBar__projects} ${styles.li} ${sectionState === "projects" && styles.active}
`}
        onClick={() => setSectionState("projects")}>
        {/* <i className="fa-solid fa-list"></i> */}
        <span>Proyectos</span>
      </li>
      <li
        className={`${styles.navBar__resume} ${styles.li} ${sectionState === "resume" && styles.active}
`}
        onClick={() => setSectionState("resume")}>
        {/* <i className="fa-solid fa-file"></i> */}
        <span>Curriculum Vitae</span>
      </li>
    </ul>
  );
};
export default NavBar;
