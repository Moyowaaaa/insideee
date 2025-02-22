import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { LocationContextProvider } from "./context/LocationContext";
import StatesContextProvider from "./context/StatesContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StatesContextProvider>
      <LocationContextProvider>
        <App />
      </LocationContextProvider>
    </StatesContextProvider>
  </React.StrictMode>
);
