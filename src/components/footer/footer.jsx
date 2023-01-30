import React from "react";
import "./footer.sass";

const Footer = () => {
  return (<>
  <hr className="footer-separator"/>
    <footer className="footer">
      <div className="level">
        <div className="level-item">
          <div className="footer-text">
            <h3 className="title is-size-7 is-family-secondary has-text-weight-semibold">Michael Patsko</h3>
          </div>
        </div>
        <div className="level-item">
          <div className="footer-text has-text-centered-mobile">
            <h3 className="is-size-7 is-family-secondary has-text-weight-semibold">Socials</h3>
            <p className="is-size-7 is-family-secondary has-text-weight-light">
              <a className="is-underlined" href="https://github.com/michael-patsko" target="_blank" rel="noopener noreferrer">Github</a> |{" "}
              <a className="is-underlined" href="https://www.linkedin.com/in/michael-patsko-871086195/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>);
};

export default Footer;