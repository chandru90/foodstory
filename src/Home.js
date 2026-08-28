// import React from "react";
// // import { useGetUserID } from "../hooks/useGetUserID";

// // import { Link } from "react-router-dom";

// export const Home = () => {

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

    

//             Explore thousands of delicious recipes, create  your own
//             favorites, and receive  meal recommendations based on
//             your daily nutritional needs.


//             Whether you're looking for quick meals, healthy recipes, or balanced
//             meal plans, our platform helps you make every meal both nutritious
//             and enjoyable.

//           <br/>

//             ✔ Explore Healthy Recipes
           
            
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
//       <h3 className="text-xl font-semiboFld mb-2">📊 Track Nutritional Intake</h3>
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



import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="px-4 sm:px-6 lg:px-10 pt-6">

        <div className="relative max-w-7xl mx-auto overflow-hidden rounded-[2rem] bg-gradient-to-br from-green-950 via-green-900 to-emerald-700 shadow-2xl">

          {/* Background decoration */}
          <div className="absolute -top-32 -right-20 w-96 h-96 rounded-full bg-yellow-300/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-green-400/20 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 items-center min-h-[620px]">

            {/* Hero content */}
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

                {/* <Link
                  to="/generaterecipe"
                  className="px-6 py-3.5 rounded-xl border border-white/30 bg-white/10 text-white font-semibold backdrop-blur hover:bg-white/20 transition-all"
                >
                  🧑‍🍳 Generate Recipe
                </Link> */}

              </div>

            </div>

            {/* Hero image */}
            <div className="relative flex justify-center p-8 lg:p-12">

              <div className="relative w-full max-w-lg">

                <div className="absolute inset-8 bg-yellow-300/20 blur-3xl rounded-full" />

                <img
                  src="/samplintroimg.jpg"
                  alt="People enjoying food together"
                  className="relative w-full h-[360px] sm:h-[430px] lg:h-[480px] object-cover rounded-[2rem] border-4 border-white/20 shadow-2xl"
                />

                {/* Floating card */}
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


        {/* Connection flow */}
        {/* <div className="mt-12 flex flex-wrap justify-center items-center gap-3 sm:gap-5">

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

        </div> */}

      </section>


      {/* =====================================================
          FOOD STORIES
      ====================================================== */}
      <section className="bg-green-950 py-20 px-4 sm:px-6">

        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Content */}
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
             Foodstorys will bring together the human stories, cultural connections, and nutritional journeys behind food.Foodstorys explore why food matters to people: the memories it creates, the traditions it carries, the communities it connects, and the role it plays in our health and well-being.
              </p>

              <Link
                to="/foodstory"
                className="inline-flex mt-8 px-6 py-3 rounded-xl bg-yellow-300 text-green-950 font-bold hover:bg-yellow-400 hover:-translate-y-1 transition-all"
              >
                Discover Food Stories →
              </Link>

            </div>


            {/* Story cards */}
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


          {/* Generator steps */}
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

          {/* Text */}
          <div>

            <span className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold">
              📊 RECIPE + NUTRITION
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
              Know What's on Your Plate
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              NutriReads is a collection of posts sharing simple nutrition facts and informative reads about healthy eating, wellness, and maintaining a healthy lifestyle.
            </p>

            <p className="mt-4 text-gray-500 leading-7">
              Use nutritional information to make informed food choices and
              better understand the meals you prepare.
            </p>

            <Link
              to="/Nutrireads"
              className="inline-flex mt-8 px-6 py-3 rounded-xl bg-green-900 text-white font-bold hover:bg-green-800 transition"
            >
              Explore Nutrition →
            </Link>

          </div>


          {/* Nutrient cards */}
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

              {/* <Link
                to="/generaterecipe"
                className="px-7 py-3.5 rounded-xl bg-green-950 text-white font-bold shadow-lg hover:bg-green-900 hover:-translate-y-1 transition-all"
              >
                🧑‍🍳 Generate Recipe
              </Link> */}

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
          FOOTER MESSAGE
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
