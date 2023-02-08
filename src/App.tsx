import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: "en" | "pl") => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("title")};
        </a>
        <button onClick={() => changeLanguage("pl")}>PL</button>
        <button onClick={() => changeLanguage("en")}>EN</button>
      </header>
    </div>
  );
}

export default App;
