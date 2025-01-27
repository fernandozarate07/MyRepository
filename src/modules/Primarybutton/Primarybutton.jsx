import { NavLink } from "react-router-dom";
import styles from "./Primarybutton.module.css";

const Primarybutton = ({ section, content }) => {
  return (
    <NavLink to={section} className={styles.button}>
      <span>{content}</span>
    </NavLink>
  );
};
export default Primarybutton;
