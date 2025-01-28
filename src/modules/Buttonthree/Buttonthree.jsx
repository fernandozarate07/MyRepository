import styles from "./Buttonthree.module.css";

const SecondaryButton = ({ link, content }) => {
  // Función para abrir la ventana emergente más pequeña solo para el correo
  const openMailPopup = (url) => {
    const width = 600;
    const height = 600;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    // Abre el enlace del correo en una ventana emergente con tamaño personalizado
    window.open(url, "_blank", `width=${width},height=${height},top=${top},left=${left}`);
  };

  // Verifica si el enlace es de tipo mailto
  const isMailLink = link.includes("mailto:");

  const handleClick = (e) => {
    if (isMailLink) {
      e.preventDefault(); // Previene el comportamiento predeterminado de abrir en una nueva pestaña
      openMailPopup(link); // Abre el popup solo para el enlace de correo
    }
  };

  return (
    <a
      href={link}
      className={styles.button}
      target="_blank"
      rel="noreferrer"
      onClick={handleClick} // Asignamos el manejador de clic
    >
      {content}
    </a>
  );
};

export default SecondaryButton;
