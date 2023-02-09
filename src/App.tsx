import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";

import { useTranslation } from "react-i18next";
import ButtonAppBar from "./components/AppBar";

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: "en" | "pl") => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="App">
      <ButtonAppBar />
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
        <Button variant="contained" onClick={() => changeLanguage("pl")}>
          PL
        </Button>
        <Button variant="contained" onClick={() => changeLanguage("en")}>
          EN
        </Button>
      </header>
    </div>
  );
}

export default App;
