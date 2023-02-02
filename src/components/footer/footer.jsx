import React from "react";
import "./footer.sass";

const Footer = () => {
  return (<>
  <hr className="footer-separator"/>
    <footer className="footer">
      <div className="level">

        <div className="level-item">
          <div className="footer-text has-text-centered-mobile">
            <h3 className="title is-size-7 is-family-secondary has-text-weight-semibold">© 2023</h3>
            <p className="is-size-7 is-family-secondary has-text-weight-light">Michael Patsko</p>
            <br className="is-hidden-mobile"/>
          </div>
        </div>

        <div className="level-item">
          <div className="footer-text has-text-centered-mobile">
            <h3 className="is-size-7 is-family-secondary has-text-weight-semibold">Social</h3>
            <p className="is-size-7 is-family-secondary has-text-weight-light">
              <a className="is-underlined" href="https://github.com/michael-patsko" target="_blank" rel="noopener noreferrer">Github</a>
              <br/>
              <a className="is-underlined" href="https://www.linkedin.com/in/michael-patsko-871086195/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
          </div>
        </div>

        <div className="level-item">
          <div className="footer-text has-text-centered-mobile">
            <h3 className="is-size-7 is-family-secondary has-text-weight-semibold">Legal</h3>
            <p className="is-size-7 is-family-secondary has-text-weight-light">
              <a className="is-underlined" href="https://scripts.sil.org/cms/scripts/page.php?item_id=OFL-FAQ_web" target="_blank" rel="noopener noreferrer">Lora - Font License</a>
              <br/>
              <a className="is-underlined" href="https://scripts.sil.org/cms/scripts/page.php?item_id=OFL-FAQ_web" target="_blank" rel="noopener noreferrer">Raleway - Font License</a>
            </p>
          </div>
        </div>

      </div>
    </footer>
    </>);
};

export default Footer;