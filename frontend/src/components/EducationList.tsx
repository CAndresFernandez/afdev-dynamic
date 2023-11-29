import React, { useState, useEffect } from "react";
import API from "../api/axios";
import { useTranslation } from "react-i18next";

const EducationList = () => {
  const { t } = useTranslation();
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    API.get(`educations`).then((res) => {
      const educations = res.data;
      setEducations(educations["hydra:member"]);
      console.log(educations);
    });
  }, []);

  return (
    <div className="row history-block-wrapper">
      <div className="col-xs-12 col-sm-6">
        <div className="history-block">
          <div className="section-title light clear">
            <h3 id="edu">{t("education")}</h3>
          </div>

          <div className="history-scroller">
            {educations.map((education) => (
              <div className="history-item" key={education["id"]}>
                <div className="history-icon">
                  <span className="history-hex"></span>
                  <i className={education["icon"]}></i>
                </div>
                <div className="history-text" id="oclock">
                  <h5>{education["school"]}</h5>
                  <span>
                    {education["startMonth"]} {education["startYear"]}-{" "}
                    {education["endMonth"]} {education["endYear"]}
                  </span>
                  <p>{education["field"]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationList;
