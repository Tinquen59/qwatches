import "./assets/style/style.css"

import {
  BrowserRouter as Router,
  useLocation
} from "react-router-dom";

import LaRoute from "./route/Router";
import Navbar from "./components/template/Navbar";
import PiedDePage from "./components/template/PiedDePage";


const noDisplayComponent = "/Connection";
const regexConnection = new RegExp(noDisplayComponent, "i");

function App() {
  /**
   * use useLocation of react router
   * @returns the page location
   */
  const usePageViews = () => {
    const location = useLocation();
    return location;
  };

  /**
   * checks the pathname
   * @returns Navbar composant or nothing
   */
  const DisplayNavbar = () => {
    const { pathname } = usePageViews();
    if (!regexConnection.test(pathname)) return <Navbar />
    return <></>;
  };

  /**
   * checks the pathname
   * @returns Navbar composant or nothing
   */
  const DisplayPiedDePage = () => {
    const { pathname } = usePageViews();
    if (!regexConnection.test(pathname)) return <PiedDePage />;
    return <></>;
  };

  
   return (
    <Router forceRefresh={true} >
      <DisplayNavbar />

      <LaRoute />

      <DisplayPiedDePage />
    </Router>
  );
}

export default App;
