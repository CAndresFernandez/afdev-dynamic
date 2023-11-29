import React, { useState, useEffect } from "react";
import API from "../api/axios";
import { useTranslation } from "react-i18next";

const ExperienceList = () => {
  const { t } = useTranslation();
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    API.get(`experiences`).then((res) => {
      const experiences = res.data;
      setExperiences(experiences["hydra:member"]);
      console.log(experiences);
    });
  }, []);

  return (
    <div className="history-block">
      <div className="section-title light clear">
        <h3 id="exp">{t("experience")}</h3>
      </div>

      <div className="history-scroller">
        {experiences.map((experience) => (
          <div className="history-item" key={experience["id"]}>
            <div className="history-icon">
              <span className="history-hex"></span>
              <i className={experience["icon"]}></i>
            </div>
            <div className="history-text">
              <h5>{experience["company"]}</h5>
              <span>
                {experience["startYear"]} - {experience["endYear"]}
              </span>
              <p>
                <b>{experience["jobTitle"]}</b>
                <br />
                {experience["responsibilities"][1]}
                <br />
                {experience["responsibilities"][2]}
                <br />
                {experience["responsibilities"][3]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceList;
