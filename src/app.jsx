import HomePage from "./Pages/Home Page/HomePage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { Router } from "preact-router";

export function App() {
 

  return (
    <div>
      <Router>
        <HomePage path="/" />
        <Dashboard path="/dashboard" />
      </Router>
    </div>
  )
}
