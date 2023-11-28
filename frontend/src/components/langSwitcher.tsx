import React, { useState, useEffect } from "react";
// import css file
import "../styles/theme/css/style.css";

const LangSwitcher: React.FC = () => {
  const [activeLang, setActiveLang] = useState<string>(
    localStorage.getItem("language") || "en"
  );

  //   set the active language from localStorage on component mount
  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    if (storedLang) {
      setActiveLang(storedLang);
    }
  }, []);

  //   handle language switch
  const handleLangSwitch = (lang: string) => {
    setActiveLang(lang);
    localStorage.setItem("language", lang);
  };

  const [isExtended, setIsExtended] = useState(false);

  const handleSwitcherClick = () => {
    setIsExtended(!isExtended);
  };

  return (
    <div
      className={`preview-wrapper ${isExtended ? "extend" : ""}`}
      id="preview-wrapper"
    >
      <div className="switcher-head">
        <ul className="lang-options list-none">
          <li className="text-center" title="english">
            <span
              id="en"
              className={`${activeLang === "en" ? "active" : ""}`}
              onClick={() => handleLangSwitch("en")}
            >
              EN
            </span>
          </li>
          <li className="text-center" title="français">
            <span
              id="fr"
              className={`${activeLang === "fr" ? "active" : ""}`}
              onClick={() => handleLangSwitch("fr")}
            >
              FR
            </span>
          </li>
        </ul>
        <div
          className={`switcher-trigger bi bi-globe2 ${
            isExtended ? "extended" : ""
          }`}
          onClick={handleSwitcherClick}
        ></div>
      </div>
    </div>
  );
};

export default LangSwitcher;
