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
      title: "TrueTone",
      description: [
        "TrueTone es una app de afinador simple y precisa para guitarra, bajo y ukulele.",
        "Es una Single Page Application (SPA) desarrollada con React.",
        "Utiliza la Web Audio API para capturar y procesar el sonido, y es completamente responsive para una experiencia óptima en cualquier dispositivo.",
        "Tecnologías: HTML ~ CSS ~ React ~ Vite ~ Web Audio API",
      ],
      linkApp: "https://tuner-app-mu.vercel.app/",
      linkCode: "https://github.com/fernandozarate07/tuner-app",
    },
    {
      imageUrl: imgTwo,
      title: "Simple Weather",
      description: [
        "Simple Weather es una aplicación web intuitiva y minimalista que permite conocer el clima de cualquier ciudad con solo unos clics. Utiliza la API de Visual Crossing para proporcionar datos precisos y actualizados del clima.",
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
        "Protoprogramadores es una agencia digital que crea y mantiene sitios web profesionales para negocios y emprendedores.",
        "Fue creada con WordPress utilizando, WooCommerce para crear la tienda online.",
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
