import "./App.css";
import About from "./components/about/About";
import Contextdata from "./components/context/Context";
import NavBar from "./components/navbar/NavBar";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <Contextdata>
      <NavBar />
      <About />
      <Skills />
    </Contextdata>
  );
}

export default App;
