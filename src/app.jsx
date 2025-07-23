import Dashboard from "./Pages/Dashboard/Dashboard";
import { Navbar } from "./components/Navbar";
import About from "./Pages/About/About";
import { Router } from "preact-router";

export function App() {
 

  return (
    <div>
      <Navbar />
      <Dashboard />
      <About />
    </div>
  )
}
