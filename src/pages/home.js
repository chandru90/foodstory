// import React, {  useState, useCallback } from "react";
// import { useGetUserID } from "../hooks/useGetUserID";
// // import axios from "axios";
// import { Link } from "react-router-dom";

// export const Home = () => {
// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const resp = await axios.get("https://recipe-wnrc.onrender.com/api");

//       const posts = resp.data.posts;

//       // Store all posts in localStorage
//       localStorage.setItem(
//         "cachedata",
//         JSON.stringify(posts)
//       );

//       console.log("cachedata:", posts);

//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   fetchData();
// }, []);


// return (
//   <div className="flex flex-col gap-10">
//     <div className="bg-green-800 mt-4 rounded-lg mx-8 shadow-xl gap-10">
//       <div className="flex flex-col md:flex-row items-center">

//         {/* Image */}
//         <div className="md:w-[45%] w-full flex justify-center items-center p-6 gap-10">
//           <img
//             src="samplintroimg.jpg"
//             alt="Healthy Food"
//             className="w-[60%] h-80 rounded-2xl object-cover
//                        shadow-2xl
//                        animate-float
//                        animate-zoomIn
//                        transition-all duration-500
//                        hover:scale-110 hover:rotate-2"
//           />
//         </div>

//         {/* Content */}
//         <div className="md:w-[55%] w-full p-8 text-white">
//           <h1 className="text-4xl font-bold mb-6">
//             Discover Delicious Recipes & Eat Healthier
//           </h1>

//           <p className="text-lg leading-8">
//             Cook smarter, eat better, and achieve your nutrition goals with our
//             all-in-one Recipe & Nutrition platform.

    

//             Explore thousands of delicious recipes, create and save your own
//             favorites, and receive personalized meal recommendations based on
//             your daily nutritional needs.


//             Whether you're looking for quick meals, healthy recipes, or balanced
//             meal plans, our platform helps you make every meal both nutritious
//             and enjoyable.

          
// <br />
//             ✔ Explore Healthy Recipes
//             <br />
//             ✔ Create & Share Your Own Dishes
//             <br />
//             ✔ Track Nutritional Information
//             <br />
//             ✔ Plan Balanced Meals with Smart Recipe Recommendations

//             <br />
//             <br />

//             <span className="font-bold text-yellow-300">
//               Start Your Healthy Cooking Journey Today!
//             </span>
//           </p>
//         </div>

//       </div>
  
//     </div>
//         <div className="mt-10 mx-auto max-w-5xl bg-green-900 text-white rounded-2xl shadow-xl p-8 leading-8">

//   <h1 className="text-4xl font-bold text-center mb-8">
//     🥗 Why Nutrition Matters
//   </h1>

//   <p className="text-justify text-lg mb-8">
//     Good nutrition is the foundation of a healthy lifestyle. Eating a balanced
//     diet provides your body with the essential nutrients it needs to produce
//     energy, support growth, strengthen immunity, and maintain overall
//     well-being. Choosing meals with the right balance of proteins,
//     carbohydrates, healthy fats, vitamins, and minerals can help improve
//     physical health, mental focus, and long-term wellness.
//   </p>

//   <h2 className="text-3xl font-semibold mb-4">
//     🍽️ How Recipe Planning Helps
//   </h2>

//   <p className="text-justify text-lg mb-8">
//     Recipe planning makes healthy eating easier by helping you organize your
//     meals in advance. Instead of deciding what to cook every day, you can
//     create balanced meal plans that match your nutritional needs and health
//     goals. It also helps save time, reduce food waste, manage grocery shopping
//     efficiently, and maintain portion control. With personalized recipe
//     recommendations, meal planning becomes simple, convenient, and enjoyable.
//   </p>

//   <h2 className="text-3xl font-semibold mb-6">
//     ✅ Benefits of Healthy Meal Planning
//   </h2>

//   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//     <div className="bg-green-800 p-4 rounded-xl">
//       <h3 className="text-xl font-semibold mb-2">🥗 Balanced Nutrition</h3>
//       <p>
//         Choose recipes that provide the right mix of essential nutrients for a
//         healthier lifestyle.
//       </p>
//     </div>

//     <div className="bg-green-800 p-4 rounded-xl">
//       <h3 className="text-xl font-semibold mb-2">⏱️ Save Time</h3>
//       <p>
//         Plan your meals in advance and reduce the stress of deciding what to
//         cook every day.
//       </p>
//     </div>

//     <div className="bg-green-800 p-4 rounded-xl">
//       <h3 className="text-xl font-semibold mb-2">🛒 Reduce Food Waste</h3>
//       <p>
//         Buy only the ingredients you need and make better use of your groceries.
//       </p>
//     </div>

//     <div className="bg-green-800 p-4 rounded-xl">
//       <h3 className="text-xl font-semibold mb-2">❤️ Support Your Health Goals</h3>
//       <p>
//         Whether your goal is weight management, muscle building, or simply
//         eating healthier, planned meals help you stay on track.
//       </p>
//     </div>

//     <div className="bg-green-800 p-4 rounded-xl">
//       <h3 className="text-xl font-semibold mb-2">🍽️ Enjoy Variety</h3>
//       <p>
//         Explore new recipes and create diverse, nutritious meals without
//         repeating the same dishes.
//       </p>
//     </div>

//     <div className="bg-green-800 p-4 rounded-xl">
//       <h3 className="text-xl font-semibold mb-2">📊 Track Nutritional Intake</h3>
//       <p>
//         Monitor calories, protein, carbohydrates, fats, and other nutrients to
//         make informed food choices.
//       </p>
//     </div>

//   </div>
// </div>
// </div>

  
// );
// }




// import React from "react";
// import { Link } from "react-router-dom";

// export const Home = () => {
//   const storyFeatures = [
//     {
//       icon: "👨‍👩‍👧‍👦",
//       title: "Family Memories",
//       text: "Discover recipes and stories that bring back the warmth of home and family traditions.",
//     },
//     {
//       icon: "🌎",
//       title: "Culture & Tradition",
//       text: "Explore the stories, traditions, and cultures behind dishes from around the world.",
//     },
//     {
//       icon: "❤️",
//       title: "Personal Experiences",
//       text: "Share the special memories and moments connected to the food you love.",
//     },
//     {
//       icon: "👩‍🍳",
//       title: "People & Recipes",
//       text: "Meet the people behind meaningful recipes and discover what makes their dishes special.",
//     },
//   ];

//   const generatorFeatures = [
//     {
//       icon: "🥕",
//       title: "Add Your Ingredients",
//       text: "Tell us what ingredients you have and discover creative ways to use them.",
//     },
//     {
//       icon: "⚙️",
//       title: "Customize Your Recipe",
//       text: "Choose your meal type, cuisine, dietary preferences, and more.",
//     },
//     {
//       icon: "🍳",
//       title: "Generate a Recipe",
//       text: "Turn your ingredients and preferences into a delicious personalized recipe.",
//     },
//     {
//       icon: "📊",
//       title: "See Nutritional Values",
//       text: "Understand your meal with calories, protein, carbohydrates, fats, and other nutrients.",
//     },
//   ];

//   const nutrients = [
//     {
//       icon: "🔥",
//       value: "Calories",
//       color: "bg-orange-100 text-orange-600",
//     },
//     {
//       icon: "💪",
//       value: "Protein",
//       color: "bg-blue-100 text-blue-600",
//     },
//     {
//       icon: "🍚",
//       value: "Carbohydrates",
//       color: "bg-yellow-100 text-yellow-600",
//     },
//     {
//       icon: "🥑",
//       value: "Healthy Fats",
//       color: "bg-green-100 text-green-600",
//     },
//     {
//       icon: "🌾",
//       value: "Fiber",
//       color: "bg-amber-100 text-amber-700",
//     },
//     {
//       icon: "💧",
//       value: "Other Nutrients",
//       color: "bg-cyan-100 text-cyan-600",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">

//       {/* =====================================================
//           HERO SECTION
//       ====================================================== */}
//       <section className="px-4 sm:px-6 lg:px-10 pt-6">

//         <div className="relative max-w-7xl mx-auto overflow-hidden rounded-[2rem] bg-gradient-to-br from-green-950 via-green-900 to-emerald-700 shadow-2xl">

//           {/* Background decoration */}
//           <div className="absolute -top-32 -right-20 w-96 h-96 rounded-full bg-yellow-300/10 blur-3xl" />
//           <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-green-400/20 blur-3xl" />

//           <div className="relative grid lg:grid-cols-2 items-center min-h-[620px]">

//             {/* Hero content */}
//             <div className="p-8 sm:p-12 lg:p-16 text-white">

//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
//                 <span>🍽️</span>
//                 <span className="text-sm font-medium text-green-100">
//                   Food • Stories • Recipes • Nutrition
//                 </span>
//               </div>

//               <h1 className="mt-7 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
//                 Every Recipe Has a Story.
//                 <span className="block text-yellow-300 mt-2">
//                   Every Meal Brings Us Together.
//                 </span>
//               </h1>

//               <p className="mt-6 text-lg leading-8 text-green-100 max-w-xl">
//                 Food is more than something we eat. It brings people together,
//                 preserves traditions, creates memories, and connects us to
//                 different cultures.
//               </p>

//               <p className="mt-4 text-base leading-7 text-green-200 max-w-xl">
//                 Explore inspiring food stories, generate delicious recipes,
//                 and discover the nutritional value behind every meal.
//               </p>

//               <div className="flex flex-wrap gap-4 mt-9">

//                 <Link
//                   to="/foodstories"
//                   className="px-6 py-3.5 rounded-xl bg-yellow-300 text-green-950 font-bold shadow-lg hover:bg-yellow-400 hover:-translate-y-1 transition-all"
//                 >
//                   📖 Explore Food Stories
//                 </Link>

//                 <Link
//                   to="/recipesuggestor"
//                   className="px-6 py-3.5 rounded-xl border border-white/30 bg-white/10 text-white font-semibold backdrop-blur hover:bg-white/20 transition-all"
//                 >
//                   🧑‍🍳 Generate Recipe
//                 </Link>

//               </div>

//             </div>

//             {/* Hero image */}
//             <div className="relative flex justify-center p-8 lg:p-12">

//               <div className="relative w-full max-w-lg">

//                 <div className="absolute inset-8 bg-yellow-300/20 blur-3xl rounded-full" />

//                 <img
//                   src="/samplintroimg.jpg"
//                   alt="People enjoying food together"
//                   className="relative w-full h-[360px] sm:h-[430px] lg:h-[480px] object-cover rounded-[2rem] border-4 border-white/20 shadow-2xl"
//                 />

//                 {/* Floating card */}
//                 <div className="absolute -bottom-6 left-4 sm:left-8 bg-white rounded-2xl p-4 shadow-2xl">
//                   <div className="flex items-center gap-3">
//                     <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-2xl">
//                       ❤️
//                     </div>

//                     <div>
//                       <p className="text-xs text-gray-500">
//                         The power of food
//                       </p>
//                       <p className="font-bold text-green-900">
//                         Connect • Share • Enjoy
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//               </div>

//             </div>

//           </div>
//         </div>
//       </section>


//       {/* =====================================================
//           INTRO / CONNECTION
//       ====================================================== */}
//       <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">

//         <div className="text-center max-w-3xl mx-auto">

//           <span className="inline-flex px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-bold">
//             ❤️ THE POWER OF FOOD
//           </span>

//           <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
//             Food Has the Power to Connect Us
//           </h2>

//           <p className="mt-6 text-lg leading-8 text-gray-600">
//             From a family recipe passed down through generations to a simple
//             meal shared with friends, food creates connections that go beyond
//             the plate.
//           </p>

//         </div>


//         {/* Connection flow */}
//         <div className="mt-12 flex flex-wrap justify-center items-center gap-3 sm:gap-5">

//           {[
//             ["🍲", "Food"],
//             ["📖", "Stories"],
//             ["💭", "Memories"],
//             ["👨‍👩‍👧", "People"],
//             ["❤️", "Connection"],
//           ].map(([icon, title], index) => (
//             <React.Fragment key={title}>

//               <div className="flex flex-col items-center">
//                 <div className="w-20 h-20 rounded-2xl bg-white shadow-lg border border-green-100 flex items-center justify-center text-3xl">
//                   {icon}
//                 </div>

//                 <p className="mt-2 font-bold text-green-900">
//                   {title}
//                 </p>
//               </div>

//               {index < 4 && (
//                 <span className="hidden sm:block text-2xl text-green-400">
//                   →
//                 </span>
//               )}

//             </React.Fragment>
//           ))}

//         </div>

//       </section>


//       {/* =====================================================
//           FOOD STORIES
//       ====================================================== */}
//       <section className="bg-green-950 py-20 px-4 sm:px-6">

//         <div className="max-w-6xl mx-auto">

//           <div className="grid lg:grid-cols-2 gap-12 items-center">

//             {/* Content */}
//             <div className="text-white">

//               <span className="text-yellow-300 text-sm font-bold tracking-wider">
//                 📖 FOOD STORIES
//               </span>

//               <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black">
//                 Every Dish Has a Story
//               </h2>

//               <p className="mt-6 text-green-100 text-lg leading-8">
//                 A recipe can be more than a list of ingredients. It can carry
//                 the memories of a childhood kitchen, the traditions of a
//                 culture, or the story of a special person.
//               </p>

//               <p className="mt-4 text-green-200 leading-7">
//                 Our Food Stories space gives you an opportunity to share those
//                 experiences and discover the stories behind the meals loved by
//                 others.
//               </p>

//               <Link
//                 to="/foodstory"
//                 className="inline-flex mt-8 px-6 py-3 rounded-xl bg-yellow-300 text-green-950 font-bold hover:bg-yellow-400 hover:-translate-y-1 transition-all"
//               >
//                 Discover Food Stories →
//               </Link>

//             </div>


//             {/* Story cards */}
//             <div className="grid sm:grid-cols-2 gap-4">

//               {storyFeatures.map((feature) => (
//                 <div
//                   key={feature.title}
//                   className="p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm hover:bg-white hover:text-gray-800 transition-all duration-300 group"
//                 >

//                   <div className="w-14 h-14 rounded-xl bg-green-800 flex items-center justify-center text-3xl group-hover:bg-green-100">
//                     {feature.icon}
//                   </div>

//                   <h3 className="mt-5 text-xl font-bold text-white group-hover:text-green-900">
//                     {feature.title}
//                   </h3>

//                   <p className="mt-3 text-sm leading-6 text-green-200 group-hover:text-gray-600">
//                     {feature.text}
//                   </p>

//                 </div>
//               ))}

//             </div>

//           </div>

//         </div>
//       </section>


//       {/* =====================================================
//           MORE THAN A MEAL
//       ====================================================== */}
//       <section className="px-4 sm:px-6 py-20">

//         <div className="max-w-5xl mx-auto text-center">

//           <div className="text-6xl">
//             🍛
//           </div>

//           <h2 className="mt-6 text-3xl sm:text-4xl font-black text-gray-900">
//             More Than a Meal
//           </h2>

//           <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-9 max-w-3xl mx-auto">
//             A meal can start a conversation.
//             <br />
//             A recipe can preserve a tradition.
//             <br />
//             A familiar flavor can bring back a childhood memory.
//           </p>

//           <div className="mt-8 inline-flex px-6 py-3 rounded-full bg-green-100 text-green-800 font-bold">
//             Food creates memories that last ❤️
//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           RECIPE GENERATOR
//       ====================================================== */}
//       <section className="px-4 sm:px-6 py-20 bg-gradient-to-br from-orange-50 to-yellow-50">

//         <div className="max-w-6xl mx-auto">

//           <div className="text-center max-w-3xl mx-auto">

//             <span className="inline-flex px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-bold">
//               🧑‍🍳 RECIPE GENERATOR
//             </span>

//             <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
//               Turn Your Ingredients Into Something Delicious
//             </h2>

//             <p className="mt-6 text-lg text-gray-600 leading-8">
//               Not sure what to cook? Let our Recipe Generator create a meal
//               based on your ingredients, preferences, and needs.
//             </p>

//           </div>


//           {/* Generator steps */}
//           <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

//             {generatorFeatures.map((feature, index) => (
//               <div
//                 key={feature.title}
//                 className="relative bg-white rounded-2xl p-6 shadow-md border border-orange-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
//               >

//                 <div className="absolute top-4 right-4 text-xs font-bold text-orange-400">
//                   0{index + 1}
//                 </div>

//                 <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl">
//                   {feature.icon}
//                 </div>

//                 <h3 className="mt-5 text-xl font-bold text-gray-900">
//                   {feature.title}
//                 </h3>

//                 <p className="mt-3 text-gray-600 leading-7">
//                   {feature.text}
//                 </p>

//               </div>
//             ))}

//           </div>


//           <div className="text-center mt-10">

//             <Link
//               to="//generaterecipe"
//               className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-green-900 text-white font-bold shadow-lg hover:bg-green-800 hover:-translate-y-1 transition-all"
//             >
//               ✨ Generate My Recipe
//               <span>→</span>
//             </Link>

//           </div>

//         </div>
//       </section>


//       {/* =====================================================
//           NUTRITION
//       ====================================================== */}
//       <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">

//         <div className="grid lg:grid-cols-2 gap-12 items-center">

//           {/* Text */}
//           <div>

//             <span className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold">
//               📊 RECIPE + NUTRITION
//             </span>

//             <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
//               Know What's on Your Plate
//             </h2>

//             <p className="mt-6 text-lg text-gray-600 leading-8">
//               Delicious food and healthy choices can go hand in hand. Our
//               recipe generator doesn't just give you cooking instructions —
//               it also helps you understand the nutritional value of your meal.
//             </p>

//             <p className="mt-4 text-gray-500 leading-7">
//               Use nutritional information to make informed food choices and
//               better understand the meals you prepare.
//             </p>

//             <Link
//               to="/nutrirea"
//               className="inline-flex mt-8 px-6 py-3 rounded-xl bg-green-900 text-white font-bold hover:bg-green-800 transition"
//             >
//               Explore Nutrition →
//             </Link>

//           </div>


//           {/* Nutrient cards */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

//             {nutrients.map((nutrient) => (
//               <div
//                 key={nutrient.value}
//                 className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 text-center hover:-translate-y-1 transition-all"
//               >

//                 <div
//                   className={`mx-auto w-14 h-14 rounded-xl flex items-center justify-center text-2xl ${nutrient.color}`}
//                 >
//                   {nutrient.icon}
//                 </div>

//                 <p className="mt-4 font-bold text-gray-800">
//                   {nutrient.value}
//                 </p>

//               </div>
//             ))}

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           HEALTHY EATING
//       ====================================================== */}
//       <section className="px-4 sm:px-6 py-20 bg-green-50">

//         <div className="max-w-5xl mx-auto text-center">

//           <span className="text-green-700 font-bold text-sm tracking-wider">
//             🌱 HEALTHY LIVING
//           </span>

//           <h2 className="mt-4 text-3xl sm:text-4xl font-black text-gray-900">
//             Eat Well. Cook Smart. Live Better.
//           </h2>

//           <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
//             Healthy eating doesn't have to mean boring food or complicated
//             meal plans. Discover exciting recipes, understand their
//             nutritional values, and build better eating habits one meal at a
//             time.
//           </p>

//         </div>

//       </section>


//       {/* =====================================================
//           FINAL CTA
//       ====================================================== */}
//       <section className="px-4 sm:px-6 py-20">

//         <div className="relative max-w-5xl mx-auto overflow-hidden rounded-[2rem] bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-300 p-8 sm:p-14 text-center shadow-2xl">

//           <div className="absolute -top-20 -left-20 w-52 h-52 rounded-full bg-white/20" />
//           <div className="absolute -bottom-24 -right-16 w-64 h-64 rounded-full bg-white/20" />

//           <div className="relative">

//             <div className="text-6xl">
//               🥗
//             </div>

//             <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black text-green-950">
//               Your Next Meal Could Become Your Next Story.
//             </h2>

//             <p className="mt-5 max-w-2xl mx-auto text-lg text-green-900 leading-8">
//               Explore stories. Generate recipes. Discover nutrition.
//               Share the food that brings people together.
//             </p>

//             <div className="mt-8 flex flex-wrap justify-center gap-4">

//               <Link
//                 to="/recipesuggestor"
//                 className="px-7 py-3.5 rounded-xl bg-green-950 text-white font-bold shadow-lg hover:bg-green-900 hover:-translate-y-1 transition-all"
//               >
//                 🧑‍🍳 Generate Recipe
//               </Link>

//               <Link
//                 to="/foodstories"
//                 className="px-7 py-3.5 rounded-xl bg-white text-green-950 font-bold shadow-lg hover:-translate-y-1 transition-all"
//               >
//                 ❤️ Share a Food Story
//               </Link>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           FOOTER MESSAGE
//       ====================================================== */}
//       <footer className="bg-green-950 text-white py-10 text-center">

//         <div className="text-3xl">
//           🍽️
//         </div>

//         <p className="mt-3 text-green-200">
//           Food connects us. Stories inspire us. Recipes bring us together.
//         </p>

//         <p className="mt-2 text-sm text-green-400">
//           Cook • Share • Discover • Connect
//         </p>

//       </footer>

//     </div>
//   );
// };





import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [cuisineIndex, setCuisineIndex] = useState(0);

  const storyFeatures = [
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Memories",
      text: "Discover recipes and stories that bring back the warmth of home and family traditions.",
    },
    {
      icon: "🌎",
      title: "Culture & Tradition",
      text: "Explore the stories, traditions, and cultures behind dishes from around the world.",
    },
    {
      icon: "❤️",
      title: "Personal Experiences",
      text: "Share the special memories and moments connected to the food you love.",
    },
    {
      icon: "👩‍🍳",
      title: "People & Recipes",
      text: "Meet the people behind meaningful recipes and discover what makes their dishes special.",
    },
  ];

  const generatorFeatures = [
    {
      icon: "🥕",
      title: "Add Your Ingredients",
      text: "Tell us what ingredients you have and discover creative ways to use them.",
    },
    {
      icon: "⚙️",
      title: "Customize Your Recipe",
      text: "Choose your meal type, cuisine, dietary preferences, and more.",
    },
    {
      icon: "🍳",
      title: "Generate a Recipe",
      text: "Turn your ingredients and preferences into a delicious personalized recipe.",
    },
    {
      icon: "📊",
      title: "See Nutritional Values",
      text: "Understand your meal with calories, protein, carbohydrates, fats, and other nutrients.",
    },
  ];

  const nutrients = [
    {
      icon: "🔥",
      value: "Calories",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: "💪",
      value: "Protein",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: "🍚",
      value: "Carbohydrates",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: "🥑",
      value: "Healthy Fats",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: "🌾",
      value: "Fiber",
      color: "bg-amber-100 text-amber-700",
    },
    {
      icon: "💧",
      value: "Other Nutrients",
      color: "bg-cyan-100 text-cyan-600",
    },
  ];

  // =====================================================
  // GLOBAL CUISINES
  // =====================================================

 const globalCuisines = [
  {
    name: "Indian Cuisine",
    country: "India",
    emoji: "🇮🇳",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80",
    description:
      "A vibrant world of spices, grains, vegetables, lentils, curries, breads, and regional traditions.",
    highlight: "Spices • Curries • Rice • Lentils",

    desc: "Indian food isn't simply one cuisine. It is a vast collection of regional foods, cooking techniques, ingredients, and traditions. Indian cuisine evolved by continuously absorbing, adapting, and transforming influences while preserving deeply rooted local traditions. It celebrates incredible diversity. There isn't a single \"Indian diet.\" The food of Punjab can look very different from the food of Kerala. A Bengali kitchen may feature fish and mustard. A Tamil kitchen may revolve around rice, lentils, vegetables, tamarind, and spices. A Gujarati meal may include an array of vegetarian dishes. Kashmiri cuisine has its own distinctive spices, techniques, and dishes. Goa has a strong seafood tradition influenced by its coastal environment and history. The result is a remarkable culinary landscape where the same ingredient can be transformed into completely different dishes. Millets such as ragi, bajra, jowar, foxtail millet, and little millet have been cultivated and consumed across different regions of India for generations. Today, these traditional grains are receiving renewed attention for their nutritional value, agricultural resilience, and potential to contribute to more diverse and sustainable food systems. What may appear to be a modern food trend is, in many ways, a return to an age-old tradition. Walk into an Indian kitchen and you may encounter turmeric, cumin, coriander, cardamom, cinnamon, cloves, mustard seeds, fenugreek, black pepper, and many other spices. Spices contribute aroma, flavor, color, and culinary identity. An Indian meal is often more than one dish. Think about a traditional thali. You might find rice, roti, dal, vegetable preparations, curd, pickles, salad, chutney, a sweet, and regional specialties. The idea isn't necessarily about eating enormous quantities of everything. It is about creating a meal with different flavors, textures, aromas, and ingredients. Sweet. Sour. Salty. Spicy. Bitter. Savory. A single meal can become a sensory experience. One country. Hundreds of food traditions. Thousands of stories."
  },

  {
    name: "Mediterranean Cuisine",
    country: "Mediterranean",
    emoji: "🌊",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
    description:
      "Fresh vegetables, legumes, whole grains, olive oil, herbs, seafood, and simple cooking.",
    highlight: "Olive Oil • Vegetables • Grains • Seafood",

    desc: `
Mediterranean cuisine does not come from a single country or civilization.

It developed over thousands of years among the diverse communities living around the Mediterranean Sea, connecting Southern Europe, North Africa, and the Middle East.

Its foundations can be traced to ancient civilizations in the Mediterranean and the wider Fertile Crescent, where agriculture provided wheat, olives, grapes, legumes, vegetables, and herbs.

The Mediterranean diet has attracted enormous attention because research has repeatedly associated Mediterranean-style eating patterns with better cardiovascular health and other health benefits.

Researchers became particularly interested in the dietary patterns of Mediterranean populations during the mid-20th century, when observations from the Seven Countries Study helped draw attention to differences in cardiovascular disease and dietary patterns.

Over subsequent decades, research continued investigating Mediterranean-style eating.

Eventually, something that was once simply traditional regional food became one of the world's most recognized healthy eating patterns.
`
  },

  {
    name: "Japanese Cuisine",
    country: "Japan",
    emoji: "🇯🇵",
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=900&q=80",
    description:
      "Known for balance, seasonality, fresh ingredients, rice, seafood, fermented foods, and elegant presentation.",
    highlight: "Sushi • Rice • Seafood • Fermented Foods",

    desc: `
Imagine a table with a bowl of steamed rice, miso soup, grilled fish, lightly cooked vegetables, tofu, pickled vegetables and a small serving of fresh fruit.

Nothing looks excessive.

The portions are thoughtful.

The ingredients are recognizable.

The colors are natural.

And each element has its own place.

This simple picture captures something important about Japanese cuisine.

In 2013, traditional Japanese dietary culture associated with washoku was recognized by UNESCO as an Intangible Cultural Heritage.
`
  },

  {
    name: "Mexican Cuisine",
    country: "Mexico",
    emoji: "🇲🇽",
    image:
      "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=900&q=80",
    description:
      "Bold flavors combining corn, beans, vegetables, chilies, herbs, and traditional cooking techniques.",
    highlight: "Corn • Beans • Chilies • Avocado",

    desc: `
Imagine a table filled with warm corn tortillas, colorful beans, avocado, tomatoes, chillies, vegetables, fresh herbs, salsa and grilled foods.

There might be guacamole in the center, tortillas passed around the table, a bowl of beans simmering slowly, and the aroma of roasted chillies filling the kitchen.

The food is colorful.

The flavors are bold.

And almost every ingredient seems to carry a story.

This simple picture captures something important about Mexican cuisine.

Mexican food isn't simply tacos, burritos or nachos.

If there is one ingredient that tells the story of Mexican cuisine, it is maize, or corn.

Mexico is home to many varieties of chillies.

Avocados originated in Mesoamerica and have been cultivated in the region for centuries.

Cacao was valued by ancient Mesoamerican civilizations.

It was consumed in forms very different from the sweet chocolate products commonly eaten today.

Their popularity today has turned an ancient crop into a global food phenomenon.

Different chillies can create dramatically different flavors.

Some are fresh.

Some are dried.

Some are smoked.

Some are used primarily for aroma rather than intense heat.

So Mexican cuisine isn't simply "spicy."

Corn has been cultivated in Mesoamerica for thousands of years.

It can become:

Tortillas.
Tamales.
Atoles.
Tostadas.
Corn-based snacks.
Masa for countless traditional foods.

Tacos, burritos, and nachos are some of the most recognizable foods associated with Mexican cuisine, but each tells a different story. Tacos began as a simple way of enjoying flavorful fillings wrapped in a tortilla and have evolved into countless regional varieties. Burritos, commonly associated with northern Mexico, bring ingredients such as beans, meat, rice, and vegetables together inside a soft flour tortilla. Nachos are a more modern creation, born in the Mexican border region and later becoming popular around the world.

Together, these foods show how Mexican cuisine can be simple, creative, adaptable, and deeply connected to everyday life. Yet they are only a small part of Mexico's much larger culinary story.
`
  },

  {
    name: "Thai Cuisine",
    country: "Thailand",
    emoji: "🇹🇭",
    image:
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=900&q=80",
    description:
      "A beautiful balance of sweet, sour, salty, spicy, and aromatic flavors using fresh herbs and spices.",
    highlight: "Coconut • Herbs • Rice • Spices",

    desc: `
Imagine a table filled with fragrant jasmine rice, colorful vegetables, fresh herbs, chillies, lime, coconut, tofu, seafood and steaming bowls of curry.

There might be a bowl of spicy soup in the center, fresh basil scattered over a stir-fry, a small dish of chilli sauce on the side, and the aroma of lemongrass and ginger filling the kitchen.

The food is vibrant.

The aromas are fresh.

The flavors can be spicy, sour, salty, sweet and deeply aromatic—all in the same meal.

This simple picture captures something important about Thai cuisine.

Thai food isn't simply pad Thai, green curry or tom yum.

If there is one ingredient that tells the story of Thai cuisine, it is rice.

Rice is more than a carbohydrate.

It is deeply connected with Thai agriculture, culture and everyday meals.

Different varieties are used in different regions and dishes.

Jasmine rice is especially associated with Thai cuisine.

Walk into a Thai kitchen and you may encounter an extraordinary collection of aromas.

Lemongrass.

Thai basil.

Galangal.

Kaffir lime leaves.

Coriander.

Mint.

Ginger.

Garlic.

These ingredients don't simply add flavor.

They create layers of aroma.

The Story Behind Pad Thai

Few dishes are as globally associated with Thailand as pad Thai.

It combines rice noodles with ingredients that can include:

Tofu.

Egg.

Vegetables.

Bean sprouts.

Peanuts.

Tamarind-based flavors.

Fish sauce or other seasonings.

Lime.

Chillies.

What makes pad Thai fascinating is that it represents more than a noodle dish.

It reflects the influence of noodles and Chinese culinary techniques combined with Thai flavor preferences.

The dish eventually became strongly associated with Thai national food culture.

Today, it has traveled far beyond Thailand.
`
  },

  {
    name: "Korean Cuisine",
    country: "South Korea",
    emoji: "🇰🇷",
    image:
      "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=900&q=80",
    description:
      "Traditional Korean food combines rice, vegetables, fermented foods, soups, seafood, and flavorful seasonings.",
    highlight: "Kimchi • Rice • Vegetables • Fermented Foods",

    desc: `
Imagine a table filled with steaming rice, colorful vegetables, kimchi, seaweed, tofu, mushrooms, grilled foods and small bowls of flavorful side dishes.

There might be the aroma of sesame oil in the air, a bubbling bowl of soup in the center, kimchi adding a bright fermented tang, and everyone reaching across the table to share different dishes.

The table is colorful.

The flavors are bold.

And there is something special about the way the food is shared.

This simple picture captures something important about Korean cuisine.

Korean food isn't simply kimchi, bibimbap or Korean barbecue.

If there is one food that tells the story of Korean cuisine, it is rice.

Rice has long been an important staple in Korea.

It can be served alongside vegetables, seafood, meat, tofu, soups and fermented foods.

Few foods represent Korean cuisine as strongly as kimchi.

At its simplest, kimchi is a preparation of vegetables that are seasoned and fermented.

Cabbage and radish are commonly used, although Korean food culture includes many different kinds of kimchi.

Kimchi can provide:

Crunch + acidity + saltiness + spice + umami.

But its story goes deeper.

Historically, preserving vegetables was important during colder months.

Fermentation helped transform seasonal vegetables into foods that could be stored and enjoyed later.

Over generations, different regions and families developed their own versions.

So kimchi isn't just one recipe.

It is a whole world of recipes.

Perhaps one of the most fascinating aspects of Korean cuisine is its long relationship with fermentation.

Fermentation is used in foods such as:

Kimchi.

Doenjang — fermented soybean paste.

Gochujang — fermented chilli paste.

Ganjang — traditional Korean soy sauce.

These foods demonstrate how microorganisms can transform basic ingredients.

Soybeans can become deeply savory pastes.

Vegetables can develop acidity and complexity.

Chilli paste can become rich, sweet, spicy and intensely flavorful.

Korean barbecue is famous around the world.

But its significance goes beyond grilled meat.

The cooking process itself can become part of the meal.

People gather around a grill.

Food is cooked together.

Side dishes are shared.

Lettuce leaves, sauces and vegetables can be combined with grilled ingredients.

The meal becomes interactive.

This tells us something important about Korean food culture:

Eating is not always simply about consuming food.

It can be about participating in the meal together.

Banchan: Many Small Dishes, One Table

A Korean meal may include an assortment of small side dishes known as banchan.

These can include:

Kimchi.

Seasoned vegetables.

Pickled foods.

Tofu.

Seaweed.

Bean sprouts.

Other regional preparations.

The idea is fascinating.

Instead of putting everything into one large dish, a meal can contain many smaller tastes.

One bite may be spicy.

Another may be salty.

Another fresh.

Another fermented.

Another nutty.

This creates variety without requiring one dominant centerpiece.
`
  },

  {
    name: "Middle Eastern Cuisine",
    country: "Middle East",
    emoji: "🌍",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
    description:
      "Rich culinary traditions featuring chickpeas, lentils, grains, vegetables, herbs, nuts, and aromatic spices.",
    highlight: "Hummus • Chickpeas • Grains • Herbs",

    desc: `
Imagine a table covered with warm flatbreads, creamy hummus, colorful salads, roasted vegetables, lentils, chickpeas, olives, dates, nuts and fragrant rice.

There might be a bowl of hummus in the center, freshly baked bread being passed around, the aroma of cumin and coriander filling the room, and a pot of slow-cooked food bringing everyone together.

The table is generous.

The flavors are aromatic.

And the meal feels designed to be shared.

This simple picture captures something important about Middle Eastern cuisine.

Middle Eastern food isn't simply hummus, falafel, kebabs or shawarma.

The Middle East is not one single culinary culture.

It is a vast region containing many countries, communities and traditions.

Food differs across:

Levantine cuisine.

Arabian Peninsula cuisine.

Persian cuisine.

Mesopotamian traditions.

Egyptian cuisine.

Turkish and neighboring culinary traditions.

Flatbread is one of the simplest foods imaginable.

Flour.

Water.

Heat.

Yet across the Middle East, bread can take many forms.

Pita and other flatbreads can be:

Baked.

Stuffed.

Used for dipping.

Wrapped around food.

Served alongside stews.

Bread can function almost like a utensil.

Instead of using a fork to pick up food, a piece of bread can become part of the eating experience.

Few foods are as globally recognized as hummus.

At its basic level:

Chickpeas + tahini + lemon + garlic + olive oil

can create a creamy and flavorful dip.

But hummus represents something larger.

It demonstrates how simple ingredients can be transformed through:

Grinding + blending + seasoning + balancing.

The result can become a centerpiece of the meal.

And today, hummus has traveled far beyond the Middle East.

Falafel is another globally popular Middle Eastern food.

Traditionally made from legumes such as chickpeas or fava beans depending on regional tradition, the mixture is seasoned with herbs and spices and cooked into small portions.

It can be served:

In bread.

With salad.

With tahini.

As part of a larger meal.

Falafel demonstrates how inexpensive ingredients can become satisfying, flavorful food.

Legumes + herbs + spices + cooking technique

can create something much greater than the sum of its parts.
`
  },

  {
    name: "Italian Cuisine",
    country: "Italy",
    emoji: "🇮🇹",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
    description:
      "Simple ingredients transformed into comforting dishes with pasta, vegetables, tomatoes, herbs, and olive oil.",
    highlight: "Pasta • Tomato • Herbs • Olive Oil",

    desc: `
Imagine a table filled with crusty bread, ripe tomatoes, fresh basil, olive oil, vegetables, beans, pasta and cheese.

The aroma of garlic and herbs fills the kitchen as family and friends gather around the table.

This is the heart of Italian cuisine.

Italian food is more than pizza, pasta and gelato.

Pasta is perhaps the best example of Italian creativity.

With simple ingredients such as flour, water and sometimes eggs, Italians created countless shapes—from spaghetti and penne to ravioli and lasagna.

Each shape interacts differently with sauces, showing an important idea in Italian cooking: even the shape of food can influence the eating experience.

Pizza's modern identity is closely connected with Naples and southern Italy.

Its basic combination of dough, tomato, cheese and local toppings transformed humble ingredients into something extraordinary.

Pizza also tells a social story.

Affordable ingredients could create a satisfying meal, making it accessible to ordinary people.

Eventually, pizza traveled far beyond Italy and became a global food.

Focaccia: When Bread Becomes a Canvas

Focaccia captures the same Italian philosophy.

Simple bread dough, olive oil, herbs and salt can become something memorable.

Crispy edges, a soft center, fragrant olive oil and fresh herbs show that great food doesn't always require complicated ingredients.
`
  }
];
  const nextCuisine = () => {
    setCuisineIndex((prev) => (prev + 1) % globalCuisines.length);
  };

  const previousCuisine = () => {
    setCuisineIndex(
      (prev) =>
        (prev - 1 + globalCuisines.length) % globalCuisines.length
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="px-4 sm:px-6 lg:px-10 pt-6">
        <div className="relative max-w-7xl mx-auto overflow-hidden rounded-[2rem] bg-gradient-to-br from-green-950 via-green-900 to-emerald-700 shadow-2xl">

          <div className="absolute -top-32 -right-20 w-96 h-96 rounded-full bg-yellow-300/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-green-400/20 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 items-center min-h-[620px]">

            <div className="p-8 sm:p-12 lg:p-16 text-white">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                <span>🍽️</span>
                <span className="text-sm font-medium text-green-100">
                  Food • Stories • Recipes • Nutrition
                </span>
              </div>

              <h1 className="mt-7 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                Every Recipe Has a Story.
                <span className="block text-yellow-300 mt-2">
                  Every Meal Brings Us Together.
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-green-100 max-w-xl">
                Food is more than something we eat. It brings people together,
                preserves traditions, creates memories, and connects us to
                different cultures.
              </p>

              <p className="mt-4 text-base leading-7 text-green-200 max-w-xl">
                Explore inspiring food stories, generate delicious recipes,
                and discover the nutritional value behind every meal.
              </p>

              <div className="flex flex-wrap gap-4 mt-9">

                <Link
                  to="/foodstories"
                  className="px-6 py-3.5 rounded-xl bg-yellow-300 text-green-950 font-bold shadow-lg hover:bg-yellow-400 hover:-translate-y-1 transition-all"
                >
                  📖 Explore Food Stories
                </Link>

                <Link
                  to="/recipesuggestor"
                  className="px-6 py-3.5 rounded-xl border border-white/30 bg-white/10 text-white font-semibold backdrop-blur hover:bg-white/20 transition-all"
                >
                  🧑‍🍳 Generate Recipe
                </Link>

              </div>

            </div>

            <div className="relative flex justify-center p-8 lg:p-12">

              <div className="relative w-full max-w-lg">

                <div className="absolute inset-8 bg-yellow-300/20 blur-3xl rounded-full" />

                <img
                  src="/samplintroimg.jpg"
                  alt="People enjoying food together"
                  className="relative w-full h-[360px] sm:h-[430px] lg:h-[480px] object-cover rounded-[2rem] border-4 border-white/20 shadow-2xl"
                />

                <div className="absolute -bottom-6 left-4 sm:left-8 bg-white rounded-2xl p-4 shadow-2xl">

                  <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-2xl">
                      ❤️
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        The power of food
                      </p>

                      <p className="font-bold text-green-900">
                        Connect • Share • Enjoy
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          INTRO / CONNECTION
      ====================================================== */}

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-bold">
            ❤️ THE POWER OF FOOD
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
            Food Has the Power to Connect Us
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            From a family recipe passed down through generations to a simple
            meal shared with friends, food creates connections that go beyond
            the plate.
          </p>

        </div>

        <div className="mt-12 flex flex-wrap justify-center items-center gap-3 sm:gap-5">

          {[
            ["🍲", "Food"],
            ["📖", "Stories"],
            ["💭", "Memories"],
            ["👨‍👩‍👧", "People"],
            ["❤️", "Connection"],
          ].map(([icon, title], index) => (
            <React.Fragment key={title}>

              <div className="flex flex-col items-center">

                <div className="w-20 h-20 rounded-2xl bg-white shadow-lg border border-green-100 flex items-center justify-center text-3xl">
                  {icon}
                </div>

                <p className="mt-2 font-bold text-green-900">
                  {title}
                </p>

              </div>

              {index < 4 && (
                <span className="hidden sm:block text-2xl text-green-400">
                  →
                </span>
              )}

            </React.Fragment>
          ))}

        </div>

      </section>


      {/* =====================================================
          GLOBAL CUISINES SLIDER
      ====================================================== */}

 

<section className="relative overflow-hidden py-20 sm:py-24 px-4 sm:px-6 bg-[#fafaf7]">

  {/* Background decoration */}
  <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-orange-200/30 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-emerald-200/30 blur-3xl" />

  <div className="relative max-w-7xl mx-auto">

    {/* =====================================================
        HEADER
    ====================================================== */}
    <div className="max-w-3xl mx-auto text-center">

      <div className="inline-flex items-center gap-2
        px-4 py-2
        rounded-full
        bg-white
        border border-orange-200
        shadow-sm">

        <span className="text-base">🌎</span>

        <span className="text-xs sm:text-sm
          font-extrabold
          tracking-[0.15em]
          text-orange-700">
          GLOBAL CUISINES
        </span>

      </div>

      <h2 className="
        mt-6
        text-4xl sm:text-5xl lg:text-6xl
        font-black
        tracking-tight
        leading-[1.05]
        text-gray-900
      ">
        Discover How the
        <span className="block text-green-900 mt-1">
          World Eats
        </span>
      </h2>

      <p className="
        mt-6
        max-w-2xl
        mx-auto
        text-base sm:text-lg
        leading-8
        text-gray-600
      ">
        Explore the flavors, ingredients, traditions and stories
        that shape the world's most fascinating cuisines.
      </p>

    </div>


    {/* =====================================================
        SLIDER
    ====================================================== */}
    <div className="relative mt-14 sm:mt-16">

      {/* LEFT ARROW */}
      <button
        onClick={previousCuisine}
        aria-label="Previous cuisine"
        className="
          absolute
          z-40
          left-1 sm:-left-5 lg:-left-7
          top-1/2
          -translate-y-1/2

          w-11 h-11
          sm:w-14 sm:h-14

          rounded-full

          bg-white
          border border-gray-200
          shadow-[0_10px_30px_rgba(0,0,0,0.12)]

          flex items-center justify-center

          text-lg sm:text-xl
          text-green-900

          hover:bg-green-900
          hover:text-white
          hover:scale-110

          transition-all duration-300
        "
      >
        ←
      </button>


      {/* =====================================================
          CARD
      ====================================================== */}
      <div className="max-w-6xl mx-auto">

        <div
          key={globalCuisines[cuisineIndex].name}
          className="
            group
            grid
            lg:grid-cols-[1.08fr_0.92fr]

            overflow-hidden

            rounded-[2rem]
            sm:rounded-[2.5rem]

            bg-white

            border border-gray-100

            shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]

            animate-[fadeIn_.5s_ease]
          "
        >

          {/* =================================================
              IMAGE
          ================================================== */}
          <div className="
            relative
            h-[340px]
            sm:h-[430px]
            lg:h-[570px]
            overflow-hidden
          ">

            <img
              src={globalCuisines[cuisineIndex].image}
              alt={globalCuisines[cuisineIndex].name}
              className="
                absolute inset-0
                w-full h-full
                object-cover

                transition-transform
                duration-1000
                ease-out

                group-hover:scale-105
              "
            />

            {/* Image overlay */}
            <div className="
              absolute inset-0
              bg-gradient-to-t
              from-black/85
              via-black/20
              to-black/5
            " />


            {/* TOP BADGE */}
            <div className="absolute top-5 left-5 sm:top-7 sm:left-7">

              <div className="
                flex items-center gap-2
                px-4 py-2
                rounded-full

                bg-white/90
                backdrop-blur-md

                shadow-lg
              ">

                <span className="text-sm">
                  {globalCuisines[cuisineIndex].emoji}
                </span>

                <span className="
                  text-[11px]
                  sm:text-xs
                  font-extrabold
                  tracking-wider
                  text-gray-800
                ">
                  EXPLORE
                </span>

              </div>

            </div>


            {/* IMAGE CONTENT */}
            <div className="
              absolute
              left-0
              right-0
              bottom-0

              p-6
              sm:p-9
              lg:p-10
            ">

              <div className="
                flex
                items-center
                gap-3
                mb-3
              ">

                <span className="
                  text-4xl
                  sm:text-5xl
                ">
                  {globalCuisines[cuisineIndex].emoji}
                </span>

                <div className="h-8 w-px bg-white/40" />

                <p className="
                  text-xs
                  sm:text-sm
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-orange-200
                ">
                  {globalCuisines[cuisineIndex].country}
                </p>

              </div>


              <h3 className="
                text-3xl
                sm:text-4xl
                lg:text-5xl

                font-black
                tracking-tight
                leading-tight

                text-white
              ">
                {globalCuisines[cuisineIndex].name}
              </h3>


              <div className="
                mt-4
                flex
                items-center
                gap-3
                text-xs
                sm:text-sm
                text-white/75
              ">

                <span className="
                  w-10
                  h-px
                  bg-orange-300
                />

                <span>
                  Food · Culture · Tradition
                </span>

              </div>

            </div>

          </div>


          {/* =================================================
              CONTENT
          ================================================== */}
          <div className="
            flex
            flex-col
            justify-center

            p-7
            sm:p-10
            lg:p-12
          ">

            {/* Label */}
            <div className="flex items-center gap-3">

              <span className="
                w-9
                h-1
                rounded-full
                bg-orange-500
              />

              <span className="
                text-[11px]
                sm:text-xs
                font-extrabold
                tracking-[0.2em]
                text-orange-600
              ">
                A TASTE OF THE WORLD
              </span>

            </div>


            {/* Title */}
            <h3 className="
              mt-5
              text-3xl
              sm:text-4xl

              font-black
              tracking-tight

              text-gray-900
            ">
              {globalCuisines[cuisineIndex].name}
            </h3>


            {/* Description */}
            <p className="
              mt-5

              text-base
              sm:text-lg

              leading-8

              text-gray-600

              line-clamp-4
            ">
           {globalCuisines[cuisineIndex].description}
            </p>


            {/* =================================================
                STORY TEASER
            ================================================== */}
            <div className="
              mt-7
              relative
              overflow-hidden

              rounded-2xl

              bg-gray-50
              border border-gray-100

              p-5
            ">

              {/* Quote decoration */}
              <div className="
                absolute
                -top-4
                -right-1

                text-7xl
                font-serif
                text-orange-100
              ">
                “
              </div>


              <div className="relative">

                <p className="
                  text-[11px]
                  font-extrabold
                  uppercase
                  tracking-[0.18em]
                  text-green-700
                ">
                  THE FOOD STORY
                </p>

                <p className="
                  mt-3

                  text-sm
                  sm:text-base

                  leading-7

                  text-gray-600

                  line-clamp-3
                ">
                  {globalCuisines[cuisineIndex].desc}
                </p>

              </div>

            </div>


            {/* =================================================
                SIGNATURE ELEMENTS
            ================================================== */}
            <div className="
              mt-6
              rounded-2xl

              bg-gradient-to-br
              from-green-50
              to-emerald-50

              border border-green-100

              p-5
            ">

              <div className="flex items-start gap-4">

                <div className="
                  flex-shrink-0

                  w-11
                  h-11

                  rounded-xl

                  bg-green-900
                  text-white

                  flex
                  items-center
                  justify-center

                  text-lg

                  shadow-md
                ">
                  ✨
                </div>


                <div>

                  <p className="
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.18em]
                    text-green-700
                  ">
                    Signature Elements
                  </p>

                  <p className="
                    mt-1.5

                    text-sm
                    sm:text-base

                    font-bold
                    leading-6

                    text-green-950
                  ">
                    {globalCuisines[cuisineIndex].highlight}
                  </p>

                </div>

              </div>

            </div>


            {/* =================================================
                TAGS
            ================================================== */}
            <div className="
              mt-6
              flex
              flex-wrap
              gap-2
            ">

              <span className="
                px-3
                py-1.5
                rounded-full

                bg-orange-50
                border border-orange-100

                text-xs
                font-bold
                text-orange-700
              ">
                🍴 Traditional
              </span>

              <span className="
                px-3
                py-1.5
                rounded-full

                bg-green-50
                border border-green-100

                text-xs
                font-bold
                text-green-700
              ">
                🌿 Ingredients
              </span>

              <span className="
                px-3
                py-1.5
                rounded-full

                bg-blue-50
                border border-blue-100

                text-xs
                font-bold
                text-blue-700
              ">
                📖 Stories
              </span>

            </div>


            {/* =================================================
                CTA
            ================================================== */}
            <Link
              to="/globalcuisines"
              className="
                mt-8

                inline-flex
                items-center
                justify-center
                gap-3

                w-full

                px-6
                py-4

                rounded-xl

                bg-green-900
                text-white

                font-bold

                shadow-lg

                hover:bg-green-800
                hover:shadow-xl
                hover:-translate-y-0.5

                transition-all
                duration-300
              "
            >

              <span>
                Explore {globalCuisines[cuisineIndex].name}
              </span>

              <span className="
                text-lg

                transition-transform
                duration-300

                group-hover:translate-x-1
              ">
                →
              </span>

            </Link>

          </div>

        </div>

      </div>


      {/* RIGHT ARROW */}
      <button
        onClick={nextCuisine}
        aria-label="Next cuisine"
        className="
          absolute
          z-40
          right-1 sm:-right-5 lg:-right-7
          top-1/2
          -translate-y-1/2

          w-11 h-11
          sm:w-14 sm:h-14

          rounded-full

          bg-white
          border border-gray-200
          shadow-[0_10px_30px_rgba(0,0,0,0.12)]

          flex items-center justify-center

          text-lg sm:text-xl
          text-green-900

          hover:bg-green-900
          hover:text-white
          hover:scale-110

          transition-all duration-300
        "
      >
        →
      </button>

    </div>


    {/* =====================================================
        SLIDER DOTS
    ====================================================== */}
    <div className="
      flex
      items-center
      justify-center
      gap-2

      mt-8
    ">

      {globalCuisines.map((cuisine, index) => (

        <button
          key={cuisine.name}
          onClick={() => setCuisineIndex(index)}
          aria-label={`Go to ${cuisine.name}`}
          className={`
            h-2
            rounded-full

            transition-all
            duration-300

            ${
              index === cuisineIndex
                ? "w-9 bg-green-900"
                : "w-2 bg-gray-300 hover:bg-orange-400"
            }
          `}
        />

      ))}

    </div>


    {/* =====================================================
        CUISINE NAVIGATION
    ====================================================== */}
    <div className="
      hidden
      lg:flex

      items-center
      justify-center
      flex-wrap

      gap-2.5

      mt-7
    ">

      {globalCuisines.map((cuisine, index) => (

        <button
          key={cuisine.name}
          onClick={() => setCuisineIndex(index)}
          className={`
            flex
            items-center
            gap-2

            px-4
            py-2.5

            rounded-full

            text-xs
            font-bold

            transition-all
            duration-300

            ${
              index === cuisineIndex
                ? `
                  bg-green-900
                  text-white
                  shadow-md
                  scale-105
                `
                : `
                  bg-white
                  text-gray-600
                  border border-gray-200

                  hover:border-orange-300
                  hover:text-green-900
                  hover:shadow-sm
                `
            }
          `}
        >

          <span>
            {cuisine.emoji}
          </span>

          <span>
            {cuisine.name.replace(" Cuisine", "")}
          </span>

        </button>

      ))}

    </div>


    {/* =====================================================
        FOOTER MESSAGE
    ====================================================== */}
    <div className="
      mt-10
      text-center
    ">

      <div className="
        inline-flex
        items-center
        gap-3

        text-xs
        sm:text-sm
        text-gray-500
      ">

        <span className="w-8 h-px bg-gray-300" />

        <span>
          🌍 One world · many cultures ·
          <span className="ml-1 font-bold text-green-900">
            countless food stories
          </span>
        </span>

        <span className="w-8 h-px bg-gray-300" />

      </div>

    </div>

  </div>


  {/* =======================================================
      ANIMATION
  ======================================================== */}
  <style>
    {`
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(8px);
        }

        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}
  </style>

</section>




      {/* =====================================================
          FOOD STORIES
      ====================================================== */}

      <section className="bg-green-950 py-20 px-4 sm:px-6">

        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="text-white">

              <span className="text-yellow-300 text-sm font-bold tracking-wider">
                📖 FOOD STORIES
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black">
                Every Dish Has a Story
              </h2>

              <p className="mt-6 text-green-100 text-lg leading-8">
                A recipe can be more than a list of ingredients. It can carry
                the memories of a childhood kitchen, the traditions of a
                culture, or the story of a special person.
              </p>

              <p className="mt-4 text-green-200 leading-7">
                Our Food Stories space gives you an opportunity to share those
                experiences and discover the stories behind the meals loved by
                others.
              </p>

              <Link
                to="/foodstory"
                className="inline-flex mt-8 px-6 py-3 rounded-xl bg-yellow-300 text-green-950 font-bold hover:bg-yellow-400 hover:-translate-y-1 transition-all"
              >
                Discover Food Stories →
              </Link>

            </div>

            <div className="grid sm:grid-cols-2 gap-4">

              {storyFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm hover:bg-white hover:text-gray-800 transition-all duration-300 group"
                >

                  <div className="w-14 h-14 rounded-xl bg-green-800 flex items-center justify-center text-3xl group-hover:bg-green-100">
                    {feature.icon}
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white group-hover:text-green-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-green-200 group-hover:text-gray-600">
                    {feature.text}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          MORE THAN A MEAL
      ====================================================== */}

      <section className="px-4 sm:px-6 py-20">

        <div className="max-w-5xl mx-auto text-center">

          <div className="text-6xl">
            🍛
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl font-black text-gray-900">
            More Than a Meal
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-9 max-w-3xl mx-auto">
            A meal can start a conversation.
            <br />
            A recipe can preserve a tradition.
            <br />
            A familiar flavor can bring back a childhood memory.
          </p>

          <div className="mt-8 inline-flex px-6 py-3 rounded-full bg-green-100 text-green-800 font-bold">
            Food creates memories that last ❤️
          </div>

        </div>

      </section>


      {/* =====================================================
          RECIPE GENERATOR
      ====================================================== */}

      <section className="px-4 sm:px-6 py-20 bg-gradient-to-br from-orange-50 to-yellow-50">

        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-3xl mx-auto">

            <span className="inline-flex px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-bold">
              🧑‍🍳 RECIPE GENERATOR
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
              Turn Your Ingredients Into Something Delicious
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Not sure what to cook? Let our Recipe Generator create a meal
              based on your ingredients, preferences, and needs.
            </p>

          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {generatorFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="relative bg-white rounded-2xl p-6 shadow-md border border-orange-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >

                <div className="absolute top-4 right-4 text-xs font-bold text-orange-400">
                  0{index + 1}
                </div>

                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl">
                  {feature.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {feature.text}
                </p>

              </div>
            ))}

          </div>

          <div className="text-center mt-10">

            <Link
              to="/generaterecipe"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-green-900 text-white font-bold shadow-lg hover:bg-green-800 hover:-translate-y-1 transition-all"
            >
              ✨ Generate My Recipe
              <span>→</span>
            </Link>

          </div>

        </div>
      </section>


      {/* =====================================================
          NUTRITION
      ====================================================== */}

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <span className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold">
              📊 RECIPE + NUTRITION
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
              Know What's on Your Plate
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Delicious food and healthy choices can go hand in hand. Our
              recipe generator doesn't just give you cooking instructions —
              it also helps you understand the nutritional value of your meal.
            </p>

            <p className="mt-4 text-gray-500 leading-7">
              Use nutritional information to make informed food choices and
              better understand the meals you prepare.
            </p>

            <Link
              to="/nutrirea"
              className="inline-flex mt-8 px-6 py-3 rounded-xl bg-green-900 text-white font-bold hover:bg-green-800 transition"
            >
              Explore Nutrition →
            </Link>

          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

            {nutrients.map((nutrient) => (
              <div
                key={nutrient.value}
                className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 text-center hover:-translate-y-1 transition-all"
              >

                <div
                  className={`mx-auto w-14 h-14 rounded-xl flex items-center justify-center text-2xl ${nutrient.color}`}
                >
                  {nutrient.icon}
                </div>

                <p className="mt-4 font-bold text-gray-800">
                  {nutrient.value}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          HEALTHY EATING
      ====================================================== */}

      <section className="px-4 sm:px-6 py-20 bg-green-50">

        <div className="max-w-5xl mx-auto text-center">

          <span className="text-green-700 font-bold text-sm tracking-wider">
            🌱 HEALTHY LIVING
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-gray-900">
            Eat Well. Cook Smart. Live Better.
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            Healthy eating doesn't have to mean boring food or complicated
            meal plans. Discover exciting recipes, understand their
            nutritional values, and build better eating habits one meal at a
            time.
          </p>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="px-4 sm:px-6 py-20">

        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-[2rem] bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-300 p-8 sm:p-14 text-center shadow-2xl">

          <div className="absolute -top-20 -left-20 w-52 h-52 rounded-full bg-white/20" />
          <div className="absolute -bottom-24 -right-16 w-64 h-64 rounded-full bg-white/20" />

          <div className="relative">

            <div className="text-6xl">
              🥗
            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black text-green-950">
              Your Next Meal Could Become Your Next Story.
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-lg text-green-900 leading-8">
              Explore stories. Generate recipes. Discover nutrition.
              Share the food that brings people together.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <Link
                to="/recipesuggestor"
                className="px-7 py-3.5 rounded-xl bg-green-950 text-white font-bold shadow-lg hover:bg-green-900 hover:-translate-y-1 transition-all"
              >
                🧑‍🍳 Generate Recipe
              </Link>

              <Link
                to="/foodstories"
                className="px-7 py-3.5 rounded-xl bg-white text-green-950 font-bold shadow-lg hover:-translate-y-1 transition-all"
              >
                ❤️ Share a Food Story
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="bg-green-950 text-white py-10 text-center">

        <div className="text-3xl">
          🍽️
        </div>

        <p className="mt-3 text-green-200">
          Food connects us. Stories inspire us. Recipes bring us together.
        </p>

        <p className="mt-2 text-sm text-green-400">
          Cook • Share • Discover • Connect
        </p>

      </footer>

    </div>
  );
};