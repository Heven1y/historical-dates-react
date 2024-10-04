import React from "react";

import ReactDOM from "react-dom/client";

import "./shared/styles/index.scss";
import "./shared/styles/reset.scss";
import "./i18n";
import App from "./pages/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
