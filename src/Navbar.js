// import React from "react";
// import { Link } from "react-router-dom";
// // import { useCookies } from "react-cookie";

// export const Navbar = () => {
// //   const [cookies, setCookies] = useCookies(["access_token"]);
// //   const navigate = useNavigate();

// //   const logout = () => {
// //     setCookies("access_token", "");
// //     window.localStorage.clear();
// //     navigate("/auth");
// //   };

//   function isNetworkAvailable() {
//   return navigator.onLine;
// }



  
// return (
//   <>
//     {isNetworkAvailable() ? (
//       <div className="bg-gray-900 text-white  md:px-4 md:py-12">
//         <div className="max-w-xl md:max-w-7xl md:mx-auto flex justify-between items-center">
//           <Link
//             to="/"
//             className="text-xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-500 to-pink-600 hover:animate-pulse hover:text-blue-300 transition duration-300 ease-in-out transform hover:scale-110"
//           >
//             Food Stories
//           </Link>

//           <div className="flex flex-col md:flex-row gap-2 space-x-2">
//             <Link
//               to="/"
//               className="md:text-lg text-xl text-gray-300 hover:text-white transition duration-200"
//             >
//               Home
//             </Link>

//             <Link
//               to="/foodstory"
//               className="md:text-lg text-xl text-gray-300 hover:text-white transition duration-200"
//             >
//               Food Story
//             </Link>

//             <Link
//               to="/generaterecipe"
//               className="md:text-lg text-xl text-gray-300 hover:text-white transition duration-200"
//             >
//               Generate Recipes
//             </Link>

//             <Link
//               to="/Nutrireads"
//               className="md:text-lg text-xl text-gray-300 hover:text-white transition duration-200"
//             >
//               Nutri Reads
//             </Link>


// <Link
//               to="/aboutus"
//               className="md:text-lg text-xl text-gray-300 hover:text-white transition duration-200"
//             >
//               About us
//             </Link>
// {/* <Link
//               to="/recipeplan"
//               className="md:text-lg text-xl text-gray-300 hover:text-white transition duration-200"
//             >
//               Recipes
//             </Link> */}



//             {/* <Link
//               to="/Nutripedia"
//               className="md:text-lg text-4xl text-gray-300 hover:text-white transition duration-200"
//             >
//               Nutripedia
//             </Link> */}


//             {/* <Link
//               to="/nutrirea"
//               className="md:text-lg text-4xl text-gray-300 hover:text-white transition duration-200"
//             >
//             Nutriread
//             </Link> */}
//           </div>
//         </div>
//       </div>
//     ) : (
//       <div className="bg-gray-900 text-white px-4 py-12 gap-10">
//         <Link
//           to="/generaterecip"
//           className="md:text-lg text-4xl text-gray-300 hover:text-white transition duration-200"
//         >
//           Generate Recipes
//         </Link>
        
//             <Link
//               to="/foodstory"
//               className="md:text-lg text-4xl text-gray-300 hover:text-white transition duration-200"
//             >
//               Food Story
//             </Link>
//              <Link
//               to="/nutrirea"
//               className="md:text-lg text-4xl text-gray-300 hover:text-white transition duration-200"
//             >
//             Nutriread
//             </Link>
//       </div>
//     )}
//   </>


// // <>
// //   {isNetworkAvailable() ? (
// //     <header className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/80 text-white shadow-lg shadow-black/20 backdrop-blur-xl">
// //       <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
       
// //         <Link
// //           to="/"
// //           className="group flex items-center gap-2 text-2xl font-extrabold tracking-tight md:text-3xl"
// //         >
// //           <span className="rounded-xl bg-gradient-to-br from-blue-500 via-green-400 to-pink-500 p-2 text-lg shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:rotate-6">
// //             🍴
// //           </span>

// //           <span className="bg-gradient-to-r from-blue-400 via-green-400 to-pink-500 bg-clip-text text-transparent transition-all duration-300 group-hover:from-pink-400 group-hover:via-green-400 group-hover:to-blue-400">
// //             Food Stories
// //           </span>
// //         </Link>

// //         <nav className="hidden items-center gap-1 md:flex">
// //           <Link
// //             to="/"
// //             className="rounded-xl px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-200 hover:bg-white/10 hover:text-white"
// //           >
// //             Home
// //           </Link>

// //           <Link
// //             to="/foodstory"
// //             className="rounded-xl px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-200 hover:bg-white/10 hover:text-white"
// //           >
// //             Food Story
// //           </Link>

// //           <Link
// //             to="/generaterecipe"
// //             className="group rounded-xl bg-gradient-to-r from-blue-500 to-green-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-green-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-400 hover:to-green-400 hover:shadow-lg"
// //           >
// //             <span className="mr-1">✨</span>
// //             Generate Recipes
// //           </Link>

// //           <Link
// //             to="/Nutrireads"
// //             className="rounded-xl px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-200 hover:bg-white/10 hover:text-white"
// //           >
// //             Nutri Reads
// //           </Link>

// //           <Link
// //             to="/aboutus"
// //             className="rounded-xl px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-200 hover:bg-white/10 hover:text-white"
// //           >
// //             About Us
// //           </Link>
// //         </nav>

       
// //         <div className="flex items-center gap-2 md:hidden">
// //           <Link
// //             to="/generaterecipe"
// //             className="rounded-lg bg-gradient-to-r from-blue-500 to-green-500 px-3 py-2 text-sm font-semibold text-white shadow-md"
// //           >
// //             ✨ Recipe
// //           </Link>

// //           <Link
// //             to="/foodstory"
// //             className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-gray-200 transition hover:bg-white/10"
// //           >
// //             Story
// //           </Link>
// //         </div>
// //       </div>

// //       <div className="flex overflow-x-auto border-t border-white/5 bg-white/[0.02] px-4 py-2 md:hidden">
// //         <div className="mx-auto flex min-w-max items-center gap-2">
// //           <Link
// //             to="/"
// //             className="rounded-lg px-3 py-1.5 text-sm text-gray-400 hover:bg-white/10 hover:text-white"
// //           >
// //             Home
// //           </Link>

// //           <Link
// //             to="/Nutrireads"
// //             className="rounded-lg px-3 py-1.5 text-sm text-gray-400 hover:bg-white/10 hover:text-white"
// //           >
// //             Nutri Reads
// //           </Link>

// //           <Link
// //             to="/aboutus"
// //             className="rounded-lg px-3 py-1.5 text-sm text-gray-400 hover:bg-white/10 hover:text-white"
// //           >
// //             About Us
// //           </Link>
// //         </div>
// //       </div>
// //     </header>
// //   ) : (
// //     <header className="border-b border-white/10 bg-gray-950 px-4 py-4 text-white shadow-lg">
// //       <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2">
// //         <Link
// //           to="/generaterecip"
// //           className="rounded-xl bg-gradient-to-r from-blue-500 to-green-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
// //         >
// //           ✨ Generate Recipes
// //         </Link>

// //         <Link
// //           to="/foodstory"
// //           className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-200 transition hover:bg-white/10 hover:text-white"
// //         >
// //           🍽️ Food Story
// //         </Link>

// //         <Link
// //           to="/nutrirea"
// //           className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-200 transition hover:bg-white/10 hover:text-white"
// //         >
// //           📖 Nutri Read
// //         </Link>
// //       </div>
// //     </header>
// //   )}
// // </>
// );


import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const navigate = useNavigate();
function isNetworkAvailable() {
  return navigator.onLine;
}

  return (
    <>
      {isNetworkAvailable() ? (
        /* ============================================================
           ONLINE NAVBAR
        ============================================================ */
        <header className="bg-gray-900 text-white">
          <div className="mx-auto max-w-7xl px-4 py-4 md:px-6 md:py-8">

            {/* ========================================================
               TOP BAR
            ======================================================== */}
            <div className="flex items-center justify-between">

              {/* LOGO */}
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-500 to-pink-600 transition duration-300 ease-in-out hover:scale-105 hover:animate-pulse md:text-4xl"
              >
                Food Stories
              </Link>

              {/* ======================================================
                 DESKTOP NAVIGATION
              ====================================================== */}
              <nav className="hidden items-center gap-2 md:flex">

                <Link
                  to="/"
                  className="rounded-xl px-4 py-2 text-lg text-gray-300 transition duration-200 hover:bg-white/10 hover:text-white"
                >
                  Home
                </Link>

                <Link
                  to="/foodstory"
                  className="rounded-xl px-4 py-2 text-lg text-gray-300 transition duration-200 hover:bg-white/10 hover:text-white"
                >
                  Food Story
                </Link>

                <Link
                  to="/generaterecipe"
                  className="rounded-xl bg-gradient-to-r from-blue-500 to-green-500 px-4 py-2 text-lg font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:from-blue-400 hover:to-green-400 hover:shadow-lg"
                >
                  ✨ Generate Recipes
                </Link>

                <Link
                  to="/Nutrireads"
                  className="rounded-xl px-4 py-2 text-lg text-gray-300 transition duration-200 hover:bg-white/10 hover:text-white"
                >
                  Nutri Reads
                </Link>

                <Link
                  to="/aboutus"
                  className="rounded-xl px-4 py-2 text-lg text-gray-300 transition duration-200 hover:bg-white/10 hover:text-white"
                >
                  About Us
                </Link>

              </nav>

              {/* ======================================================
                 MOBILE MENU BUTTON
              ====================================================== */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-2xl text-white transition hover:bg-white/10 md:hidden"
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? "✕" : "☰"}
              </button>

            </div>

            {/* ========================================================
               MOBILE DROPDOWN
            ======================================================== */}
            {isMenuOpen && (
              <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-gray-800 shadow-xl md:hidden">

                {/* HOME */}
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="block border-b border-white/5 px-5 py-4 text-lg text-gray-200 transition hover:bg-white/10 hover:text-white"
                >
                  🏠 Home
                </Link>

                {/* FOOD STORY */}
                <Link
                  to="/foodstory"
                  onClick={() => setIsMenuOpen(false)}
                  className="block border-b border-white/5 px-5 py-4 text-lg text-gray-200 transition hover:bg-white/10 hover:text-white"
                >
                  🍽️ Food Story
                </Link>

                {/* GENERATE RECIPES */}
                <Link
                  to="/generaterecipe"
                  onClick={() => setIsMenuOpen(false)}
                  className="block border-b border-white/5 bg-gradient-to-r from-blue-500/20 to-green-500/20 px-5 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
                >
                  ✨ Generate Recipes
                </Link>

                {/* NUTRI READS */}
                <Link
                  to="/Nutrireads"
                  onClick={() => setIsMenuOpen(false)}
                  className="block border-b border-white/5 px-5 py-4 text-lg text-gray-200 transition hover:bg-white/10 hover:text-white"
                >
                  📖 Nutri Reads
                </Link>

                {/* ABOUT US */}
                <Link
                  to="/aboutus"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-5 py-4 text-lg text-gray-200 transition hover:bg-white/10 hover:text-white"
                >
                  👤 About Us
                </Link>

              </div>
            )}

          </div>
        </header>

      ) : (

        /* ============================================================
           OFFLINE NAVBAR
        ============================================================ */
        <header className="border-b border-white/10 bg-gray-950 px-4 py-4 text-white shadow-lg">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2">

            {/* GENERATE RECIPES */}
            <Link
              to="/generaterecipe"
              className="rounded-xl bg-gradient-to-r from-blue-500 to-green-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              ✨ Generate Recipes
            </Link>

            {/* FOOD STORY */}
            <Link
              to="/foodstory"
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-200 transition hover:bg-white/10 hover:text-white"
            >
              🍽️ Food Story
            </Link>

            {/* NUTRI READ */}
            <Link
              to="/nutrirea"
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-200 transition hover:bg-white/10 hover:text-white"
            >
              📖 Nutri Read
            </Link>

          </div>
        </header>
      )}
    </>
  );
};

export default Navbar;















// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// export const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const onlineLinks = [
//     { name: "Home", path: "/" },
//     { name: "Food Story", path: "/foodstory" },
//     { name: "Generate Recipes", path: "/generaterecipe" },
//     { name: "Nutri Reads", path: "/Nutrireads" },
//     { name: "About Us", path: "/aboutus" },
//   ];

//   const offlineLinks = [
//     { name: "Generate Recipes", path: "/generaterecip" },
//     { name: "Food Story", path: "/foodstory" },
//     { name: "Nutri Read", path: "/nutrirea" },
//   ];

//   const activeLink = (path) => location.pathname === path;
//   function isNetworkAvailable() {
//   return navigator.onLine;
// }
//   return (
//     <>
//       {isNetworkAvailable() ? (
//         <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-gray-950/90 text-white shadow-xl backdrop-blur-xl">
//           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//             <div className="flex h-20 items-center justify-between">

//               {/* Logo */}
//               <Link
//                 to="/"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="group flex items-center gap-2"
//               >
//                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-green-500 to-pink-500 text-xl shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
//                   🍴
//                 </div>

//                 <span className="text-xl font-extrabold tracking-tight sm:text-2xl md:text-3xl">
//                   <span className="bg-gradient-to-r from-blue-400 via-green-400 to-pink-500 bg-clip-text text-transparent">
//                     Food
//                   </span>{" "}
//                   <span className="text-white">Stories</span>
//                 </span>
//               </Link>

//               {/* Desktop Navigation */}
//               <div className="hidden items-center gap-1 md:flex">
//                 {onlineLinks.map((link) => (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     className={`relative rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 lg:text-base ${
//                       activeLink(link.path)
//                         ? "bg-white/10 text-white shadow-inner"
//                         : "text-gray-400 hover:bg-white/5 hover:text-white"
//                     }`}
//                   >
//                     {link.name}

//                     {activeLink(link.path) && (
//                       <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-400 to-pink-500" />
//                     )}
//                   </Link>
//                 ))}
//               </div>

//               {/* Mobile Menu Button */}
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-200 transition hover:bg-white/10 md:hidden"
//                 aria-label="Toggle navigation menu"
//               >
//                 {isMenuOpen ? (
//                   <svg
//                     className="h-6 w-6"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     className="h-6 w-6"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>

//             {/* Mobile Navigation */}
//             {isMenuOpen && (
//               <div className="border-t border-white/10 py-4 md:hidden">
//                 <div className="flex flex-col gap-2">
//                   {onlineLinks.map((link) => (
//                     <Link
//                       key={link.path}
//                       to={link.path}
//                       onClick={() => setIsMenuOpen(false)}
//                       className={`rounded-xl px-4 py-3 text-base font-medium transition-all ${
//                         activeLink(link.path)
//                           ? "bg-gradient-to-r from-blue-500/20 to-green-500/20 text-white"
//                           : "text-gray-400 hover:bg-white/5 hover:text-white"
//                       }`}
//                     >
//                       <div className="flex items-center justify-between">
//                         <span>{link.name}</span>

//                         {activeLink(link.path) && (
//                           <span className="text-green-400">●</span>
//                         )}
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </nav>
//       ) : (
//         /* Offline Navigation */
//         <nav className="sticky top-0 z-50 border-b border-orange-500/20 bg-gray-950/95 text-white shadow-xl backdrop-blur-xl">
//           <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            
//             {/* Offline Header */}
//             <div className="mb-4 flex items-center justify-between">
//               <Link
//                 to="/"
//                 className="text-xl font-extrabold sm:text-2xl"
//               >
//                 <span className="bg-gradient-to-r from-blue-400 via-green-400 to-pink-500 bg-clip-text text-transparent">
//                   Food Stories
//                 </span>
//               </Link>

//               <div className="flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/10 px-3 py-1.5">
//                 <span className="h-2 w-2 animate-pulse rounded-full bg-orange-400" />
//                 <span className="text-xs font-medium text-orange-300">
//                   Offline
//                 </span>
//               </div>
//             </div>

//             {/* Offline Links */}
//             <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
//               {offlineLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className={`group rounded-xl border px-4 py-3 text-center text-sm font-medium transition-all duration-300 ${
//                     activeLink(link.path)
//                       ? "border-green-400/30 bg-green-400/10 text-green-300"
//                       : "border-white/10 bg-white/5 text-gray-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
//                   }`}
//                 >
//                   <span className="transition-transform duration-300 group-hover:scale-105">
//                     {link.name}
//                   </span>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </nav>
//       )}
//     </>
//   );
// };

// // export default Navbar;

