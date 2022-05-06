import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import { FeedbackProvider } from "./hooks/useFeedback";

import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FeedbackProvider>
      <App />
    </FeedbackProvider>
  </React.StrictMode>,
);
