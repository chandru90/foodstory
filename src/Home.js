import React, { useEffect, useState, useCallback } from "react";
// import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import { Link } from "react-router-dom";

export const Home = () => {
  // const [recipes, setRecipes] = useState([]);
  // const [savedRecipes, setSavedRecipes] = useState([]);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true); 

  // const userID = useGetUserID();

  // const fetchRecipes = useCallback(async () => {
    
  //   try {
  //     const response = await axios.get(
  //       "https://recipe-wnrc.onrender.com/recipes"
  //     );
  //     localStorage.setItem("recipes", JSON.stringify(response.data));
  //     setRecipes(response.data);
  //     setLoading(false);
  //   } catch (err) {
  //     console.error(err);
  //     setError("Failed to load recipes. Please try again later.");
  //     setLoading(false);
  //   }
  // }, []);

  // const fetchSavedRecipes = useCallback(async () => {
  //   if (userID) {
  //     try {
  //       const response = await axios.get(
  //         `https://recipe-wnrc.onrender.com/recipes/savedRecipes/${userID}`
  //       );
  //       setSavedRecipes(response.data.savedRecipes);
  //     } catch (err) {
  //       console.error(err);
  //       setError("Failed to load saved recipes. Please try again later.");
  //     }
  //   }
  // }, [userID]);

  // useEffect(() => {
  //   fetchRecipes();
  //   fetchSavedRecipes();
  // }, [fetchRecipes, fetchSavedRecipes]);

  // const saveRecipe = async (recipeID) => {
  //   if (!userID) {
  //     alert("Please log in to save the recipe.");
  //     return;
  //   }

  //   try {
  //     const response = await axios.put(
  //       "https://recipe-wnrc.onrender.com/recipes",
  //       {
  //         recipeID,
  //         userID,
  //       }
  //     );
  //     setSavedRecipes(response.data.savedRecipes);
  //   } catch (err) {
  //     console.error(err);
  //     setError("Failed to save the recipe. Please try again later.");
  //   }
  // };

  // const isRecipeSaved = (id) => savedRecipes.includes(id);
// return (
//   // <div
//   //   className="min-h-screen bg-cover bg-center relative"
//   //   style={{ backgroundImage: `url("mealrecipe.jpg")` }}
//   // >
//   //   {/* Dark overlay */}
//   //   <div className="absolute inset-0 bg-black/60" />

//   //   {/* Content */}
//   //   <div className="relative z-10 max-w-7xl mx-auto px-4 py-10 text-white">
      
//   //     {/* Header */}
//   //     <h1 className="text-5xl font-bold text-center mb-10 tracking-wide">
//   //       Recipes
//   //     </h1>

//   //     {/* Error */}
//   //     {error && (
//   //       <div className="text-red-400 text-center mb-6">
//   //         {error}
//   //       </div>
//   //     )}

//   //     {/* Loading */}
//   //     {loading ? (
//   //       <div className="flex flex-col items-center mt-20">
//   //         <div className="loader" />
//   //         <p className="mt-4 text-white/80">Loading recipes...</p>
//   //       </div>
//   //     ) : (
//   //       <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//   //         {recipes.map((recipe) => (
//   //           <div
//   //             key={recipe._id}
//   //             className="bg-white/95 text-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-[1.03] transition-transform duration-300"
//   //           >
//   //             <Link to={`/recipe/${recipe._id}`} className="block">
                
//   //               {/* Image */}
//   //               {recipe.imageUrl && (
//   //                 <div className="h-40 w-full overflow-hidden">
//   //                   <img
//   //                     src={recipe.imageUrl}
//   //                     alt={recipe.name}
//   //                     loading="lazy"
//   //                   />
//   //                 </div>
//   //               )}

//   //               {/* Content */}
//   //               <div className="p-5 text-center">
//   //                 <h2 className="text-xl font-bold text-blue-600 mb-2">
//   //                   {recipe.name}
//   //                 </h2>

//   //                 <p className="text-sm text-gray-600 mb-2">
//   //                   {recipe.description}
//   //                 </p>

//   //                 <p className="text-xs text-gray-500">
//   //                   Cooking Time: {recipe.cookingTime} mins
//   //                 </p>
//   //               </div>
//   //             </Link>

//   //             {/* Button */}
//   //             <div className="p-4 pt-0">
//   //               <button
//   //                 onClick={() => saveRecipe(recipe._id)}
//   //                 disabled={!userID || isRecipeSaved(recipe._id)}
//   //                 className={`w-full py-2 rounded-lg font-semibold transition ${
//   //                   !userID || isRecipeSaved(recipe._id)
//   //                     ? "bg-gray-400 cursor-not-allowed"
//   //                     : "bg-blue-500 hover:bg-blue-600 text-white"
//   //                 }`}
//   //               >
//   //                 {!userID
//   //                   ? "Save"
//   //                   : isRecipeSaved(recipe._id)
//   //                   ? "Saved"
//   //                   : "Save"}
//   //               </button>
//   //             </div>
//   //           </div>
//   //         ))}
//   //       </div>
//   //     )}
//   //   </div>
//   // </div>

// <div className="flex flex-col gap-10">
//   <div className="bg-green-700 mt-12 rounded-lg ml-8 mr-8">
//     <div className="flex flex-col md:flex-row items-center">

//       {/* Image */}
//      <div className="md:w-[40%] w-[60%]  flex justify-center items-center">
//   {/* <img
//     src="sampimg.webp"
//     alt="Healthy Food"
//     className="w-[60%] h-80 rounded-lg object-cover
//              animate-float transition-transform duration-500
//              hover:scale-110"
//   />
// </div> */}
// <img
//   src="sampimg.webp"
//   alt="Healthy Food"
//   className="w-[60%] h-80 rounded-lg object-cover
//              opacity-0
//              animate-[zoomIn_1s_ease-out_forwards]
//              hover:scale-110 transition-transform duration-500"/>

//       {/* Content */}
//       <div className="md:w-[60%] w-full p-8 text-white">
//         <p className="text-lg leading-8  mt-12">
//           <strong>Discover Delicious Recipes & Eat Healthier</strong>
         

//           Cook smarter, eat better, and achieve your nutrition goals with our
//           all-in-one Recipe & Nutrition platform. Explore thousands of delicious
//           recipes, create and save your own favorites, and receive personalized
//           meal recommendations based on your daily nutritional needs.
          

//           Whether you're looking for quick meals, healthy recipes, or balanced
//           meal plans, our platform helps you make every meal both nutritious and
//           enjoyable.
//           <br /><br />

//           ✔ Explore Healthy Recipes <br />
//           ✔ Create & Share Your Own Dishes <br />
//           ✔ Track Nutritional Information <br />
//           ✔ Plan Balanced Meals with Smart Recipe Recommendations
//           <br /><br />

//           <strong>Start Your Healthy Cooking Journey Today!</strong>
//         </p>
//       </div>

//     </div>
//   </div>
// </div>



// );
// };
// localstorage.setItem({
//   "meal_plan": {
//     "day_1": {
//       "breakfast": {
//         "recipe_name": "Coconut Banana Oatmeal Porridge Recipe",
//         "calories": 350,
//         "prep_time": "5 mins",
//         "cook_time": "10 mins",
//         "macros": {
//           "protein": "10g",
//           "carbs": "55g",
//           "fat": "12g"
//         }
//       },
//       "lunch": {
//         "recipe_name": "Foxtail Millet Pilaf Recipe",
//         "calories": 420,
//         "prep_time": "15 mins",
//         "cook_time": "20 mins",
//         "macros": {
//           "protein": "12g",
//           "carbs": "65g",
//           "fat": "14g"
//         }
//       },
//       "healthy_snack": {
//         "recipe_name": "Kachumber Salad Recipe With Cucumber, Onion & Tomatoes",
//         "calories": 80,
//         "prep_time": "10 mins",
//         "cook_time": "0 mins",
//         "macros": {
//           "protein": "2g",
//           "carbs": "15g",
//           "fat": "1g"
//         }
//       },
//       "dinner": {
//         "recipe_name": "Baingan Sarson Ka Saag Recipe",
//         "calories": 310,
//         "prep_time": "15 mins",
//         "cook_time": "30 mins",
//         "macros": {
//           "protein": "8g",
//           "carbs": "30g",
//           "fat": "18g"
//         }
//       }
//     },
//     "day_2": {
//       "breakfast": {
//         "recipe_name": "Vegetable Upma",
//         "calories": 340,
//         "prep_time": "10 mins",
//         "cook_time": "15 mins",
//         "macros": {
//           "protein": "9g",
//           "carbs": "48g",
//           "fat": "11g"
//         }
//       },
//       "lunch": {
//         "recipe_name": "Brown Rice Vegetable Sambar",
//         "calories": 450,
//         "prep_time": "20 mins",
//         "cook_time": "30 mins",
//         "macros": {
//           "protein": "15g",
//           "carbs": "62g",
//           "fat": "12g"
//         }
//       },
//       "healthy_snack": {
//         "recipe_name": "Roasted Chickpeas",
//         "calories": 120,
//         "prep_time": "5 mins",
//         "cook_time": "20 mins",
//         "macros": {
//           "protein": "6g",
//           "carbs": "18g",
//           "fat": "2g"
//         }
//       },
//       "dinner": {
//         "recipe_name": "Palak Dal",
//         "calories": 360,
//         "prep_time": "15 mins",
//         "cook_time": "25 mins",
//         "macros": {
//           "protein": "16g",
//           "carbs": "35g",
//           "fat": "10g"
//         }
//       }
//     },
//     "day_3": {
//       "breakfast": {
//         "recipe_name": "Ragi Dosa",
//         "calories": 320,
//         "prep_time": "10 mins",
//         "cook_time": "15 mins",
//         "macros": {
//           "protein": "8g",
//           "carbs": "46g",
//           "fat": "10g"
//         }
//       },
//       "lunch": {
//         "recipe_name": "Vegetable Quinoa Bowl",
//         "calories": 430,
//         "prep_time": "15 mins",
//         "cook_time": "20 mins",
//         "macros": {
//           "protein": "18g",
//           "carbs": "52g",
//           "fat": "13g"
//         }
//       },
//       "healthy_snack": {
//         "recipe_name": "Fruit Chaat",
//         "calories": 100,
//         "prep_time": "10 mins",
//         "cook_time": "0 mins",
//         "macros": {
//           "protein": "2g",
//           "carbs": "24g",
//           "fat": "0g"
//         }
//       },
//       "dinner": {
//         "recipe_name": "Mixed Vegetable Curry",
//         "calories": 340,
//         "prep_time": "15 mins",
//         "cook_time": "25 mins",
//         "macros": {
//           "protein": "10g",
//           "carbs": "28g",
//           "fat": "16g"
//         }
//       }
//     },
//     "day_4": {
//       "breakfast": {
//         "recipe_name": "Poha With Peanuts",
//         "calories": 330,
//         "prep_time": "10 mins",
//         "cook_time": "15 mins",
//         "macros": {
//           "protein": "9g",
//           "carbs": "50g",
//           "fat": "11g"
//         }
//       },
//       "lunch": {
//         "recipe_name": "Rajma Brown Rice",
//         "calories": 470,
//         "prep_time": "20 mins",
//         "cook_time": "35 mins",
//         "macros": {
//           "protein": "18g",
//           "carbs": "68g",
//           "fat": "10g"
//         }
//       },
//       "healthy_snack": {
//         "recipe_name": "Greek Yogurt With Berries",
//         "calories": 130,
//         "prep_time": "5 mins",
//         "cook_time": "0 mins",
//         "macros": {
//           "protein": "8g",
//           "carbs": "14g",
//           "fat": "3g"
//         }
//       },
//       "dinner": {
//         "recipe_name": "Vegetable Soup",
//         "calories": 280,
//         "prep_time": "10 mins",
//         "cook_time": "20 mins",
//         "macros": {
//           "protein": "9g",
//           "carbs": "22g",
//           "fat": "9g"
//         }
//       }
//     },
//     "day_5": {
//       "breakfast": {
//         "recipe_name": "Vegetable Idli",
//         "calories": 310,
//         "prep_time": "15 mins",
//         "cook_time": "20 mins",
//         "macros": {
//           "protein": "9g",
//           "carbs": "48g",
//           "fat": "8g"
//         }
//       },
//       "lunch": {
//         "recipe_name": "Chickpea Salad",
//         "calories": 400,
//         "prep_time": "15 mins",
//         "cook_time": "10 mins",
//         "macros": {
//           "protein": "17g",
//           "carbs": "45g",
//           "fat": "12g"
//         }
//       },
//       "healthy_snack": {
//         "recipe_name": "Mixed Nuts",
//         "calories": 150,
//         "prep_time": "0 mins",
//         "cook_time": "0 mins",
//         "macros": {
//           "protein": "5g",
//           "carbs": "6g",
//           "fat": "13g"
//         }
//       },
//       "dinner": {
//         "recipe_name": "Paneer Bhurji",
//         "calories": 390,
//         "prep_time": "10 mins",
//         "cook_time": "20 mins",
//         "macros": {
//           "protein": "22g",
//           "carbs": "12g",
//           "fat": "24g"
//         }
//       }
//     },
//     "day_6": {
//       "breakfast": {
//         "recipe_name": "Avocado Toast",
//         "calories": 340,
//         "prep_time": "10 mins",
//         "cook_time": "5 mins",
//         "macros": {
//           "protein": "8g",
//           "carbs": "35g",
//           "fat": "18g"
//         }
//       },
//       "lunch": {
//         "recipe_name": "Vegetable Khichdi",
//         "calories": 410,
//         "prep_time": "15 mins",
//         "cook_time": "25 mins",
//         "macros": {
//           "protein": "15g",
//           "carbs": "55g",
//           "fat": "10g"
//         }
//       },
//       "healthy_snack": {
//         "recipe_name": "Apple With Peanut Butter",
//         "calories": 160,
//         "prep_time": "5 mins",
//         "cook_time": "0 mins",
//         "macros": {
//           "protein": "5g",
//           "carbs": "20g",
//           "fat": "8g"
//         }
//       },
//       "dinner": {
//         "recipe_name": "Stuffed Bell Peppers",
//         "calories": 360,
//         "prep_time": "20 mins",
//         "cook_time": "30 mins",
//         "macros": {
//           "protein": "14g",
//           "carbs": "30g",
//           "fat": "14g"
//         }
//       }
//     },
//     "day_7": {
//       "breakfast": {
//         "recipe_name": "Besan Chilla",
//         "calories": 330,
//         "prep_time": "10 mins",
//         "cook_time": "15 mins",
//         "macros": {
//           "protein": "14g",
//           "carbs": "30g",
//           "fat": "12g"
//         }
//       },
//       "lunch": {
//         "recipe_name": "Vegetable Biryani",
//         "calories": 480,
//         "prep_time": "20 mins",
//         "cook_time": "35 mins",
//         "macros": {
//           "protein": "12g",
//           "carbs": "72g",
//           "fat": "15g"
//         }
//       },
//       "healthy_snack": {
//         "recipe_name": "Carrot & Cucumber Sticks",
//         "calories": 70,
//         "prep_time": "10 mins",
//         "cook_time": "0 mins",
//         "macros": {
//           "protein": "2g",
//           "carbs": "12g",
//           "fat": "1g"
//         }
//       },
//       "dinner": {
//         "recipe_name": "Lentil Soup",
//         "calories": 340,
//         "prep_time": "15 mins",
//         "cook_time": "30 mins",
//         "macros": {
//           "protein": "18g",
//           "carbs": "38g",
//           "fat": "8g"
//         }
//       }
//     }
//   }
// })


useEffect(() => {
  const fetchData = async () => {
    try {
      const resp = await axios.get("http://localhost:5000/api");

      const posts = resp.data.posts;

      // Store all posts in localStorage
      localStorage.setItem(
        "cachedata",
        JSON.stringify(posts)
      );

      console.log("cachedata:", posts);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, []);








return (
  <div className="flex flex-col gap-10">
    <div className="bg-green-800 mt-4 rounded-lg mx-8 shadow-xl gap-10">
      <div className="flex flex-col md:flex-row items-center">

        {/* Image */}
        <div className="md:w-[45%] w-full flex justify-center items-center p-6 gap-10">
          <img
            src="samplintroimg.jpg"
            alt="Healthy Food"
            className="w-[60%] h-80 rounded-2xl object-cover
                       shadow-2xl
                       animate-float
                       animate-zoomIn
                       transition-all duration-500
                       hover:scale-110 hover:rotate-2"
          />
        </div>

        {/* Content */}
        <div className="md:w-[55%] w-full p-8 text-white">
          <h1 className="text-4xl font-bold mb-6">
            Discover Delicious Recipes & Eat Healthier
          </h1>

          <p className="text-lg leading-8">
            Cook smarter, eat better, and achieve your nutrition goals with our
            all-in-one Recipe & Nutrition platform.

    

            Explore thousands of delicious recipes, create and save your own
            favorites, and receive personalized meal recommendations based on
            your daily nutritional needs.


            Whether you're looking for quick meals, healthy recipes, or balanced
            meal plans, our platform helps you make every meal both nutritious
            and enjoyable.

          

            ✔ Explore Healthy Recipes
            <br />
            ✔ Create & Share Your Own Dishes
            <br />
            ✔ Track Nutritional Information
            <br />
            ✔ Plan Balanced Meals with Smart Recipe Recommendations

            <br />
            <br />

            <span className="font-bold text-yellow-300">
              Start Your Healthy Cooking Journey Today!
            </span>
          </p>
        </div>

      </div>
  
    </div>
        <div className="mt-10 mx-auto max-w-5xl bg-green-900 text-white rounded-2xl shadow-xl p-8 leading-8">

  <h1 className="text-4xl font-bold text-center mb-8">
    🥗 Why Nutrition Matters
  </h1>

  <p className="text-justify text-lg mb-8">
    Good nutrition is the foundation of a healthy lifestyle. Eating a balanced
    diet provides your body with the essential nutrients it needs to produce
    energy, support growth, strengthen immunity, and maintain overall
    well-being. Choosing meals with the right balance of proteins,
    carbohydrates, healthy fats, vitamins, and minerals can help improve
    physical health, mental focus, and long-term wellness.
  </p>

  <h2 className="text-3xl font-semibold mb-4">
    🍽️ How Recipe Planning Helps
  </h2>

  <p className="text-justify text-lg mb-8">
    Recipe planning makes healthy eating easier by helping you organize your
    meals in advance. Instead of deciding what to cook every day, you can
    create balanced meal plans that match your nutritional needs and health
    goals. It also helps save time, reduce food waste, manage grocery shopping
    efficiently, and maintain portion control. With personalized recipe
    recommendations, meal planning becomes simple, convenient, and enjoyable.
  </p>

  <h2 className="text-3xl font-semibold mb-6">
    ✅ Benefits of Healthy Meal Planning
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    <div className="bg-green-800 p-4 rounded-xl">
      <h3 className="text-xl font-semibold mb-2">🥗 Balanced Nutrition</h3>
      <p>
        Choose recipes that provide the right mix of essential nutrients for a
        healthier lifestyle.
      </p>
    </div>

    <div className="bg-green-800 p-4 rounded-xl">
      <h3 className="text-xl font-semibold mb-2">⏱️ Save Time</h3>
      <p>
        Plan your meals in advance and reduce the stress of deciding what to
        cook every day.
      </p>
    </div>

    <div className="bg-green-800 p-4 rounded-xl">
      <h3 className="text-xl font-semibold mb-2">🛒 Reduce Food Waste</h3>
      <p>
        Buy only the ingredients you need and make better use of your groceries.
      </p>
    </div>

    <div className="bg-green-800 p-4 rounded-xl">
      <h3 className="text-xl font-semibold mb-2">❤️ Support Your Health Goals</h3>
      <p>
        Whether your goal is weight management, muscle building, or simply
        eating healthier, planned meals help you stay on track.
      </p>
    </div>

    <div className="bg-green-800 p-4 rounded-xl">
      <h3 className="text-xl font-semibold mb-2">🍽️ Enjoy Variety</h3>
      <p>
        Explore new recipes and create diverse, nutritious meals without
        repeating the same dishes.
      </p>
    </div>

    <div className="bg-green-800 p-4 rounded-xl">
      <h3 className="text-xl font-semiboFld mb-2">📊 Track Nutritional Intake</h3>
      <p>
        Monitor calories, protein, carbohydrates, fats, and other nutrients to
        make informed food choices.
      </p>
    </div>

  </div>
</div>
</div>

  
);
}