import { useState, useEffect } from "react";
import styles from "./ProjectSection.module.css";
import Project from "../Project/Project";

const ProjectSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // Estado para pausar el intervalo

  const projects = [
    {
      title: "Aplicación Móvil",
      description:
        "Desarrollo de una app para gestionar tareas diarias, con funcionalidades de recordatorios, tareas pendientes y sincronización en la nube para acceso desde cualquier dispositivo.",
      imageUrl: "../../src/assets/image/one.jpg",
    },
    {
      title: "Sitio Web Corporativo",
      description:
        "Rediseño de un sitio web para una empresa de tecnología, mejorando la experiencia del usuario con una interfaz moderna y optimización para dispositivos móviles y SEO.",
      imageUrl: "../../src/assets/image/two.jpg",
    },
    {
      title: "E-commerce de Ropa",
      description:
        "Plataforma de comercio electrónico para la venta de ropa online, con características como pagos seguros, seguimiento de pedidos y recomendaciones personalizadas para los usuarios.",
      imageUrl: "../../src/assets/image/three.jpg",
    },
    {
      title: "Red Social de Viajeros",
      description:
        "Red social para conectar viajeros y compartir experiencias, permitiendo a los usuarios crear itinerarios, recomendar destinos y formar grupos para viajes en conjunto.",
      imageUrl: "../../src/assets/image/four.jpg",
    },
  ];

  useEffect(() => {
    if (isPaused) return; // Detener el intervalo si está pausado

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar
  }, [projects.length, isPaused]);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  return (
    <div className={styles.projectSection__container}>
      <button onClick={nextProject} className={styles.projectSection__btn}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
      <div
        className={styles.projectSection__content}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}>
        <Project
          title={projects[currentIndex].title}
          description={projects[currentIndex].description}
          imageUrl={projects[currentIndex].imageUrl}
        />
      </div>
      <button onClick={prevProject} className={styles.projectSection__btn}>
        <i className="fa-solid fa-arrow-down"></i>
      </button>
      <div className={styles.projectSection__all_project}>
        <a href="#">Todos los proyectos</a>
      </div>
    </div>
  );
};

export default ProjectSection;
