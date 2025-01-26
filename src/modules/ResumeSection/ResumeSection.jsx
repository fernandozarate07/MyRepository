import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import styles from "./ResumeSection.module.css";
import logo from "../../assets/image/logo.svg";

const ResumeSection = () => {
  const targetRef = useRef();

  const handleDownloadPDF = () => {
    const input = targetRef.current;
    html2canvas(input, { scale: 4 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position -= pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("Fernando_Zárate_CV.pdf");
    });
  };

  return (
    <div className={styles.aboutme}>
      <div className={styles.aboutme__descriptionContainer}>
        <h2 className={styles.aboutme__title}>Sobre Mí</h2>
        <p className={styles.aboutme__descriptionInfo}>
          <span>
            <i className="fa-solid fa-check"></i>
            Manejo un stack basado en tecnologías modernas como JavaScript, React, Next.js, Node.js, Express y
            PostgreSQL.
          </span>
          <span>
            <i className="fa-solid fa-check"></i>
            cuento con experiencia en WordPress, lo que me permite ofrecer soluciones personalizadas cuando es
            necesario.
          </span>
          <span>
            <i className="fa-solid fa-check"></i>
            Comencé mi formación como programador de manera autodidacta en 2023, y hoy en día me encuentro cursando la
            Tecnicatura en Programación Web en la Universidad Nacional de San Juan.
          </span>
          <span>
            <i className="fa-solid fa-check"></i>
            ¿Les cuento algo sobre mí? Soy músico y docente. Me han dicho que soy una persona creativa. Algo de verdad
            debe haber en eso, porque encuentro en los procesos creativos todo lo que me apasiona: desde componer una
            canción hasta desarrollar una aplicación.
          </span>
        </p>
        <button onClick={handleDownloadPDF} className={styles.aboutme__downloadBtn}>
          DESCARGAR CV
        </button>
      </div>
      <div className={styles.aboutme__resumeContainer}>
        <div ref={targetRef} className={styles.aboutme__resumeContent}>
          {/*portada */}
          <div className={styles.aboutme__resumePortada}>
            <h3 className={styles.aboutme__resumeName}>Fernando Zárate</h3>
            <p className={styles.aboutme__resumeDesciption}>Desarrollador Fullstack</p>
          </div>
          {/* contact*/}
          <div className={styles.aboutme__resumeContact}>
            <div className={styles.aboutme__resumeInfo}>
              <img src={logo} alt="logo" />
              <span>www.fernandozarate.website</span>
              <i className="fa-solid fa-mobile-screen-button"></i>
              <span>+54 264 6271151</span>
              <i className="fa-solid fa-envelope"></i>
              <span>fernandozarate.dev@gmail.com</span>
              <i className="fa-brands fa-linkedin"></i>
              <span>https://www.linkedin.com/in/fernandozaratedev/</span>
              <i className="fa-solid fa-location-dot"></i>
              <span>San Juan, Argentina </span>
            </div>
            <div className={styles.aboutme__resumeQrContainer}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
