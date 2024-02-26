import React from "react";
import ReactDOM from "react-dom/client";

import Stage from "./Stage";

import "./styles.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Stage />
  </React.StrictMode>,
);
