import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CasinoApp from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CasinoApp />
  </StrictMode>,
);
