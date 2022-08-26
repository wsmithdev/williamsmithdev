import "../Styles/SocialTabsStyle.css";
import { IconContext } from "react-icons";
import { BsLinkedin, BsGithub, BsFillCalendar2DayFill } from "react-icons/bs";

function SocialTabs() {
  return (
    <div className="social-tabs">
      <div onClick={() => window.open("https://www.linkedin.com/in/wsmithdev")} className="social-tabs-linkedin">
        <div className="linkedin-text">LinkedIn</div>
        <div className="spacer"></div>
        <div className="linkedin-icon">
          <IconContext.Provider value={{ className: "react-icons" }}>
            <BsLinkedin />
          </IconContext.Provider>
        </div>
      </div>

      <div onClick={() => window.open("https://github.com/wsmithdev")} className="social-tabs-github">
        <div className="github-text">GitHub</div>
        <div className="spacer"></div>
        <div className="github-icon">
          <IconContext.Provider value={{ className: "react-icons" }}>
            <BsGithub />
          </IconContext.Provider>
        </div>
      </div>

      <div onClick={() => window.open("https://calendly.com/williamsmithdev")}  className="social-tabs-calendly">
        <div className="calendly-text">Calendly</div>
        <div className="spacer"></div>
        <div className="calendly-icon">
          <IconContext.Provider value={{ className: "react-icons" }}>
            <BsFillCalendar2DayFill />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default SocialTabs;
