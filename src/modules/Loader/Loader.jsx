import { useState, useEffect } from "react";
import styles from "./Loader.module.css";

const Loader = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 1000);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div className={`${styles.loader__container} ${fadeOut ? styles.loader__fadeOut : null}`}>
      <div className={styles.loader__text}>
        <span className={styles.fadeInText}>Fernando Zárate</span>
        <span className={styles.fadeInRight}>Portfolio</span>
      </div>
    </div>
  );
};

export default Loader;
