import NavBar from "../NavBar/NavBar";
import styles from "./NavSection.module.css";
import Footer from "../Footer/Footer.jsx";

const NavSection = () => {
  return (
    <div className={styles.navSection__container}>
      {/* main */}
      <div className={styles.navSection__main}>
        <div>
          <h1 className={styles.navSection__name}>
            <div>
              <span className={styles.span_one}>Hola</span>
              <span className={styles.span_two}>, soy</span>
            </div>
            Fernando Zárate
          </h1>
          <p className={styles.navSection__description}>Desarrollador Web Front End - React</p>
        </div>
        <NavBar />
      </div>
      {/* contact */}
      <div className={styles.navSection__contact}>
        <Footer />
        <i class="fa-brands fa-square-github"></i>
        <i className="fa-solid fa-envelope"></i>
        <i className="fa-brands fa-linkedin"></i>
      </div>
    </div>
  );
};
export default NavSection;
