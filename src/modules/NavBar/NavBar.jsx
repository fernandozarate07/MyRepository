import styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <ul className={styles.navBar__ul}>
      <li className={`${styles.navBar__home} ${styles.li}`}>
        <span>Sobre mí</span>
      </li>
      <li className={`${styles.navBar__projects} ${styles.li}`}>
        <span>Proyectos</span>
      </li>
      <li className={`${styles.navBar__resume} ${styles.li}`}>
        <span>Curriculum</span>
      </li>
    </ul>
  );
};
export default NavBar;
