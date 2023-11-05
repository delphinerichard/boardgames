import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { IntlProvider } from "react-intl";
import messages from "./translations";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const browserLanguage = navigator.language.split(/[-_]/)[0];
const resolvedLanguage = browserLanguage in messages ? browserLanguage : "fr";
const currentLanguageMessages = messages[resolvedLanguage];

root.render(
  <React.StrictMode>
    <IntlProvider
      locale={resolvedLanguage}
      messages={currentLanguageMessages}
      defaultLocale="fr"
    >
      <App />
    </IntlProvider>
  </React.StrictMode>
);

reportWebVitals();
