import React from "react";
import { Link } from "react-router-dom";
import Fade from "../../animations/fade";

const Homepage = () => {
  return (<>
    <div className="section">
      <div className="content">
        <Fade duration="1000"><h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Hey, I'm Michael.</h1></Fade>
        <Fade delay="1500" duration="1000">
          <h3 className="subtitle is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-weight-light">
            I'm an aspiring Full Stack Developer based in Sandy, UK. 
            <br/><br/>
            Having recently completed a 12-week coding{" "}
            <a className="is-underlined" href="https://www.techswitch.co.uk/home" target="_blank" rel="noopener noreferrer">bootcamp</a>,{" "}
            I am now looking for my first role as a junior developer.
          </h3>
        </Fade>
        <Link to="/about">Learn more</Link>
      </div>
    </div>
    </>
  );
};

export default Homepage;