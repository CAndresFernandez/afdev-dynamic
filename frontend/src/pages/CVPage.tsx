import React from "react";
import Pdf from "../assets/downloads/AndresFernandez_CV.pdf";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ExperienceList from "../components/ExperienceList.tsx";
import EducationList from "../components/EducationList.tsx";
import LangSwitcher from "../components/LangSwitcher.tsx";

export default function CVPage() {
  const { t } = useTranslation();

  return (
    <>
      <LangSwitcher />

      <main className="site-wrapper">
        <div className="pt-table">
          <div className="pt-tablecell page-resume relative">
            <Link to="/" className="page-close">
              <i className="tf-ion-close"></i>
            </Link>

            <div className="container">
              <div className="row" id="header-cv">
                <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10">
                  <div className="page-title cv text-center">
                    <h2 id="title-cv">
                      {t("my")}
                      <span className="primary">CV</span>
                      <span className="title-bg"></span>
                    </h2>
                    <p id="caption-cv">{t("cvHeader")}</p>
                    <Link to={Pdf} target="_blank">
                      {t("downloadCV")}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="row history-block-wrapper">
                <div className="col-xs-12 col-sm-6">
                  <EducationList />
                </div>
                <div className="col-xs-12 col-sm-6">
                  <ExperienceList />
                </div>
              </div>
            </div>

            <nav className="page-nav clear">
              <div className="container">
                <div className="flex flex-middle space-between">
                  <span className="prev-page">
                    <Link
                      to="/projects"
                      className="link"
                      id="nav-projects-prev"
                    >
                      &larr; {t("projects")}
                    </Link>
                  </span>
                  <span className="next-page">
                    <Link to="/contact" className="link" id="nav-contact">
                      Contact &rarr;
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
