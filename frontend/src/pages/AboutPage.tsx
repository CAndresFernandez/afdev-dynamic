import React from "react";
import { Link } from "react-router-dom";
import LangSwitcher from "../components/langSwitcher.tsx";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <LangSwitcher />

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
                      {t("headerAbout")}
                      <span className="primary">{t("I")}</span>
                      <span className="title-bg"></span>
                    </h2>
                    <p>{t("aboutQuip")}</p>
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
                        <b>{t("from")}: </b>
                        {t("Atlanta")}
                      </p>
                      <p>
                        <b>{t("living")}:</b> Paris, France
                      </p>
                      <p>
                        <b>{t("speaks")}:</b> English, Français, Español,
                        Deutsch, 한국어
                      </p>
                      <p>
                        <b>{t("interests")}:</b> Arsenal FC, {t("videoGames")},
                        Tennis, {t("hiking")}, Amari, {t("guitar")}
                      </p>
                    </div>
                  </div>

                  <p id="caption2">
                    {t("aboutCaptionLn1")} {t("aboutCaptionLn2")}
                  </p>
                </div>

                <div className="col-xs-12 col-md-6">
                  <div className="section-title clear">
                    <h3 id="skills">{t("skills")}</h3>
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
                      &larr; {t("navHome")}
                    </Link>
                  </span>
                  <span className="next-page">
                    <Link
                      to="/projects"
                      className="link"
                      id="nav-projects-next"
                    >
                      {t("projects")} &rarr;
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
