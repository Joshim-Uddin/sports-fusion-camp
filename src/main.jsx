import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./Routes/Routes.jsx";
import "./index.css";
import AuthProviders from "./Providers/AuthProviders.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <Routes />
    </AuthProviders>
  </React.StrictMode>
);
