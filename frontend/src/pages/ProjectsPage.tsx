import React from "react";
import { Link } from "react-router-dom";

export default function ProjectsPage() {
  return (
    <>
      {/* language switcher */}
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
          <div className="pt-tablecell page-works relative">
            <Link to="/" className="page-close">
              <i className="tf-ion-close"></i>
            </Link>

            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                  <div className="page-title text-center" id="header-projects">
                    <h2>
                      My <span className="primary">projects</span>
                      <span className="title-bg"></span>
                    </h2>
                    <p>
                      Check back often... this is a constant work in progress.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row isotope-gutter">
                <div className="col-xs-12  col-md-4"></div>
                <div className="col-xs-12  col-md-4">
                  <figure className="works-item">
                    <img
                      src="./src/styles/theme/images/works/github.png"
                      alt="github"
                    />
                    <Link
                      to="https://github.com/CAndresFernandez"
                      target="_blank"
                    >
                      <div className="overlay"></div>
                      <figcaption className="works-inner" id="git">
                        <h4>My Github</h4>
                        <p>All of my Github repositories</p>
                      </figcaption>
                    </Link>
                  </figure>
                </div>
                <div className="col-xs-12  col-md-4"></div>

                {/* <!-- if necessary to add smaller tabs on two rows -->

                <!-- <div className="col-xs-12 col-sm-6 col-md-4 Illustrator">
                <figure className="works-item">
                  <img src="./theme/images/works/2.jpg" alt="" />
                  <div className="overlay"></div>
                  <figcaption className="works-inner">
                    <h4>Project Name</h4>
                    <p>Illustration, Digital Art</p>
                  </figcaption>
                </figure>
              </div> --> */}
              </div>
            </div>

            <nav className="page-nav clear">
              <div className="container">
                <div className="flex flex-middle space-between">
                  <span className="prev-page">
                    <Link to="/about" className="link" id="nav-about">
                      &larr; About
                    </Link>
                  </span>
                  <span className="next-page">
                    <Link to="/cv" className="link" id="nav-cv">
                      CV &rarr;
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
