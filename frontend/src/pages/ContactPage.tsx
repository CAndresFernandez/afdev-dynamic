import React from "react";
import { Link } from "react-router-dom";
import LangSwitcher from "../components/LangSwitcher.tsx";
import { useTranslation } from "react-i18next";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <>
      <LangSwitcher />

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
                      {t("contact")}
                      <span className="primary">{t("me")}</span>
                      <span className="title-bg"></span>
                    </h2>
                    <p>{t("contactQuip")}</p>
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
                          {t("linkedin")}
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
