import "./App.css";
import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <div className="app loaded">
      <Analytics />
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Sam Bai. All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
