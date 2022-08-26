import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/ProjectsStyle.css";
import project1Image from "../Styles/Images/Wallet-pana.svg";
import project2Image from "../Styles/Images/ISS.svg";
import project3Image from "../Styles/Images/Car.svg";

function Projects({ projectsRef }) {
  return (
    <section ref={projectsRef} className="projects-main">
      <h1>
        Recent <span className="span-green">Projects</span>
      </h1>
      <Container>
        <Row className="project">
          <Col className="project-info">
            <span className="project-title">Use It or Lose It</span>
            <span className="project-technologies span-green">
              ReactJS | NodeJS | ExpressJS | PostgreSQL | Plaid API | Twilio API
            </span>
            <span className="project-desc">
              A web application that allows users to connect their bank accounts
              and receive reminders via text / email to use their credit cards to
              avoid account closures or loss of rewards due to prolonged
              inactivity.
            </span>
            <div>
              <button
                onClick={() =>
                  window.open("https://use-it-or-lose-it.surge.sh/")
                }
                className="project-btn btn-primary"
              >
                Site
              </button>
              <button
                onClick={() =>
                  window.open("https://github.com/wsmithdev/uioli-client")
                }
                className="project-btn btn-secondary"
              >
                Code
              </button>
            </div>
          </Col>
          <Col className="project-image">
            <img src={project1Image} alt="credit card" />
          </Col>
        </Row>
        <Row className="project">
          <Col className="project-image">
            <img src={project2Image} alt="astronaut" />
          </Col>
          <Col className="project-info">
            <span className="project-title">
              International Space Station Tracker
            </span>
            <span className="project-technologies span-green">
              Jinja | Python | Flask | PostgreSQL | Geoapify API | Twilio API
            </span>
            <span className="project-desc">
              A web application that allows users to get accurate times that
              the ISS will be visible from their location. Users can create an
              account, set their location using GPS coordinates or by entering a
              street address that will then be converted to coordinates. 
              Users can opt in for text or email notifications that will be sent
              out 10 - 30 minutes before a visable pass.
            </span>
            <div>
              <button
                onClick={() =>
                  window.open("https://sb-iss-tracker.herokuapp.com")
                }
                className="project-btn btn-primary"
              >
                Site
              </button>
              <button
                onClick={() => window.open("https://github.com/wsmithdev/iss")}
                className="project-btn btn-secondary"
              >
                Code
              </button>
            </div>
          </Col>
        </Row>
        <Row className="project">
          <Col className="project-info">
            <span className="project-title">Prestige Auto</span>
            <span className="project-technologies span-green">
              ReactJS | NodeJS | ExpressJS | MongoDB
            </span>
            <span className="project-desc">
              A web app built for a fictional motor club. The purpose of the
              site is to allow members as well as prospective members to browse
              a fleet of cars available to rent. After signing up or logging in,
              a user can change their profile information as well as upload a
              profile picture. An admin user can create, update and remove cars
              from the database.
            </span>
            <div>
              <button
                onClick={() =>
                  window.open("https://prestigeauto.herokuapp.com")
                }
                className="project-btn btn-primary"
              >
                Site
              </button>
              <button
                onClick={() =>
                  window.open("https://github.com/wsmithdev/prestigeauto")
                }
                className="project-btn btn-secondary"
              >
                Code
              </button>
            </div>
          </Col>
          <Col className="project-image">
            <img src={project3Image} alt="car" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
