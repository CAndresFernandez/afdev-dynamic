import React from "react";
import { Link } from "react-router-dom";
import LangSwitcher from "../components/LangSwitcher.tsx";
import { useTranslation } from "react-i18next";

export default function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <>
      <LangSwitcher />

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
                      {t("myPlural")}
                      <span className="primary">{t("projects")}</span>
                      <span className="title-bg"></span>
                    </h2>
                    <p>{t("checkBack")}</p>
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
                        <h4>{t("my")} Github</h4>
                        <p>{t("github")}</p>
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
                      &larr; {t("navAbout")}
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
