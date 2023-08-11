import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Service from "./components/Service";
import Skill from "./components/Skill";
import "./index.css";

function App() {
  return (
    <div className="bg-primary-color font-Poppins">
      <Navbar />
      <div className="min-h-screen">
        <Header />
        <Hero />
      </div>
      <About />
      <Skill />
      <Service />
      <Journey />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
