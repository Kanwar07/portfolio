import "./App.css";
import About from "./components/about/About";
import Contextdata from "./components/context/Context";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <Contextdata>
      <NavBar />
      <About />
    </Contextdata>
  );
}

export default App;
