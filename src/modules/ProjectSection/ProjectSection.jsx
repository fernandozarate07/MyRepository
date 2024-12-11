import { useState, useEffect } from "react";
import styles from "./ProjectSection.module.css";
import Project from "../Project/Project";

import imageOne from "../../assets/image/one.png";
import imageTwo from "../../assets/image/two.png";
import imageThree from "../../assets/image/three.png";
import imageFour from "../../assets/image/four.png";

const ProjectSection = () => {
  const projects = [
    {
      title: "Aplicación Móvil",
      description:
        "Desarrollo de una app para gestionar tareas diarias, con funcionalidades de recordatorios, tareas pendientes y sincronización en la nube para acceso desde cualquier dispositivo.",
      imageUrl: imageOne,
      link: null,
    },
    {
      title: "Sitio Web Corporativo",
      description:
        "Rediseño de un sitio web para una empresa de tecnología, mejorando la experiencia del usuario con una interfaz moderna y optimización para dispositivos móviles y SEO.",
      imageUrl: imageTwo,
      link: null,
    },
    {
      title: "E-commerce de Ropa",
      description:
        "Plataforma de comercio electrónico para la venta de ropa online, con características como pagos seguros, seguimiento de pedidos y recomendaciones personalizadas para los usuarios.",
      imageUrl: imageThree,
      link: null,
    },
    {
      title: "Red Social de Viajeros",
      description:
        "Red social para conectar viajeros y compartir experiencias, permitiendo a los usuarios crear itinerarios, recomendar destinos y formar grupos para viajes en conjunto.",
      imageUrl: imageFour,
      link: null,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    //activa el fadeOut .25s antes de que cambie de proyecto
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2750);
    //cambia el intervalo a los 3s
    const intervalId = setInterval(() => {
      setFadeOut(false);
      setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(intervalId);
    };
  }, [currentIndex, isPaused]);

  const nextProject = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
      setFadeOut(false);
    }, 250);
  };

  const prevProject = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
      setFadeOut(false);
    }, 250);
  };

  return (
    <div
      className={`${styles.projectSection} ${fadeOut ? styles.fadeOut : null}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}>
      <Project
        title={projects[currentIndex].title}
        description={projects[currentIndex].description}
        imageUrl={projects[currentIndex].imageUrl}
        nextProject={nextProject}
        prevProject={prevProject}
        isPaused={isPaused}
        link={projects[currentIndex].link}
      />
    </div>
  );
};

export default ProjectSection;
