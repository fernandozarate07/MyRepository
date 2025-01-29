import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import styles from "./ResumeSection.module.css";
import logo from "../../assets/image/logo.svg";
import qr from "../../assets/image/qr.png";
import Calltoaction from "../Callaction/Cta.jsx";
import Buttonprimary from "../Buttonprimary/Buttonprimary.jsx";

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
        <div className={styles.btnsContainer}>
          <Buttonprimary type="button" content={"Descargar CV"} action={handleDownloadPDF} />
          <Calltoaction link={"https://www.linkedin.com/in/fernandozaratedev/"} content={"Disponible para trabajar"} />
        </div>
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
              <img src={logo} alt="logo" width={15} />
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
            <div className={styles.aboutme__resumeQrContainer}>
              <img src={qr} alt="codigo QR" width={100} />
            </div>
          </div>
          {/* experience*/}
          <div className={styles.aboutme__resumeExperience}>
            <h3 className={styles.aboutme__resumeSubtitle}>Experiencia Laboral</h3>
            <p>
              Cuento con un 1 año de experiencia como desarrollador freelance, soy fundador de Protoprogramadores, una
              agencia de desarrollo web con sede en San Juan, Argentina. He liderado proyectos personalizados con
              tecnologías a medida y WordPress, brindando soluciones eficientes que se adaptan a las necesidades
              específicas de nuestros clientes.
            </p>
            <h3 className={styles.aboutme__resumeSubtitle}>Estudios</h3>
            <p className={styles.education}>
              <span>Tecnicatura en Programación Web, UNSJ (en proceso)</span>
              <span>Profesorado en Educación Musical, ISSC (finalizado)</span>
            </p>
            <h3>Stack de Lenguajes</h3>
            <ul className={styles.aboutme__resumeSubtitle}>
              <li>HTML</li>
              <li>CSS & Bootstrap</li>
              <li>JavaScript, React & Next.js</li>
              <li>PostgreSQL</li>
              <li>Node.js & Express</li>
              <li>WordPress</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
