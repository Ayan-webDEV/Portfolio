import Nav from "./Components/Navbar/Nav";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skill";
import Project from "./Components/Projects/Project";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
