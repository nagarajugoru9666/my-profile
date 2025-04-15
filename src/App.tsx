import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import Timeline from './components/Timeline/Timeline';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
    <Header />
    <Banner />
    <AboutUs/>
    <Timeline/>
    <Services />
    <Skills />
    <Portfolio />
    <Contact />
    <Footer/>
    </>
  );
}

export default App;
