import React from "react";
import { createRoot } from "react-dom/client";
import SmartRetrofitDoorLockWebsite from "./SmartRetrofitDoorLockWebsite.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SmartRetrofitDoorLockWebsite />
  </React.StrictMode>,
);
