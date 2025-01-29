import { useState, useEffect } from "react";
import styles from "./ProjectSection.module.css";
import Project from "../Project/Project";

import imgOne from "../../assets/image/one.svg";
import imgTwo from "../../assets/image/two.svg";
import imgThree from "../../assets/image/three.svg";

const ProjectSection = () => {
  const projects = [
    {
      imageUrl: imgOne,
      title: "Truetone",
      description: [
        "Es una aplicación de afinador sencilla y precisa para guitarra, bajo y ukelele.",
        "Desarrollada como una Single Page Application (SPA) con React, aprovecha la Web Audio API para capturar y procesar el sonido en tiempo real. Su diseño completamente responsive garantiza una experiencia óptima en cualquier dispositivo.",
        "Tecnologías: HTML ~ CSS ~ React ~ Vite ~ Web Audio API",
      ],
      linkApp: "https://tuner-app-mu.vercel.app/",
      linkCode: "https://github.com/fernandozarate07/tuner-app",
    },
    {
      imageUrl: imgTwo,
      title: "Simther",
      description: [
        "Es una aplicación web que permite conocer el clima de cualquier ciudad con solo unos clics. Utiliza la API de Visual Crossing para proporcionar datos precisos y actualizados del clima.",
        "La app está desarrollada con una arquitectura VCM (Vista-Controlador-Modelo), lo que garantiza una estructura ordenada y eficiente. La lógica de programación y el código de renderizado están perfectamente separados y se conectan a través del Controlador, que gestiona la interacción con el DOM.",
        "Tecnologias: HTML ~ CSS ~ Vanilla JS ~ WebPack",
      ],
      linkApp: "https://simple-weather-omega.vercel.app/",
      linkCode: "https://github.com/fernandozarate07/weather-app",
    },
    {
      imageUrl: imgThree,
      title: "Protoprogramadores",
      description: [
        "Protoprogramadores es una agencia digital especializada en la creación y mantenimiento de sitios web profesionales para negocios y emprendedores.",
        "Su plataforma fue desarrollada con WordPress e incorpora WooCommerce para gestionar la tienda online de manera eficiente.",
        "Tecnologías:  HTML ~ CSS ~ React ~ WordPress ~ WooCommerce ~ Rank Math",
      ],
      linkApp: "https://protoprogramadores.com",
      linkCode: "none",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    // cambia el intervalo a los 3s
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, isPaused]);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  return (
    <div
      className={styles.projectSection}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}>
      <Project
        title={projects[currentIndex].title}
        description={projects[currentIndex].description}
        imageUrl={projects[currentIndex].imageUrl}
        nextProject={nextProject}
        prevProject={prevProject}
        isPaused={isPaused}
        linkApp={projects[currentIndex].linkApp}
        linkCode={projects[currentIndex].linkCode}
      />
    </div>
  );
};

export default ProjectSection;
