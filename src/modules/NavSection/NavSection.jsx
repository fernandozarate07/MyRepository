import NavBar from "../NavBar/NavBar";
import styles from "./NavSection.module.css";
import logo from "../../assets/image/logo.svg";
import Secondarybutton from "../Secondarybutton/Secondarybutton.jsx";

const NavSection = () => {
  return (
    <div className={styles.navSection}>
      {/* logo */}
      <div className={styles.navSection__logo}>
        <img src={logo} alt="logo" className={styles.logo} width={100} />
      </div>
      {/* main */}
      <NavBar />
      {/* contact */}
      <div className={styles.navSection__contact}>
        <Secondarybutton content="fa-brands fa-square-github" link={"https://github.com/fernandozarate07"} />
        <Secondarybutton
          content="fa-solid fa-envelope"
          section={"https://mail.google.com/mail/?view=cm&fs=1&to=zaratefernandoanibal@gmail.com&su=Hola Fer!"}
        />
        <Secondarybutton content="fa-brands fa-linkedin" link={"https://www.linkedin.com/in/fernandozaratedev/"} />
      </div>
      {/* copy */}
      <span className={styles.navSection__copy}>&copy; {new Date().getFullYear()} Fernando Zárate</span>
    </div>
  );
};
export default NavSection;
