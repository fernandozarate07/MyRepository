import NavBar from "../NavBar/NavBar";
import styles from "./NavSection.module.css";
import Footer from "../Footer/Footer.jsx";

const NavSection = () => {
  return (
    <div className={styles.navSection__container}>
      <div className={styles.navSection__main}>
        <div>
          <h1 className={styles.navSection__name}>FERNANDO ZÁRATE</h1>
          <p className={styles.navSection__description}>Desarrollador Web Front End - React</p>
        </div>
        <NavBar />
      </div>
      <div className={styles.navSection__contact}>
        <Footer />
        <i className="fa-brands fa-github"></i>
        <i className="fa-solid fa-envelope"></i>
        <i className="fa-brands fa-linkedin"></i>
      </div>
    </div>
  );
};
export default NavSection;
