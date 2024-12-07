import ButtonArrow from "../ButtonArrow/ButtonArrow";
import styles from "./HomeSection.module.css";

const HomeSection = () => {
  return (
    <div className={styles.homeSection__container}>
      <div className={styles.homeSection__content}>
        <span>Soy un apasionado de los procesos creativos.</span>
        <span>Los encuentro en todo lo que disfruto hacer,</span>
        <span>desde una canción hasta una aplicación web.</span>
      </div>
      <ButtonArrow />
      <div className={styles.homeSection__stack}>
        <i class="fa-brands fa-html5"></i>
        <i class="fa-brands fa-css3-alt"></i>
        <i class="fa-brands fa-sass"></i>
        <i class="fa-brands fa-square-js"></i>
        <i class="fa-brands fa-react"></i>
        <i class="fa-brands fa-git-alt"></i>
        <i class="fa-brands fa-square-github"></i>
      </div>
    </div>
  );
};

export default HomeSection;
