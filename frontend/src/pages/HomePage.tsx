import React from "react";
import { Link } from "react-router-dom";
import LangSwitcher from "../components/langSwitcher.tsx";

export default function HomePage() {
  return (
    <>
      <LangSwitcher />

      <main className="site-wrapper">
        <div className="pt-table">
          <div className="pt-tablecell page-home relative">
            <div className="overlay"></div>

            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-10 col-lg-12">
                  <div className="page-title home text-center">
                    <h2>
                      Andres <span className="primary">Fernandez</span>
                    </h2>
                    <p id="caption-home">
                      Developer and former chef in Paris, FR. serving up more
                      fresh code than fine foods these days.
                      <br />
                      Look around to learn more.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                  <div className="hexagon-menu clear">
                    <div className="hexagon-item">
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <Link to="/about" className="hex-content">
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className="tf-profile-male"></i>
                          </span>
                          <span className="title" id="btn-about">
                            About
                          </span>
                        </span>
                        <svg
                          viewBox="0 0 173.20508075688772 200"
                          height="200"
                          width="174"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                            fill="#1e2530"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                    <div className="hexagon-item">
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <Link to="/projects" className="hex-content">
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className="tf-tools-2"></i>
                          </span>
                          <span className="title" id="btn-projects">
                            Projects
                          </span>
                        </span>
                        <svg
                          viewBox="0 0 173.20508075688772 200"
                          height="200"
                          width="174"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                            fill="#1e2530"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                    <div className="hexagon-item">
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <Link to="/cv" className="hex-content">
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className="tf-tools"></i>
                          </span>
                          <span className="title">CV</span>
                        </span>
                        <svg
                          viewBox="0 0 173.20508075688772 200"
                          height="200"
                          width="174"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                            fill="#1e2530"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                    <div className="hexagon-item">
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <Link to="/contact" className="hex-content">
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className="tf-envelope2"></i>
                          </span>
                          <span className="title">Contact</span>
                        </span>
                        <svg
                          viewBox="0 0 173.20508075688772 200"
                          height="200"
                          width="174"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                            fill="#1e2530"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
