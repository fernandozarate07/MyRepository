import styles from "./UnderlineButton.module.css";
import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";

const UnderlineButton = ({ section, content, linkApp, link }) => {
  const { setSectionState } = useContext(AppContext);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.btn}
      //si no existe el parametro de section no se ejecuta setSection
      onClick={section ? () => setSectionState(section) : null}>
      <span className={styles.span}>{content}</span>
    </a>
  );
};
export default UnderlineButton;
