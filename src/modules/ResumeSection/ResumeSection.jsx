import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import styles from "./ResumeSection.module.css";

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
    <div className={styles.resume}>
      <button onClick={handleDownloadPDF} className={styles.resume__downloadBtn}>
        DESCARGAR CV
      </button>
      <div className={styles.printContainer}>
        <div ref={targetRef} className={styles.resume__container}>
          {/* portada */}
          <div className={styles.resume__portada}>
            <div className={styles.resume_nameContainer}>
              <h1 className={styles.resume__name}>Fernando Zárate</h1>
              <p className={styles.resume__description}>Desarrollador Web</p>
            </div>
            <div className={styles.resume__contact}>
              <i className="fa-solid fa-house"></i>
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
          </div>
          {/* sobre mí */}
          <div className={`${styles.resume__containerAboutme} ${styles.section}`}>
            <h2 className={styles.resume__subtitle}>SOBRE MÍ</h2>
            <p className={styles.resume__aboutmeDescription}>
              <span>
                Soy un profesional creativo con una profunda pasión por el diseño. Mi formación como programador comenzó
                de manera autodidacta en 2023, en 2025 decidí formalizar mis conocimientos, comenzando mis estudios en
                programación web en la Universidad Nacional de San Juan.
              </span>
              <span>
                Mis estudios previos en música me permiten combinar mis habilidades técnicas en programación con una
                visión artística y funcional de los proyectos. Como profesor de música, he desarrollado una sólida
                formación pedagógica que me ha permitido adquirir habilidades transversales clave, como la comunicación
                efectiva, el aprendizaje autónomo, la resolución de problemas y el trabajo en equipo. Mi capacidad para
                abordar desafíos de manera innovadora y mi enfoque en los procesos creativos son la base de mi
                desarrollo profesional y personal.
              </span>
            </p>
          </div>
          {/* experiencia */}
          <div className={`${styles.resume__containerExperience} ${styles.section}`}>
            <h2 className={styles.resume__subtitle}>EXPERIENCIA LABORAL</h2>
            <div className={styles.resume__sectionExperience}>
              <h3>Experiencia como Programador</h3>
              <p>
                Aunque aún no tengo experiencia laboral formal como programador, estoy buscando activamente mi primera
                oportunidad profesional en el área. Sin embargo, he trabajado en diversos proyectos personales que
                puedes explorar en mi portafolio web (puedes encontrar el enlace en la sección de contacto). Estos
                proyectos reflejan mi capacidad para aplicar mis conocimientos de programación web en situaciones
                prácticas y mi dedicación por seguir aprendiendo y mejorando.
              </p>
            </div>
            <div className={styles.resume__sectionExperience}>
              <h3>Otras Experiencias</h3>
              <p>
                He trabajado en diversos puestos, siendo el último como docente de grado en una escuela primaria en San
                Juan, Argentina. Ejercí la titularidad del cargo desde 2022 hasta mediados de 2024, donde adquirí una
                valiosa experiencia en la gestión de aulas, el desarrollo de planes de enseñanza y la formación de
                estudiantes, lo que fortaleció mis habilidades de comunicación, liderazgo y resolución de problemas.
              </p>
            </div>
          </div>
          {/* educación y stack */}
          <div className={`${styles.resume__containerEducationStack} ${styles.section}`}>
            {/* educación */}
            <div className={styles.resume__containerEducation}>
              <h2 className={styles.resume__subtitle}>EDUCACIÓN</h2>
              <div className={styles.resume__contentEstudies}>
                <div className={styles.resume__educationItem}>
                  <span className={styles.resume__educationDate}>2025 - PRESENTE</span>
                  <div className={styles.containerEducationSpan}>
                    <span>Tecnicatura en Programación Web</span>
                    <span>Universidad Nacional de San Juan</span>
                  </div>
                </div>
                <div className={styles.resume__educationItem}>
                  <span className={styles.resume__educationDate}>2016 - 2021</span>
                  <div className={styles.containerEducationSpan}>
                    <span>Profesora en Educación Musical</span>
                    <span>Instituto superior Santa Cecilia</span>
                  </div>
                </div>
              </div>
            </div>
            {/* stack */}
            <div className={styles.resume__containerStack}>
              <h2 className={styles.resume__subtitle}>TECNOLOGÍAS</h2>
              <div className={styles.resume__contentStack}>
                <div className={styles.resume__stackContainer}>
                  <span> • HTML</span>
                  <span> • CSS</span>
                  <span> • Bootstrap</span>
                  <span> • Sass</span>
                </div>
                <div className={styles.resume__stackContainer}>
                  <span> • JavaScript</span>
                  <span> • React</span>
                  <span> • Git</span>
                  <span> • GitHub</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
