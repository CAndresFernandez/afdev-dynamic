import React from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <>
      <div className="preview-wrapper" id="preview-wrapper">
        <div className="switcher-head">
          <ul className="lang-options list-none">
            <li className="text-center" title="english">
              <span id="en" className="active">
                EN
              </span>
            </li>
            <li className="text-center" title="français">
              <span id="fr">FR</span>
            </li>
          </ul>
          <div className="switcher-trigger bi bi-globe2"></div>
        </div>
      </div>

      <main className="site-wrapper">
        <div className="pt-table">
          <div className="pt-tablecell page-about relative">
            <Link to="/" className="page-close">
              <i className="tf-ion-close"></i>
            </Link>

            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                  <div className="page-title text-center" id="header-about">
                    <h2>
                      About <span className="primary">me</span>
                      <span className="title-bg"></span>
                    </h2>
                    <p>
                      After a fruitful 18-year career as a professional chef, I
                      made the big switch to tech. Now I'm on the hunt for
                      quality programming experience wherever I can get it.
                    </p>
                  </div>
                </div>

                <div className="col-xs-12 col-md-6">
                  <div className="about-author">
                    <figure className="author-thumb">
                      <img
                        src="./src/styles/theme/images/headshotandy.jpeg"
                        alt="headshot andy"
                      />
                    </figure>

                    <div className="author-desc" id="author-desc">
                      <p>
                        <b>From:</b> Atlanta, Georgia
                      </p>
                      <p>
                        <b>Living in:</b> Paris, France
                      </p>
                      <p>
                        <b>Speaks:</b> English, Français, Español, Deutsch,
                        한국어
                      </p>
                      <p>
                        <b>Interests:</b> Arsenal FC, Gaming, Tennis, Hiking,
                        Amari, Guitar
                      </p>
                    </div>
                  </div>

                  <p id="caption2">
                    A decidedly atypical profile indeed, but I am insatiably
                    curious, meticulous, and passionate about clean, scalable
                    code. Even better, I come equipped with soft skills and an
                    attention to detail that only experience can provide.
                    Rigour, initiative, and perseverance are qualities which
                    continue to define me in both professional and personal
                    endeavors.
                  </p>
                </div>

                <div className="col-xs-12 col-md-6">
                  <div className="section-title clear">
                    <h3 id="skills">Skills</h3>
                  </div>
                  <div className="skill-wrapper">
                    <div className="progress clear">
                      <div className="skill-name">Symfony 5/6</div>
                      <div className="skill-bar">
                        <div className="bar" style={{ width: "80%" }}></div>
                      </div>
                    </div>

                    <div className="progress clear">
                      <div className="skill-name">Golang</div>
                      <div className="skill-bar">
                        <div className="bar" style={{ width: "30%" }}></div>
                      </div>
                    </div>

                    <div className="progress clear">
                      <div className="skill-name">RESTful APIs</div>
                      <div className="skill-bar">
                        <div className="bar" style={{ width: "70%" }}></div>
                      </div>
                    </div>

                    <div className="progress clear">
                      <div className="skill-name">MySQL</div>
                      <div className="skill-bar">
                        <div className="bar" style={{ width: "70%" }}></div>
                      </div>
                    </div>

                    <div className="progress clear">
                      <div className="skill-name">HTML5/CSS3</div>
                      <div className="skill-bar">
                        <div className="bar" style={{ width: "70%" }}></div>
                      </div>
                    </div>

                    <div className="progress clear">
                      <div className="skill-name">JS (React/node.js)</div>
                      <div className="skill-bar">
                        <div className="bar" style={{ width: "30%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <nav className="page-nav clear">
              <div className="container">
                <div className="flex flex-middle space-between">
                  <span className="prev-page">
                    <Link to="/" className="link" id="nav-home">
                      &larr; Home
                    </Link>
                  </span>
                  <span className="next-page">
                    <Link
                      to="/projects"
                      className="link"
                      id="nav-projects-next"
                    >
                      Projects &rarr;
                    </Link>
                  </span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </main>
    </>
  );
}
