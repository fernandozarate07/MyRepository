import "./App.css";
import HomeSection from "./modules/HomeSection/HomeSection.jsx";
import ResumeSection from "./modules/ResumeSection/ResumeSection.jsx";
import NavSection from "./modules/NavSection/NavSection.jsx";
import ProjectSection from "./modules/ProjectSection/ProjectSection.jsx";
import { AppContext } from "./modules/AppContext/AppContext.jsx";
import { useContext } from "react";

function App() {
  const { sectionState } = useContext(AppContext);

  return (
    <div className="app__container">
      <section className="app__left">
        <NavSection />
      </section>
      <section className="app__right">
        {sectionState === "home" && <HomeSection />}
        {sectionState === "projects" && <ProjectSection />}
        {sectionState === "resume" && <ResumeSection />}
      </section>
    </div>
  );
}

export default App;
