import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <p>&copy; {new Date().getFullYear()} Sam Bai. All rights reserved</p>
    </div>
  );
}

export default App;
