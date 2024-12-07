import "./App.css";
import HomeSection from "./modules/HomeSection/HomeSection.jsx";
import NavSection from "./modules/NavSection/NavSection.jsx";
import ProjectSection from "./modules/ProjectSection/ProjectSection.jsx";

function App() {
  return (
    <div className="app__container">
      <section className="app__left">
        <NavSection />
      </section>
      <section className="app__right">
        {/* <HomeSection /> */}
        <ProjectSection />
      </section>
    </div>
  );
}
export default App;
