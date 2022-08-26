// Components
import Nav from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import SocialTabs from "./Components/SocialTabs";

import "./App.css";
import { useRef } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // Refs
  const landingPageRef = useRef(null);
  const projectsPageRef = useRef(null);
  const aboutPageRef = useRef(null);
  const contactPageRef = useRef(null);

  // Scroll functions
  const scrollToLandingPage = () => landingPageRef.current.scrollIntoView();
  const scrollToProjects = () => projectsPageRef.current.scrollIntoView({behavior: "smooth", top: 999});
  const scrollToAbout = () => aboutPageRef.current.scrollIntoView();
  const scrollToContact = () => contactPageRef.current.scrollIntoView();

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Nav
        goToLandingPage={scrollToLandingPage}
        goToProjects={scrollToProjects}
        goToAbout={scrollToAbout}
        goToContact={scrollToContact}
      />
      <LandingPage
        landingPageRef={landingPageRef}
        scrollToProjects={scrollToProjects}
      />
      <Projects projectsRef={projectsPageRef} />
      <About someRef={aboutPageRef} />
      <Contact contactRef={contactPageRef} />
      <Footer />
      <SocialTabs />
    </div>
  );
}

export default App;
