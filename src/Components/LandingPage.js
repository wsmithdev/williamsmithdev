import React from "react";
import "../Styles/LandingPageStyle.css";
import { BsChevronDown } from 'react-icons/bs';


function LandingPage({ landingPageRef, scrollToProjects }) {
  return (
    <section ref={landingPageRef} className="landing-page-main">
      <div>
        <h1>
          Hello, I'm <span>William Smith</span>.<br />
          I'm a Software Developer.
        </h1>
      </div>
      <div className="landing-page-main-chevron">
      <BsChevronDown onClick={scrollToProjects}/>
      </div>
    </section>
  );
}

export default LandingPage;
