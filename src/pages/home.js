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






import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Home = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(
          "https://recipe-wnrc.onrender.com/api"
        );

        const posts = resp.data.posts;

        localStorage.setItem("cachedata", JSON.stringify(posts));

        console.log("cachedata:", posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const benefits = [
    {
      icon: "🥗",
      title: "Balanced Nutrition",
      text: "Choose recipes with the right mix of essential nutrients for a healthier lifestyle.",
    },
    {
      icon: "⏱️",
      title: "Save Time",
      text: "Plan your meals in advance and spend less time deciding what to cook.",
    },
    {
      icon: "🛒",
      title: "Reduce Food Waste",
      text: "Buy only the ingredients you need and make better use of your groceries.",
    },
    {
      icon: "❤️",
      title: "Health Goals",
      text: "Stay on track whether your goal is better eating, fitness, or weight management.",
    },
    {
      icon: "🍽️",
      title: "Enjoy Variety",
      text: "Discover new recipes and enjoy delicious meals without repeating the same dishes.",
    },
    {
      icon: "📊",
      title: "Track Nutrition",
      text: "Monitor calories, protein, carbohydrates, fats, and other important nutrients.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">

      {/* ================= HERO ================= */}
      <section className="px-4 sm:px-6 lg:px-10 pt-6">
        <div className="relative max-w-7xl mx-auto overflow-hidden rounded-[2rem] bg-gradient-to-br from-green-950 via-green-900 to-emerald-700 shadow-2xl">

          {/* Background decorations */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-green-400/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-yellow-300/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 items-center min-h-[620px]">

            {/* Text */}
            <div className="px-6 py-12 sm:px-10 lg:px-14 lg:py-16 text-white">

              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 mb-6 backdrop-blur">
                <span>🌱</span>
                <span className="text-sm font-medium text-green-100">
                  Smart Eating Starts Here
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight">
                Discover Delicious
                <span className="block text-yellow-300 mt-2">
                  Recipes & Eat Better
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base sm:text-lg lg:text-xl leading-8 text-green-50">
                Cook smarter, eat better, and reach your nutrition goals
                with an all-in-one recipe and meal planning platform.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {[
                  "Explore healthy recipes",
                  "Create & share dishes",
                  "Track nutrition",
                  "Plan balanced meals",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm sm:text-base"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-300 text-green-950 font-bold">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-9">
                <Link
                  to="/recipes"
                  className="group inline-flex items-center gap-2 rounded-xl bg-yellow-300 px-6 py-3.5 font-bold text-green-950 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-xl"
                >
                  Explore Recipes
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  to="/recipeplanner"
                  className="inline-flex items-center rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/20"
                >
                  Plan a Meal
                </Link>
              </div>

            </div>

            {/* Image */}
            <div className="relative flex justify-center px-6 pb-12 lg:px-10 lg:pb-0">

              <div className="relative w-full max-w-lg">

                {/* Glow */}
                <div className="absolute inset-8 rounded-full bg-yellow-300/20 blur-3xl" />

                <img
                  src="/samplintroimg.jpg"
                  alt="Healthy food"
                  className="relative z-10 h-[330px] sm:h-[400px] lg:h-[470px] w-full rounded-[2rem] object-cover border-4 border-white/20 shadow-2xl transition duration-700 hover:scale-[1.02]"
                />

                {/* Floating card */}
                <div className="absolute z-20 -bottom-5 left-4 sm:left-8 rounded-2xl bg-white p-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
                      🥑
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">
                        Healthy choice
                      </p>
                      <p className="font-bold text-green-900">
                        Eat • Plan • Enjoy
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= QUICK STATS ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          {[
            ["🍳", "1000+", "Recipe Ideas"],
            ["🥦", "Fresh", "Healthy Choices"],
            ["📊", "Smart", "Nutrition Tracking"],
            ["❤️", "Better", "Eating Habits"],
          ].map(([icon, number, label]) => (
            <div
              key={label}
              className="group rounded-2xl bg-white border border-green-100 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-2xl transition group-hover:bg-green-100">
                  {icon}
                </div>

                <div>
                  <p className="text-xl font-extrabold text-green-900">
                    {number}
                  </p>
                  <p className="text-sm text-gray-500">
                    {label}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>


      {/* ================= WHY NUTRITION ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-800">
            🌱 HEALTHY LIVING
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
            Why Nutrition Matters
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-yellow-400" />

          <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
            Good nutrition is the foundation of a healthy lifestyle. A
            balanced diet gives your body the nutrients it needs for energy,
            growth, immunity, focus, and long-term well-being.
          </p>

        </div>


        {/* Nutrition highlight */}
        <div className="mt-12 grid lg:grid-cols-2 gap-6">

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-900 to-emerald-700 p-8 sm:p-10 text-white shadow-xl">

            <div className="absolute -right-10 -top-10 text-[140px] opacity-10">
              🥗
            </div>

            <div className="relative">
              <span className="text-4xl">🍽️</span>

              <h3 className="mt-5 text-2xl sm:text-3xl font-bold">
                Smart Recipe Planning
              </h3>

              <p className="mt-4 leading-8 text-green-100">
                Planning meals ahead makes healthy eating easier. Organize
                your meals around your nutritional needs, save time, reduce
                food waste, and make grocery shopping simpler.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Meal Planning",
                  "Portion Control",
                  "Less Waste",
                  "Better Choices",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/10 border border-white/20 px-3 py-1.5 text-sm"
                  >
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>


          {/* Nutrition visual */}
          <div className="rounded-3xl bg-white border border-gray-100 p-8 sm:p-10 shadow-xl">

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Build a Balanced Plate
            </h3>

            <p className="mt-3 text-gray-500 leading-7">
              Create meals with variety and balance by including different
              food groups throughout your day.
            </p>

            <div className="mt-8 space-y-5">

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">
                    🥦 Vegetables & Fruits
                  </span>
                  <span className="text-green-700 font-bold">40%</span>
                </div>

                <div className="h-3 rounded-full bg-gray-100 overflow-hidden">
                  <div className="h-full w-[40%] rounded-full bg-green-500" />
                </div>
              </div>


              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">
                    🍗 Protein
                  </span>
                  <span className="text-orange-600 font-bold">25%</span>
                </div>

                <div className="h-3 rounded-full bg-gray-100 overflow-hidden">
                  <div className="h-full w-[25%] rounded-full bg-orange-400" />
                </div>
              </div>


              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">
                    🍚 Whole Grains
                  </span>
                  <span className="text-yellow-600 font-bold">25%</span>
                </div>

                <div className="h-3 rounded-full bg-gray-100 overflow-hidden">
                  <div className="h-full w-[25%] rounded-full bg-yellow-400" />
                </div>
              </div>


              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">
                    🥑 Healthy Fats
                  </span>
                  <span className="text-purple-600 font-bold">10%</span>
                </div>

                <div className="h-3 rounded-full bg-gray-100 overflow-hidden">
                  <div className="h-full w-[10%] rounded-full bg-purple-400" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ================= BENEFITS ================= */}
      <section className="bg-green-950 py-20 px-4 sm:px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center text-white max-w-2xl mx-auto">

            <span className="text-yellow-300 font-bold text-sm tracking-wider">
              WHY PLAN YOUR MEALS?
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-black">
              Everything You Need to Eat Better
            </h2>

            <p className="mt-4 text-green-200 leading-7">
              Simple tools and smart planning can make healthy eating
              easier, more enjoyable, and more sustainable.
            </p>

          </div>


          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group rounded-2xl bg-white/10 border border-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:text-gray-800"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-800 text-3xl transition group-hover:bg-green-100">
                  {benefit.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold text-white group-hover:text-green-900">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-green-200 group-hover:text-gray-600">
                  {benefit.text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="px-4 sm:px-6 py-20">

        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-[2rem] bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-300 p-8 sm:p-12 text-center shadow-2xl">

          <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-white/20" />
          <div className="absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-white/20" />

          <div className="relative">

            <div className="text-5xl">🥑</div>

            <h2 className="mt-5 text-3xl sm:text-4xl font-black text-green-950">
              Start Your Healthy Cooking Journey
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-green-900 leading-7">
              Discover delicious recipes, create balanced meal plans,
              and make healthier choices one meal at a time.
            </p>

            <div className="mt-7 flex justify-center">

              <Link
                to="/recipes"
                className="inline-flex items-center gap-2 rounded-xl bg-green-950 px-7 py-3.5 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-green-900"
              >
                Get Started
                <span>→</span>
              </Link>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
};
