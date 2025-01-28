import NavBar from "../NavBar/NavBar";
import styles from "./NavSection.module.css";
import logo from "../../assets/image/logo.svg";
import SecondaryButton from "../Secondarybutton/Secondarybutton.jsx";

const NavSection = () => {
  return (
    <div className={styles.navSection}>
      {/* logo */}
      <div className={styles.navSection__logo}>
        <img src={logo} alt="logo" className={styles.logo} width={120} />
      </div>
      {/* main */}
      <NavBar />
      {/* contact */}
      <div className={styles.navSection__contact}>
        <div className={styles.navSection__buttonsContainer}>
          <SecondaryButton content="fa-brands fa-square-github" link="https://github.com/fernandozarate07" />
          <SecondaryButton
            content="fa-solid fa-envelope"
            link="mailto:fernandozarate.dev@gmail.com?subject=Hola Fer!"
          />
          <SecondaryButton content="fa-brands fa-linkedin" link="https://www.linkedin.com/in/fernandozaratedev/" />
        </div>
        {/* copy */}
        <span className={styles.navSection__copy}>&copy; {new Date().getFullYear()} Fernando Zárate</span>
      </div>
    </div>
  );
};
export default NavSection;
