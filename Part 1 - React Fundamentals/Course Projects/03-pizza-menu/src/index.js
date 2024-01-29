import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// before React v18
// React.render(<App/>, document.getElementById("root"));
