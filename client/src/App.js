import "./assets/style/style.css"

import { BrowserRouter as Router } from "react-router-dom";
import LaRoute from "./route/Router";

import PiedDePage from "./components/PiedDePage";
import Navbar from "./components/template/Navbar";

function App() {
  return (
    <Router>
      <Navbar />

      <LaRoute />

      <PiedDePage />
    </Router>
  );
}

export default App;
