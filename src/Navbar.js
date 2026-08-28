import React from "react";
import { Link } from "react-router-dom";
// import { useCookies } from "react-cookie";

export const Navbar = () => {
//   const [cookies, setCookies] = useCookies(["access_token"]);
//   const navigate = useNavigate();

//   const logout = () => {
//     setCookies("access_token", "");
//     window.localStorage.clear();
//     navigate("/auth");
//   };

  function isNetworkAvailable() {
  return navigator.onLine;
}



  
return (
  <>
    {isNetworkAvailable() ? (
      <div className="bg-gray-900 text-white  md:px-4 md:py-12">
        <div className="max-w-xl md:max-w-7xl md:mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="text-xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-500 to-pink-600 hover:animate-pulse hover:text-blue-300 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Food Stories
          </Link>

          <div className="flex flex-col md:flex-row gap-2 space-x-2">
            <Link
              to="/"
              className="md:text-lg text-xl text-gray-300 hover:text-white transition duration-200"
            >
              Home
            </Link>

            <Link
              to="/foodstory"
              className="md:text-lg text-xl text-gray-300 hover:text-white transition duration-200"
            >
              Food Story
            </Link>

            <Link
              to="/generaterecipe"
              className="md:text-lg text-xl text-gray-300 hover:text-white transition duration-200"
            >
              Generate Recipes
            </Link>

            <Link
              to="/Nutrireads"
              className="md:text-lg text-xl text-gray-300 hover:text-white transition duration-200"
            >
              Nutri Reads
            </Link>


<Link
              to="/aboutus"
              className="md:text-lg text-xl text-gray-300 hover:text-white transition duration-200"
            >
              About us
            </Link>




            {/* <Link
              to="/Nutripedia"
              className="md:text-lg text-4xl text-gray-300 hover:text-white transition duration-200"
            >
              Nutripedia
            </Link> */}


            {/* <Link
              to="/nutrirea"
              className="md:text-lg text-4xl text-gray-300 hover:text-white transition duration-200"
            >
            Nutriread
            </Link> */}
          </div>
        </div>
      </div>
    ) : (
      <div className="bg-gray-900 text-white px-4 py-12 gap-10">
        <Link
          to="/generaterecip"
          className="md:text-lg text-4xl text-gray-300 hover:text-white transition duration-200"
        >
          Generate Recipes
        </Link>
        
            <Link
              to="/foodstory"
              className="md:text-lg text-4xl text-gray-300 hover:text-white transition duration-200"
            >
              Food Story
            </Link>
             <Link
              to="/nutrirea"
              className="md:text-lg text-4xl text-gray-300 hover:text-white transition duration-200"
            >
            Nutriread
            </Link>
      </div>
    )}
  </>


// <>
//   {isNetworkAvailable() ? (
//     <header className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/80 text-white shadow-lg shadow-black/20 backdrop-blur-xl">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
       
//         <Link
//           to="/"
//           className="group flex items-center gap-2 text-2xl font-extrabold tracking-tight md:text-3xl"
//         >
//           <span className="rounded-xl bg-gradient-to-br from-blue-500 via-green-400 to-pink-500 p-2 text-lg shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:rotate-6">
//             🍴
//           </span>

//           <span className="bg-gradient-to-r from-blue-400 via-green-400 to-pink-500 bg-clip-text text-transparent transition-all duration-300 group-hover:from-pink-400 group-hover:via-green-400 group-hover:to-blue-400">
//             Food Stories
//           </span>
//         </Link>

//         <nav className="hidden items-center gap-1 md:flex">
//           <Link
//             to="/"
//             className="rounded-xl px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-200 hover:bg-white/10 hover:text-white"
//           >
//             Home
//           </Link>

//           <Link
//             to="/foodstory"
//             className="rounded-xl px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-200 hover:bg-white/10 hover:text-white"
//           >
//             Food Story
//           </Link>

//           <Link
//             to="/generaterecipe"
//             className="group rounded-xl bg-gradient-to-r from-blue-500 to-green-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-green-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-400 hover:to-green-400 hover:shadow-lg"
//           >
//             <span className="mr-1">✨</span>
//             Generate Recipes
//           </Link>

//           <Link
//             to="/Nutrireads"
//             className="rounded-xl px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-200 hover:bg-white/10 hover:text-white"
//           >
//             Nutri Reads
//           </Link>

//           <Link
//             to="/aboutus"
//             className="rounded-xl px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-200 hover:bg-white/10 hover:text-white"
//           >
//             About Us
//           </Link>
//         </nav>

       
//         <div className="flex items-center gap-2 md:hidden">
//           <Link
//             to="/generaterecipe"
//             className="rounded-lg bg-gradient-to-r from-blue-500 to-green-500 px-3 py-2 text-sm font-semibold text-white shadow-md"
//           >
//             ✨ Recipe
//           </Link>

//           <Link
//             to="/foodstory"
//             className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-gray-200 transition hover:bg-white/10"
//           >
//             Story
//           </Link>
//         </div>
//       </div>

//       <div className="flex overflow-x-auto border-t border-white/5 bg-white/[0.02] px-4 py-2 md:hidden">
//         <div className="mx-auto flex min-w-max items-center gap-2">
//           <Link
//             to="/"
//             className="rounded-lg px-3 py-1.5 text-sm text-gray-400 hover:bg-white/10 hover:text-white"
//           >
//             Home
//           </Link>

//           <Link
//             to="/Nutrireads"
//             className="rounded-lg px-3 py-1.5 text-sm text-gray-400 hover:bg-white/10 hover:text-white"
//           >
//             Nutri Reads
//           </Link>

//           <Link
//             to="/aboutus"
//             className="rounded-lg px-3 py-1.5 text-sm text-gray-400 hover:bg-white/10 hover:text-white"
//           >
//             About Us
//           </Link>
//         </div>
//       </div>
//     </header>
//   ) : (
//     <header className="border-b border-white/10 bg-gray-950 px-4 py-4 text-white shadow-lg">
//       <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2">
//         <Link
//           to="/generaterecip"
//           className="rounded-xl bg-gradient-to-r from-blue-500 to-green-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
//         >
//           ✨ Generate Recipes
//         </Link>

//         <Link
//           to="/foodstory"
//           className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-200 transition hover:bg-white/10 hover:text-white"
//         >
//           🍽️ Food Story
//         </Link>

//         <Link
//           to="/nutrirea"
//           className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-200 transition hover:bg-white/10 hover:text-white"
//         >
//           📖 Nutri Read
//         </Link>
//       </div>
//     </header>
//   )}
// </>
);













};
