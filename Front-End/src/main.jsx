//import react-dom/client
import { createRoot } from "react-dom/client";

//import index style Sheets Css
import "./styles/index.css";

//import react-router-dom App
import { BrowserRouter } from "react-router-dom";

//import i18n
import "./i18n/index.js";

//import Component App
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
