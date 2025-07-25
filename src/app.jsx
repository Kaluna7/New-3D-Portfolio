import Dashboard from "./Pages/Dashboard/Dashboard";
import { Navbar } from "./components/Navbar";
import About from "./Pages/About/About";
import Project from "./Pages/Project/Project";
import Experience from "./Pages/Experience/Experience";
import { Router } from "preact-router";

export function App() {
 

  return (
    <div className="px-10">
      <Navbar />
      <Dashboard />
      <About />
      <Project />
      <Experience />
    </div>
  )
}