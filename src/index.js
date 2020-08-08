import React from "react";
import ReactDOM from "react-dom";
import App from "./componets/App";
import { AppProvider } from "./contexts/contexts";

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.querySelector("#root")
);
