import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./Routes/Routes.jsx";
import "./index.css";
import AuthProviders from "./Providers/AuthProviders.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProviders>
        <Routes />
      </AuthProviders>
    </QueryClientProvider>
  </React.StrictMode>
);
