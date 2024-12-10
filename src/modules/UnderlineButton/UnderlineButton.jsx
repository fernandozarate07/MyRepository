import styles from "./UnderlineButton.module.css";
import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";

const UnderlineButton = ({ section }) => {
  const { setSectionState } = useContext(AppContext);

  return (
    <div className={styles.btn} onClick={() => setSectionState(section)}>
      <span className={styles.span}>MI TRABAJO</span>
    </div>
  );
};
export default UnderlineButton;
