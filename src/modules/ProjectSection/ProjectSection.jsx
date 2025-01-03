import { useState, useEffect } from "react";
import styles from "./ProjectSection.module.css";
import Project from "../Project/Project";

import imgOne from "../../assets/image/one.png";
import imgTwo from "../../assets/image/two.png";
import imgThree from "../../assets/image/three.png";
import imgFour from "../../assets/image/four.png";
import imgFive from "../../assets/image/five.png";

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
        "Ofrecemos servicios como portafolios, blogs, e-commerce y landing pages personalizados.",
        "Trabajamos con tecnologías modernas y WordPress para garantizar diseños únicos y funcionales.",
        "Tecnologías:  HTML ~ CSS ~ React ~ WordPress ~ WooCommerce ~ Rank Math",
      ],
      linkApp: "https://protoprogramadores.com",
      linkCode: "none",
    },
    {
      imageUrl: imgFour,
      title: "Sketchbox",
      description: [
        "Sketchbox es una app de dibujo inspirada en el clásico Paint.",
        "Desarrollada como un desafío de aprendizaje, cual condiciones indicaban usar solamente Flexbox y Vanilla JS, evitando Grid.",
        "Para lograr la funcionalidad se implementó un algoritmo propio para ajustar la cuadrícula perfectamente al contenedor.",
        "Tecnologías: HTML ~ CSS ~ Vanilla JS",
      ],
      linkApp: "https://etch-a-sketch-kappa-six.vercel.app/",
      linkCode: "https://github.com/fernandozarate07/Etch-a-Sketch",
    },
    {
      imageUrl: imgFive,
      title: "My Portfolio",
      description: [
        "Si ya lo sé, es redundante colocar aquí la web que ya estás utilizando. Sin embargo, quería comentarte un poco sobre el proceso detrás de su desarrollo.",
        "Este portafolio está diseñado como una Single Page Application (SPA). Utilizando React, ofrece una navegación fluida y rápida. Implementa Context API para una gestión de estado global, para la descarga del CV utilicé Canvas y jsPDF.",
        "Cuenta con un Responsive Design que se adapta perfectamente a distintos dispositivos.",
        "Tecnologías: HTML ~ CSS ~ React ~ Vite ~ Canvas ~ jsPDF",
      ],
      linkApp: "",
      linkCode: "https://github.com/fernandozarate07/MyRepository",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    //activa el fadeOut .5s antes de que cambie de proyecto

    // const timer = setTimeout(() => {
    //   setFadeOut(true);
    // }, 3500);
    //cambia el intervalo a los 3s
    const intervalId = setInterval(() => {
      setFadeOut(false);
      setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    }, 4000);

    return () => {
      // clearTimeout(timer);
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
      className={`${styles.projectSection} ${fadeOut ? "invisible" : "visible"}`}
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
