import React from "react";
import "../Styles/FooterStyle.css";

function Footer() {
  return (
    <section className="footer-main">
      <div className="footer-title">
        <span className="span-green">W</span>illiam{" "}
        <span className="span-green">S</span>mith
      </div>
      <span className="footer-email">info@williamsmithdev.com</span>
      <span className="footer-credits">
        Built by{" "}
        <a
          href="https://www.linkedin.com/in/wsmithdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          William Smith
        </a>
      </span>
      <span className="footer-credits">
        Designed by{" "}
        <a
          href="https://www.linkedin.com/in/brookechehebar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brooke Chehebar
        </a>
      </span>
      <span className="footer-credits illustrations">
        <a href="https://storyset.com">Illustrations by Storyset</a>
      </span>
    </section>
  );
}

export default Footer;
