import React from "react";
import Pdf from "../assets/downloads/AndresFernandez_CV.pdf";
import { Link } from "react-router-dom";
import LangSwitcher from "../components/langSwitcher.tsx";
import { useTranslation } from "react-i18next";

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
                  <div className="history-block">
                    <div className="section-title light clear">
                      <h3 id="edu">{t("education")}</h3>
                    </div>

                    <div className="history-scroller">
                      <div className="history-item">
                        <div className="history-icon">
                          <span className="history-hex"></span>
                          <i className="bi bi-laptop"></i>
                        </div>
                        <div className="history-text" id="oclock">
                          <h5>École O'clock</h5>
                          <span>May - October 2023</span>
                          <p>
                            Fullstack web development <br />
                            Specialisation PHP/Symfony
                          </p>
                        </div>
                      </div>

                      <div className="history-item">
                        <div className="history-icon">
                          <span className="history-hex"></span>
                          <i className="tf-documents5"></i>
                        </div>
                        <div className="history-text" id="gsu">
                          <h5>Georgia State University</h5>
                          <span>2006 - 2007</span>
                          <p>
                            <em>Major</em>: History <br />
                            <em>Minor</em>: German Language
                          </p>
                        </div>
                      </div>

                      <div className="history-item">
                        <div className="history-icon">
                          <span className="history-hex"></span>
                          <i className="fa-solid fa-kitchen-set"></i>
                        </div>
                        <div className="history-text" id="aia">
                          <h5>Art Institute of Atlanta</h5>
                          <span>2004 - 2006</span>
                          <p>Culinary Arts &amp; Hospitality Management</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6">
                  <div className="history-block">
                    <div className="section-title light clear">
                      <h3 id="exp">{t("experience")}</h3>
                    </div>

                    <div className="history-scroller">
                      <div className="history-item">
                        <div className="history-icon">
                          <span className="history-hex"></span>
                          <i className="fa-solid fa-people-roof"></i>
                        </div>
                        <div className="history-text" id="lcm">
                          <h5>Les Cuistots Migrateurs</h5>
                          <span>2017 - 2022</span>
                          <p>
                            <b>Managing Partner &amp; Culinary Director</b>
                            <br />
                            Drove planning, sourcing, production, training,
                            staffing, R&amp;D, and cost control through a period
                            of exponential growth. <br />
                            Developed culinary program for the culinary school
                            founded by the company's non-profit branch in 2021.
                          </p>
                        </div>
                      </div>

                      <div className="history-item">
                        <div className="history-icon">
                          <span className="history-hex"></span>
                          <i className="fa-solid fa-kitchen-set"></i>
                        </div>
                        <div className="history-text" id="lblv">
                          <h5>La Bourse et La Vie</h5>
                          <span>2015 - 2017</span>
                          <p>
                            <b>Chef de cuisine</b> <br />
                            Managed opening of the restaurant in 2015, including
                            menu development, planning, product sourcing,
                            hiring, training, execution, and cost management.{" "}
                            <br />
                            Nurtured the spirit of excellence, simplicity, and
                            precision the company is known for.
                          </p>
                        </div>
                      </div>

                      <div className="history-item">
                        <div className="history-icon">
                          <span className="history-hex"></span>
                          <i className="fa-solid fa-kitchen-set"></i>
                        </div>
                        <div className="history-text" id="spr">
                          <h5>Spring Restaurant</h5>
                          <span>2013 - 2015</span>
                          <p>
                            <b>Sous-Chef de cuisine</b> <br />
                            Key member of high-performance team providing
                            Michelin-level food and service.
                          </p>
                        </div>
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
