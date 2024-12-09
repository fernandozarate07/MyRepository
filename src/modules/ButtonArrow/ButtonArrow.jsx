import styles from "./ButtonArrow.module.css";
import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";

const ButtonArrow = () => {
  const { setSectionState } = useContext(AppContext);

  return (
    <div className={styles.btn} onClick={() => setSectionState("projects")}>
      <span className={styles.span}>MI TRABAJO</span>
    </div>
  );
};
export default ButtonArrow;
