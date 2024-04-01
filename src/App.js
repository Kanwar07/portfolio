import "./App.css";
import About from "./components/about/About";
import Contextdata from "./components/context/Context";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";
import Videofile from "./components/video/Videofile";

function App() {
  return (
    <Contextdata>
      <NavBar />
      <About />
      <section id="Skills">
        <Skills />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="Services">
        <Services />
      </section>
      <Videofile />
      <section id="Testimonials">
        <Testimonials />
      </section>
      <Footer />
    </Contextdata>
  );
}

export default App;
