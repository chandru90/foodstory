


import { useState } from "react";
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./Navbar.js";
import Recipeplanner from "./pages/Recipeplanner.js";
import Nutrireads from "./pages/Nutrireads.js";
// import Nutriread from "./pages/Nutrireads.js";
// import FoodStory from "./pages/FoodStory.js";
import { Home } from "./Home.js";
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

//   return (

// <>

// <Router>
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<Home />} />
//              <Route path="/generaterecipe" element={<Recipeplanner />} />
//              {/* <Route path="/foodstory" element={<Foodstory/>} /> */}
           
//  <Route path="/nutrireads" element={<Nutrireads />} />
        
//             {/* <Route
//               path="/saved-recipes"
//               element={<ProtectedRoute element={<SavedRecipes />} />}
//             /> */}
//             {/* <Route path="/recipe/:recipeID" element={<RecipeDetail />} /> */}
//             {/* <Route
//               path="/saved-recipes"
//               element={<ProtectedRoute element={<SavedRecipes />} />}
//             /> */}

          
          
//              </Routes> 

//         </Router>





//     <IntlProvider locale={locale} messages={messages[locale]}>
//       <div>
//       <select
//         value={locale}
//         onChange={(e) => setLocale(e.target.value)}
//          className="hidden md:block"
//       >
//         <option value="en">English</option>
//         <option value="fr">French</option>
//         <option value="es">Spanish</option>
//         <option value="hi">Hindi</option>
//         <option value="ta">Tamil</option>
//       </select>

   

  

//   <FoodStory locale ={locale} />
//   </div>
// </IntlProvider> 
//     </>
//   );







return (
  <Router>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/generaterecipe"
        element={<Recipeplanner />}
      />

      <Route
        path="/foodstory"
        element={
         <IntlProvider
            locale={locale}
            messages={messages["en"]}
          >
            <div>
              {/* <select
                value={locale}
                onChange={(e) => setLocale(e.target.value)}
                className="hidden md:block"
              >
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
                <option value="hi">Hindi</option>
                <option value="ta">Tamil</option>
              </select> */}

              <FoodStory locale={"en"} />
            </div>
         </IntlProvider>
       }
      />

      <Route
        path="/nutrireads"
        element={<Nutrireads />}
      />

      {/* Future routes */}
      {/* 
      <Route
        path="/saved-recipes"
        element={<ProtectedRoute element={<SavedRecipes />} />}
      />

      <Route
        path="/recipe/:recipeID"
        element={<RecipeDetail />}
      />
      */}
    </Routes>
  </Router>
);







}




// import { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   useEffect(() => {
//     const addGoogleTranslate = () => {
//       if (window.google?.translate) {
//         new window.google.translate.TranslateElement(
//           {
//             pageLanguage: "en",
//             includedLanguages: "en,fr,es,hi,ta",
//             autoDisplay: false,
//           },
//           "google_translate_element"
//         );
//       }
//     };

//     window.googleTranslateElementInit = addGoogleTranslate;

//     const script = document.createElement("script");
//     script.src =
//       "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//     script.async = true;

//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//       delete window.googleTranslateElementInit;
//     };
//   }, []);

//   return (
//     <Router>
//       <Navbar />

//       <div id="google_translate_element"></div>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/generaterecipe" element={<Recipeplanner />} />
//         <Route path="/foodstory" element={<FoodStory />} />
//         <Route path="/nutrireads" element={<Nutrireads />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

