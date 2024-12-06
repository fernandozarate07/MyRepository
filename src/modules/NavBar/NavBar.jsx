import styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <ul className={styles.navBar__ul}>
      <li className={`${styles.navBar__home} ${styles.li}`}>Home</li>
      <li className={`${styles.navBar__projects} ${styles.li}`}>Projects</li>
      <li className={`${styles.navBar__resume} ${styles.li}`}>Resume</li>
    </ul>
  );
};
export default NavBar;
