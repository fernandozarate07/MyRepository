import NavBar from "../NavBar/NavBar";
import styles from "./NavSection.module.css";
import UnderlineButton from "../UnderlineButton/UnderlineButton.jsx";

const NavSection = () => {
  return (
    <div className={styles.navSection}>
      {/* portal */}
      <div className={styles.navSection__info}>
        <div>
          <h1 className={styles.navSection__name}>Fernando Zárate</h1>
          <p className={styles.navSection__description}>
            <span>Desarrollador Web</span>
            <span>Front End</span>
          </p>
        </div>
        <span className={styles.navSection__copy}>&copy; {new Date().getFullYear()} Fernando Zárate</span>
      </div>
      {/* main */}
      <NavBar />
      {/* contact */}
      <div className={styles.navSection__contact}>
        <UnderlineButton content="GitHub" link={"https://github.com/fernandozarate07"} />
        <UnderlineButton
          content="Gmail"
          link={"https://mail.google.com/mail/?view=cm&fs=1&to=zaratefernandoanibal@gmail.com&su=Hola Fer!"}
        />
        <UnderlineButton content="Linkedin" link={"https://www.linkedin.com/in/fernando-z%C3%A1rate-6a07482a3/"} />
      </div>
    </div>
  );
};
export default NavSection;
