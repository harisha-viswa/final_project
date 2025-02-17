import React from "react";
import ReactDOM from "react-dom/client";  // ✅ Ensure this is correct
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/Global.css"; // Ensure this path is correct

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</React.StrictMode>
);
