import "./assets/style/style.css"

import {
  BrowserRouter as Router,
  useLocation
} from "react-router-dom";

import LaRoute from "./route/Router";
import PiedDePage from "./components/PiedDePage";
import Navbar from "./components/template/Navbar";


const noDisplayComponent = "/Connection";

function App() {
  const usePageViews = () => {
    const location = useLocation();
    return location;
  }

  const DisplayNavbar = () => {
    const { pathname } = usePageViews();
    if (pathname !== noDisplayComponent) return <Navbar />
    return <></>;
  }

  const DisplayPiedDePage = () => {
    const { pathname } = usePageViews();
    if (pathname !== noDisplayComponent) return <PiedDePage />;
    return <></>;
  }


   return (
    <Router>
      <DisplayNavbar />

      <LaRoute />

      <DisplayPiedDePage />
    </Router>
  );
}

export default App;
