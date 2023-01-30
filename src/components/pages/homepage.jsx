import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (<>
    <div className="section">
      <div className="content">
        <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Hey, I'm Michael.</h1>
        <h3 className="subtitle is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-weight-light">
          I'm an aspiring Full Stack Developer based in Sandy, UK. 
          <br/><br/>
          Having recently completed a 12-week intensive coding bootcamp, I am now looking for my first role as a junior developer.
        </h3>
        <Link to="/about">Learn more</Link>
      </div>
    </div>
    </>
  );
};

export default Homepage;