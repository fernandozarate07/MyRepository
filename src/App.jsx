import { useState, useEffect, useContext } from "react";
import { AppContext } from "./modules/AppContext/AppContext.jsx";
import HomeSection from "./modules/HomeSection/HomeSection.jsx";
import ResumeSection from "./modules/ResumeSection/ResumeSection.jsx";
import NavSection from "./modules/NavSection/NavSection.jsx";
import ProjectSection from "./modules/ProjectSection/ProjectSection.jsx";
import Loader from "./modules/Loader.jsx/Loader.jsx";
import "./App.css";

function App() {
  const { sectionState } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [currentSection, setCurrentSection] = useState(sectionState);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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
      <div className={`app__content ${isLoading ? "hidden" : "visible"}`}>
        <section className="app__left">
          <NavSection />
        </section>
        <section className="app__right">
          <div className={`section ${fadeOut ? "fade-out" : ""}`}>
            {currentSection === "home" && <HomeSection />}
            {currentSection === "projects" && <ProjectSection />}
            {currentSection === "resume" && <ResumeSection />}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
