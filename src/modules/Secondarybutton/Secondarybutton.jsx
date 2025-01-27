import styles from "./Secondarybutton.module.css";

const SecondaryButton = ({ link, content }) => {
  return (
    <a href={link} className={styles.button} target="blank" rel="noreferrer">
      <i className={content}></i>
    </a>
  );
};
export default SecondaryButton;
