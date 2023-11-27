import React from "react";
import { Link } from "react-router-dom";

export default function ContactPage() {
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
          <div className="pt-tablecell page-contact relative">
            <Link to="/" className="page-close">
              <i className="tf-ion-close"></i>
            </Link>

            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                  <div className="page-title text-center" id="header-contact">
                    <h2>
                      Get in <span className="primary">touch</span>
                      <span className="title-bg"></span>
                    </h2>
                    <p>
                      Send me a message if you have any questions, or just want
                      to chat.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row contact-wrapper">
                <div className="contact-block">
                  <div className="media">
                    <div className="media-left">
                      <i className="tf-envelope2"></i>
                    </div>
                    <div className="media-body">
                      <h4>Email</h4>
                      <p>
                        <a href="mailto:c.andresfernandez.dev@gmail.com">
                          c.andresfernandez.dev@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="contact-block">
                  <div className="media">
                    <div className="media-left">
                      <i className="bi bi-linkedin"></i>
                    </div>
                    <div className="media-body">
                      <h4>LinkedIn</h4>
                      <p>
                        <Link
                          to="https://www.linkedin.com/in/andresfernandezdev/"
                          target="_blank"
                          id="linkedin"
                        >
                          Click to see my profile
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <nav className="page-nav clear">
                <div className="container">
                  <div className="flex flex-middle space-between">
                    <span className="prev-page">
                      <Link to="/cv" className="link" id="nav-cv">
                        &larr; CV
                      </Link>
                    </span>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
