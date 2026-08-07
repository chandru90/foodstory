


import { useState } from "react";
import { IntlProvider } from "react-intl";

import FoodStory from "./Foodstory.js";
import en from "./i18n/locales/en/translaton.json";
import ar from "./i18n/locales/ar/translaton.json";
import ta from "./i18n/locales/ta/translaton.json";
import hi from "./i18n/locales/hi/translaton.json";
import fr from "./i18n/locales/fr/translaton.json";
import es from "./i18n/locales/es/translaton.json";
const messages = { en, fr, ar, hi, ta,es };

export default function App() {
  const [locale, setLocale] = useState("en");

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div>
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value)}
         className="hidden md:block"
      >
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        <option value="hi">Hindi</option>
        <option value="ta">Tamil</option>
      </select>

   

  

  <FoodStory locale ={locale} />
  </div>
</IntlProvider>
    
  );
}