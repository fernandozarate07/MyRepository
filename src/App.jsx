import "./App.css";
import HomeSection from "./modules/HomeSection/HomeSection.jsx";
import NavSection from "./modules/NavSection/NavSection.jsx";

function App() {
  return (
    <div className="app__container">
      <section className="app__left">
        <NavSection />
      </section>
      <section className="app__right">
        <HomeSection />
      </section>
    </div>
  );
}
export default App;
