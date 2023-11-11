import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/main.scss";
import "./assets/cta.scss";
import "./assets/common.scss";
// import "./assets/reset.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
