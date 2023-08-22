import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import Partner from './components/Partner';
import Algo from './components/Algo';
import Lodaing from './components/Lodaing';
import Work from './components/Work';
import Team from './components/Team';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RoadMap from './components/RoadMap';
import Accordian from './components/Accordian';
import Footer from './components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import BackToTop from './components/BackToTop';
function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className=' overflow-hidden'>
        <Lodaing />
        <BackToTop />
        <NavBar />
        <Welcome />
        <Partner />
        <Algo />
        <Work />
        <Team />
        <RoadMap />
        <Accordian />
        <Footer />

      </div>
    </>
  );
}

export default App;
