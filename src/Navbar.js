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
);













};
