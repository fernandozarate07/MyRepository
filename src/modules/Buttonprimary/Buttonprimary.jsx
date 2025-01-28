import { NavLink } from "react-router-dom";
import styles from "./Buttonprimary.module.css";

const Buttonprimary = ({ type, content, section, link, action }) => {
  const handleClick = (e) => {
    // Lógica para abrir enlaces de tipo mailto en ventana emergente
    if (type === "link" && link.includes("mailto:")) {
      e.preventDefault();
      const width = 600;
      const height = 600;
      const left = (window.innerWidth - width) / 2;
      const top = (window.innerHeight - height) / 2;
      window.open(link, "_blank", `width=${width},height=${height},top=${top},left=${left}`);
    }
  };

  if (type === "navlink") {
    // Renderiza NavLink
    return (
      <NavLink to={section} className={styles.button}>
        <span>{content}</span>
      </NavLink>
    );
  }

  if (type === "link") {
    // Renderiza un enlace externo
    return (
      <a href={link} className={styles.button} target="_blank" rel="noreferrer" onClick={handleClick}>
        {content}
      </a>
    );
  }

  if (type === "button") {
    // Renderiza un botón
    return (
      <button className={styles.button} onClick={action}>
        {content}
      </button>
    );
  }

  // Fallback en caso de que no se pase un tipo válido
  return null;
};

export default Buttonprimary;
