import React, { useState } from "react";
// import css file
// todo: create langSwitcher.css
import "../styles/theme/css/style.css";

const LangSwitcher: React.FC = () => {
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
            <span id="en" className={isExtended ? "active" : ""}>
              EN
            </span>
          </li>
          <li className="text-center" title="français">
            <span id="fr" className={isExtended ? "active" : ""}>
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
