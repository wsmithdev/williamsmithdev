import React from "react";
import "../Styles/AboutStyle.css";

function About({ someRef }) {
  return (
    <section ref={someRef} className="about-main">
      <h1>
        About <span className="span-green">Me</span>
      </h1>

      <p className="about-desc">
        I'm a user-experience focused Software Developer based in New York who
        is passionate about creating user-friendly applications, and writing
        efficient, quality, and maintainable code.
      </p>
      <p className="about-desc">
        After a successful 6-year career as a Control Systems Engineer, I
        decided to pursue my true passion for Software Development. Throughout
        my career as a Control Systems Engineer, I learned the importance of
        having an efficient, problem-solving mindset and the ability to
        collaborate with many different team members to achieve an optimal
        solution. My experience in the Control Systems Engineering sector has
        equipped me with invaluable hard and soft skills that greatly enhance my
        proficiency as a developer.
      </p>
      <p className="about-desc">
        When I'm not coding, I enjoy traveling and immersing myself in the many
        beautiful cultures of the world. I also love playing guitar, trying
        different cuisines, and, of course, spending time with my beautiful wife
        and fur baby, Leo.
      </p>
    </section>
  );
}

export default About;
