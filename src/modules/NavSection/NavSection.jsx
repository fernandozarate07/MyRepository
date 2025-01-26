import NavBar from "../NavBar/NavBar";
import styles from "./NavSection.module.css";
import logo from "../../assets/image/logo.svg";
import Primarybutton from "../Primarybutton/Primarybutton.jsx";

const NavSection = () => {
  return (
    <div className={styles.navSection}>
      {/* logo */}
      <div className={styles.navSection__logo}>
        <img src={logo} alt="logo" />
      </div>
      {/* main */}
      <NavBar />
      {/* contact */}
      <div className={styles.navSection__contact}>
        <Primarybutton content="GitHub" link={"https://github.com/fernandozarate07"} />
        <Primarybutton
          content="Gmail"
          link={"https://mail.google.com/mail/?view=cm&fs=1&to=zaratefernandoanibal@gmail.com&su=Hola Fer!"}
        />
        <Primarybutton content="Linkedin" link={"https://www.linkedin.com/in/fernandozaratedev/"} />
      </div>
      {/* copy */}
      <span className={styles.navSection__copy}>&copy; {new Date().getFullYear()} Fernando Zárate</span>
    </div>
  );
};
export default NavSection;
