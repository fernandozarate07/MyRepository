import { useState, useEffect, useContext } from "react";
import { AppContext } from "./modules/AppContext/AppContext.jsx";
import HomeSection from "./modules/HomeSection/HomeSection.jsx";
import ResumeSection from "./modules/ResumeSection/ResumeSection.jsx";
import NavSection from "./modules/NavSection/NavSection.jsx";
import ProjectSection from "./modules/ProjectSection/ProjectSection.jsx";
import Loader from "./modules/Loader/Loader.jsx";
import "./App.css";

function App() {
  //  el estado indica la seccion renderizada
  const { sectionState } = useContext(AppContext);
  // indica si el loader es visible o no
  const [isLoading, setIsLoading] = useState(true);
  // logica para activar el fadeOut al cambiar entre secciones
  const [fadeOut, setFadeOut] = useState(false);
  const [currentSection, setCurrentSection] = useState(sectionState); // Estado para asegurar que fadeOut se ejecute antes de renderizar la nueva sección.

  useEffect(() => {
    setFadeOut(true);

    const timer = setTimeout(() => {
      setCurrentSection(sectionState);
      setFadeOut(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [sectionState]);

  return (
    <div className="app">
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <div className={`app__container ${isLoading ? "invisible" : "visible"}`}>
        <section className="app__left">
          <NavSection />
        </section>
        <section className={`app__right ${fadeOut ? "invisible" : "visible"}`}>
          {currentSection === "home" && <HomeSection />}
          {currentSection === "projects" && <ProjectSection />}
          {currentSection === "resume" && <ResumeSection />}
        </section>
      </div>
    </div>
  );
}

export default App;
