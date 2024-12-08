import ButtonArrow from "../ButtonArrow/ButtonArrow";
import styles from "./HomeSection.module.css";

const HomeSection = () => {
  return (
    <div className={styles.homeSection__container}>
      <div className={styles.homeSection__content}>
        <div className={styles.homeSection__containerSpan}>
          <span>Me llamo Fernando y soy</span>
          <span>de San Juan, Argentina.</span>
          <span>Me apasionan los procesos </span>
          <span>creativos y siempre busco</span>
          <span>formas de crear cosas únicas.</span>
          <span>Disfruto explorando esta</span>
          <span>pasión en todo lo que hago,</span>
          <span>ya sea componiendo música </span>
          <span>o desarrollando app web unicas.</span>
        </div>
        <ButtonArrow />
        <div className={styles.homeSection__stack}>
          <i className="fa-brands fa-html5"></i>
          <i className="fa-brands fa-css3-alt"></i>
          <i className="fa-brands fa-sass"></i>
          <i className="fa-brands fa-square-js"></i>
          <i className="fa-brands fa-react"></i>
          <i className="fa-brands fa-git-alt"></i>
          <i className="fa-brands fa-square-github"></i>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
