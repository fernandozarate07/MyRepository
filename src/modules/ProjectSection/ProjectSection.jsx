import { useState, useEffect } from "react";
import styles from "./ProjectSection.module.css";
import Project from "../Project/Project";

const ProjectSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const projects = [
    {
      title: "Aplicación Móvil",
      description:
        "Desarrollo de una app para gestionar tareas diarias, con funcionalidades de recordatorios, tareas pendientes y sincronización en la nube para acceso desde cualquier dispositivo.",
      imageUrl: "../../src/assets/image/one.png",
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
    if (isPaused) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(intervalId);
  }, [projects.length, isPaused]);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  return (
    <div className={styles.projectSection}>
      <div
        className={styles.projectSection__Project}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}>
        <Project
          title={projects[currentIndex].title}
          description={projects[currentIndex].description}
          imageUrl={projects[currentIndex].imageUrl}
          nextProject={nextProject}
          prevProject={prevProject}
          isPaused={isPaused}
        />
      </div>
      <div className={styles.projectSection__allProjectBtn}>
        <a href="#">Todos los proyectos</a>
      </div>
    </div>
  );
};

export default ProjectSection;
