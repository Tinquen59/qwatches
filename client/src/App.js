import "./assets/style/style.css"

import { BrowserRouter as Router } from "react-router-dom";
import LaRoute from "./route/Router";

import PiedDePage from "./components/PiedDePage";

function App() {
  return (
    <Router>

      <LaRoute />

      <PiedDePage />
    </Router>
  );
}

export default App;
