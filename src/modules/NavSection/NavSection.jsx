import NavBar from "../NavBar/NavBar";
import styles from "./NavSection.module.css";

const NavSection = () => {
  return (
    <div className={styles.navSection__container}>
      {/* portal */}
      <div className={styles.navSection__portal}>
        <div>
          <h1 className={styles.navSection__name}>Fernando Zárate</h1>
          <p className={styles.navSection__description}>
            <span>Desarrollador Web</span>
            <span>Front End</span>
          </p>
        </div>
        <span className={styles.navSection__copy}>&copy; Fernando Zárate</span>
      </div>
      {/* main */}
      <NavBar />
      {/* contact */}
      <div className={styles.navSection__contact}>
        <a href="#">
          <i className="fa-brands fa-square-github"></i>
        </a>
        <a href="#">
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};
export default NavSection;
