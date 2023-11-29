import React, { useState, useEffect } from "react";
import API from "../api/axios";
import { useTranslation } from "react-i18next";

const TechList = () => {
  const { t } = useTranslation();
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    API.get(`techs`).then((res) => {
      const techs = res.data;
      setTechs(techs["hydra:member"]);
    });
  }, []);

  return (
    <div className="col-xs-12 col-md-6">
      <div className="section-title clear">
        <h3 id="skills">{t("skills")}</h3>
      </div>
      <div className="skill-wrapper">
        {techs.map((tech) => (
          <div className="progress clear" key={tech["id"]}>
            <div className="skill-name">
              {tech["name"]} {tech["version"]}
            </div>
            <div className="skill-bar">
              <div className="bar" style={{ width: `${tech["level"]}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechList;
