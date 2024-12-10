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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app__container">
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <div className={`app__content ${isLoading ? "hidden" : "visible"}`}>
        <section className="app__left">
          <NavSection />
        </section>
        <section className="app__right">
          {sectionState === "home" && <HomeSection />}
          {sectionState === "projects" && <ProjectSection />}
          {sectionState === "resume" && <ResumeSection />}
        </section>
      </div>
    </div>
  );
}

export default App;
