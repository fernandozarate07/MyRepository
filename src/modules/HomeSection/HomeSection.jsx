import ButtonArrow from "../ButtonArrow/ButtonArrow";
import styles from "./HomeSection.module.css";
const HomeSection = () => {
  return (
    <div className={styles.homeSection__container}>
      <div className={styles.homeSection__content}>
        <h2 className={styles.homeSection__name}>Hello, I'm Fernando.</h2>
        <div className={styles.homeSection__description_container}>
          <span>I was born in San Juan, Argentina.</span>
          <span>My greatest passion lies in creative processes,</span>
          <span>which is why I feel deeply attracted to art and design,</span>
          <span>from a song to a web application.</span>
          <span>Transforming ideas into unique experiences </span>
          <span>is what drives me.</span>
        </div>
      </div>
      <ButtonArrow />
    </div>
  );
};
export default HomeSection;
