import React from "react";
import { Link } from "react-router-dom";
import Fade from "../../animations/fade";
import "./homepage.sass";

const Homepage = () => {
  return (<>
    <div className="container is-fullhd">
      <div className="section">
        <div className="content">
          <Fade duration="1000">
            <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Hey, I'm Michael.</h1>
          </Fade>
          <Fade delay="1200" duration="1000">
            <h2 className="subtitle is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-weight-light">
              I'm an aspiring Full Stack Developer based in Sandy, UK. 
              <br/><br/>
              Having recently completed a 12-week coding{" "}
              <a className="is-underlined hover-link" href="https://www.techswitch.co.uk/home" target="_blank" rel="noopener noreferrer">bootcamp</a>,{" "}
              I am now looking for my first role as a junior developer.
            </h2>
          </Fade>
        </div>
      </div>

      <div className="section">
        <h3 className="title is-spaced is-size-3-desktop is-size-3-tablet is-size-4-mobile is-family-secondary">Technical Skills</h3>
        <div className="columns is-mobile is-multiline is-centered">

          <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile">
            <div className="card card-1">
              <header className="card-header">
                <h4 className="card-header-title is-family-secondary is-size-6">Frontend</h4>
              </header>
              <div className="card-content">
                <div className="content">
                  <ul>
                    <li>React</li>
                    <li>HTML</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile">
            <div className="card card-2">
              <header className="card-header">
                <h4 className="card-header-title is-family-secondary is-size-6">Backend</h4>
              </header>
              <div className="card-content">
                <div className="content">
                  <ul>
                    <li>Node.js</li>
                    <li>C#</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile">
            <div className="card card-3">
              <header className="card-header">
                <h4 className="card-header-title is-family-secondary is-size-6">Design</h4>
              </header>
              <div className="card-content">
                <div className="content">
                  <ul>
                    <li>Bootstrap</li>
                    <li>Bulma</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile">
            <div className="card card-4">
              <header className="card-header">
                <h4 className="card-header-title is-family-secondary is-size-6">Database</h4>
              </header>
              <div className="card-content">
                <div className="content">
                  <ul>
                    <li>SQL</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </>);
};

export default Homepage;