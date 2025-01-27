import styles from "./Cta.module.css";

const Calltoaction = ({ link, content }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.button}>
      {content}
    </a>
  );
};

export default Calltoaction;
