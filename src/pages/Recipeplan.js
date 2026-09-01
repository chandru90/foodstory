
import { useState } from "react";

import axios from 'axios'
const Recipeplan = () => {
  const [ingredient, setIngredient] = useState("");
  const [course, setCourse] = useState("All");
  const [recipes, setRecipes] = useState([]);

const searchRecipes = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3006/recipes//meditaterian",
      {
        params: {
          ingredient: ingredient.trim(),
          course,
        },
      }
    );

    console.log("Recipe response:", response.data);

    setRecipes(response.data.meal_plan || []);
  } catch (error) {
    console.error(
      "Recipe search failed:",
      error.response?.data || error.message
    );

    setRecipes([]);
  }
};

  return (
//     <main className="min-h-screen bg-[#f8f6ef]">

//       {/* Hero */}
//       <section className="px-4 py-12 md:py-20">
//         <div className="mx-auto max-w-7xl">

//           <div className="mb-8 text-center">
//             <span className="text-sm font-semibold uppercase tracking-widest text-green-600">
//               Food Stories
//             </span>

//             <h1 className="mt-3 text-4xl font-bold text-gray-900 md:text-6xl">
//               Recipe Planner
//             </h1>

//             <p className="mx-auto mt-4 max-w-2xl text-gray-600">
//               Search delicious recipes by ingredient and course.
//               Discover meals that fit your everyday needs.
//             </p>
//           </div>

//           {/* Search Box */}
//           <div className="rounded-3xl bg-white p-4 shadow-xl md:p-6">

//             <div className="grid gap-4 md:grid-cols-[1fr_250px_auto]">

//               {/* Ingredient */}
//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-gray-700">
//                   Ingredient
//                 </label>

//                 <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4">
//                   <span className="mr-2 text-lg">🔎</span>

//                   <input
//                     type="text"
//                     value={ingredient}
//                     onChange={(e) => setIngredient(e.target.value)}
//                     placeholder="Search ingredient..."
//                     className="w-full bg-transparent py-4 outline-none"
//                   />
//                 </div>
//               </div>

//               {/* Course */}
//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-gray-700">
//                   Course Type
//                 </label>

//                 <select
//                   value={course}
//                   onChange={(e) => setCourse(e.target.value)}
//                   className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 outline-none"
//                 >
//                   <option>All</option>
//                   <option>Breakfast</option>
//                   <option>Lunch</option>
//                   <option>Dinner</option>
//                   <option>Snack</option>
//                   <option>Appetizer</option>
//                   <option>Soup</option>
//                   <option>Salad</option>
//                   <option>Main Course</option>
//                   <option>Dessert</option>
//                 </select>
//               </div>

//               {/* Button */}
//               <div className="flex items-end">
//                 <button
//                   onClick={searchRecipes}
//                   className="w-full rounded-xl bg-green-600 px-7 py-4 font-semibold text-white transition hover:bg-green-700"
//                 >
//                   🔍 Find Recipes
//                 </button>
//               </div>

//             </div>
//           </div>

//         </div>
//       </section>

//       {/* Results */}
//    <section className="mx-auto max-w-7xl px-4 pb-16">

//   {/* Results Header */}
//   <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
//     <div>
//       <p className="text-sm font-semibold uppercase tracking-wider text-green-600">
//         Recipe Planner
//       </p>

//       <h2 className="mt-1 text-2xl font-bold text-gray-900 md:text-3xl">
//         Recipe Results
//       </h2>

//       <p className="mt-1 text-sm text-gray-500">
//         {recipes.length} {recipes.length === 1 ? "recipe" : "recipes"} found
//       </p>
//     </div>
//   </div>


//   {/* Results */}
//   {recipes.length > 0 ? (

//     <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

//       {recipes.map((recipe, index) => (

//         <div
//           key={index}
//           className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
//         >

//           {/* Recipe Header */}
//           <div className="relative flex min-h-[180px] items-center justify-center overflow-hidden bg-gradient-to-br from-green-100 via-emerald-50 to-yellow-50 p-6">

//             <div className="text-center">

//               <div className="mb-3 text-5xl">
//                 🍲
//               </div>

//               <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-green-700">
//                 {course === "All" ? "Recipe" : course}
//               </span>

//             </div>

//           </div>


//           {/* Content */}
//           <div className="p-6">

//             {/* Recipe Name */}
//             <h3 className="line-clamp-2 text-xl font-bold leading-snug text-gray-900">
//               {recipe.recipe_name}
//             </h3>


//             {/* Time + Calories */}
//             <div className="mt-4 grid grid-cols-3 gap-2">

//               <div className="rounded-xl bg-gray-50 p-3 text-center">
//                 <div className="text-lg">⏱️</div>
//                 <p className="mt-1 text-xs text-gray-500">
//                   Cook
//                 </p>
//                 <p className="text-sm font-semibold text-gray-800">
//                   {recipe.cook_time}
//                 </p>
//               </div>

//               <div className="rounded-xl bg-orange-50 p-3 text-center">
//                 <div className="text-lg">🔥</div>
//                 <p className="mt-1 text-xs text-gray-500">
//                   Calories
//                 </p>
//                 <p className="text-sm font-semibold text-gray-800">
//                   {recipe.calories}
//                 </p>
//               </div>

//               <div className="rounded-xl bg-blue-50 p-3 text-center">
//                 <div className="text-lg">🥄</div>
//                 <p className="mt-1 text-xs text-gray-500">
//                   Prep
//                 </p>
//                 <p className="text-sm font-semibold text-gray-800">
//                   {recipe.prep_time}
//                 </p>
//               </div>

//             </div>


//             {/* Macros */}
//             {recipe.macros && (
//               <div className="mt-5">

//                 <p className="mb-2 text-sm font-semibold text-gray-700">
//                   Nutrition
//                 </p>

//                 <div className="grid grid-cols-4 gap-2">

//                   <div className="rounded-lg bg-green-50 p-2 text-center">
//                     <p className="text-xs text-gray-500">
//                       Protein
//                     </p>
//                     <p className="text-sm font-bold text-green-700">
//                       {recipe.macros.protein || "-"}
//                     </p>
//                   </div>

//                   <div className="rounded-lg bg-yellow-50 p-2 text-center">
//                     <p className="text-xs text-gray-500">
//                       Carbs
//                     </p>
//                     <p className="text-sm font-bold text-yellow-700">
//                       {recipe.macros.carbs || "-"}
//                     </p>
//                   </div>

//                   <div className="rounded-lg bg-orange-50 p-2 text-center">
//                     <p className="text-xs text-gray-500">
//                       Fat
//                     </p>
//                     <p className="text-sm font-bold text-orange-700">
//                       {recipe.macros.fat || "-"}
//                     </p>
//                   </div>

//                   <div className="rounded-lg bg-blue-50 p-2 text-center">
//                     <p className="text-xs text-gray-500">
//                       Fiber
//                     </p>
//                     <p className="text-sm font-bold text-blue-700">
//                       {recipe.macros.fiber || "-"}
//                     </p>
//                   </div>

//                 </div>

//               </div>
//             )}


//             {/* Ingredients */}
//             {recipe.ingredients?.length > 0 && (
//               <div className="mt-5">

//                 <p className="mb-2 text-sm font-semibold text-gray-700">
//                   Ingredients
//                 </p>

//                 <div className="flex flex-wrap gap-2">

//                   {recipe.ingredients.slice(0, 4).map((ingredient, i) => (
//                     <span
//                       key={i}
//                       className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
//                     >
//                       {ingredient}
//                     </span>
//                   ))}

//                   {recipe.ingredients.length > 4 && (
//                     <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
//                       +{recipe.ingredients.length - 4} more
//                     </span>
//                   )}

//                 </div>

//               </div>
//             )}


//             {/* View Recipe */}
//             <button
//               onClick={() => {
//                 console.log("Selected recipe:", recipe);
//               }}
//               className="mt-6 w-full rounded-xl bg-green-600 py-3.5 font-semibold text-white transition hover:bg-green-700"
//             >
//               View Recipe →
//             </button>

//           </div>

//         </div>

//       ))}

//     </div>

//   ) : (

//     /* Empty State */
//     <div className="rounded-3xl border border-gray-100 bg-white px-6 py-20 text-center shadow-sm">

//       <div className="text-6xl">
//         🥗
//       </div>

//       <h3 className="mt-5 text-xl font-bold text-gray-900">
//         Find your next meal
//       </h3>

//       <p className="mx-auto mt-2 max-w-md text-gray-500">
//         Enter an ingredient and select a course to discover
//         delicious recipes tailored to your search.
//       </p>

//     </div>

//   )}

// </section>

//     </main>





<main className="min-h-screen bg-[#f7f5ed] text-gray-900">

  {/* ================= HERO ================= */}
  <section className="relative overflow-hidden bg-[#244b35]">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-yellow-300 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-green-300 blur-3xl" />
    </div>

    <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">

      <div className="max-w-3xl">

        <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-green-100">
          Food Stories · Nutrition Planner
        </span>

        <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
          Plan your week.
          <br />
          <span className="text-lime-300">Eat with purpose.</span>
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-green-50/80 md:text-lg">
          Discover a balanced 7-day meal plan built around wholesome
          ingredients, diverse recipes, healthy fats, plant proteins and
          nourishing whole foods.
        </p>

      </div>

      {/* Search */}
      <div className="mt-10 rounded-[2rem] bg-white p-4 shadow-2xl md:p-6">

        <div className="grid gap-4 md:grid-cols-[1fr_220px_auto]">

          {/* Ingredient */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Ingredient
            </label>

            <div className="flex items-center rounded-2xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-green-500 focus-within:bg-white">

              <span className="mr-3 text-lg">
                🔎
              </span>

              <input
                type="text"
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
                placeholder="Try chickpeas, spinach, oats..."
                className="w-full bg-transparent py-4 text-sm outline-none"
              />

            </div>
          </div>

          {/* Course */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Course
            </label>

            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 text-sm outline-none focus:border-green-500"
            >
              <option>All</option>
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
              <option>Snack</option>
              <option>Appetizer</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Main Course</option>
              <option>Dessert</option>
            </select>
          </div>

          {/* Button */}
          <div className="flex items-end">

            <button
              onClick={searchRecipes}
              className="w-full rounded-2xl bg-[#2f6b45] px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#245537] md:w-auto"
            >
              Find Recipes →
            </button>

          </div>

        </div>
      </div>

    </div>
  </section>


  {/* ================= PLANNER ================= */}
  <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">

    {/* Header */}
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">
          Your Weekly Planner
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
          7 Days of Better Eating
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
          A colorful mix of grains, legumes, vegetables, fruits, nuts,
          seeds and wholesome sources of protein.
        </p>
      </div>

      <div className="rounded-2xl bg-white px-5 py-3 shadow-sm ring-1 ring-gray-100">
        <p className="text-xs text-gray-400">
          Meal Plan
        </p>

        <p className="mt-1 font-bold text-green-700">
          7 Days · 28 Meals
        </p>
      </div>

    </div>


    {/* ================= DAY TABS ================= */}
    <div className="mb-10 flex gap-2 overflow-x-auto pb-2">

      {recipes.map((day, index) => (

        <button
          key={index}
          className="min-w-[90px] rounded-2xl bg-white px-4 py-3 text-center shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-0.5 hover:ring-green-200"
        >

          <span className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400">
            Day
          </span>

          <span className="mt-1 block font-bold text-gray-800">
            {index + 1}
          </span>

        </button>

      ))}

    </div>


    {/* ================= DAYS ================= */}
    <div className="space-y-12">

      {recipes.map((day, dayIndex) => {

        const meals = [
          {
            key: "breakfast",
            label: "Breakfast",
            icon: "🌅",
            bg: "bg-orange-50",
            accent: "text-orange-700"
          },
          {
            key: "lunch",
            label: "Lunch",
            icon: "☀️",
            bg: "bg-green-50",
            accent: "text-green-700"
          },
          {
            key: "healthy_snack",
            label: "Healthy Snack",
            icon: "🥜",
            bg: "bg-yellow-50",
            accent: "text-yellow-700"
          },
          {
            key: "dinner",
            label: "Dinner",
            icon: "🌙",
            bg: "bg-blue-50",
            accent: "text-blue-700"
          }
        ];

        const dailyCalories = meals.reduce(
          (total, meal) =>
            total + Number(day[meal.key]?.calories || 0),
          0
        );

        return (

          <div
            key={dayIndex}
            className="scroll-mt-10"
          >

            {/* Day heading */}
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2f6b45] font-bold text-white shadow-md">
                  {dayIndex + 1}
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-green-700">
                    {day.day}
                  </p>

                  <h3 className="text-xl font-bold">
                    Daily Meal Plan
                  </h3>
                </div>

              </div>

              {/* Daily calories */}
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-gray-100">

                <span>🔥</span>

                <span className="text-sm font-bold text-gray-800">
                  {dailyCalories} kcal
                </span>

                <span className="text-xs text-gray-400">
                  planned
                </span>

              </div>

            </div>


            {/* Meal grid */}
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

              {meals.map((meal) => {

                const item = day[meal.key];

                if (!item) return null;

                return (

                  <article
                    key={meal.key}
                    className="group flex h-full flex-col overflow-hidden rounded-[1.7rem] bg-white shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >

                    {/* Meal header */}
                    <div className={`${meal.bg} relative p-5`}>

                      <div className="flex items-start justify-between">

                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-xl shadow-sm">
                          {meal.icon}
                        </div>

                        <span
                          className={`rounded-full bg-white px-3 py-1 text-[11px] font-bold ${meal.accent}`}
                        >
                          {meal.label}
                        </span>

                      </div>

                      {/* Calories */}
                      <div className="mt-5 flex items-center justify-between">

                        <div>
                          <p className="text-xs text-gray-500">
                            Energy
                          </p>

                          <p className="text-2xl font-bold text-gray-900">
                            {item.calories}
                            <span className="ml-1 text-xs font-medium text-gray-400">
                              kcal
                            </span>
                          </p>
                        </div>

                        <div className="text-right">

                          <p className="text-xs text-gray-400">
                            Total time
                          </p>

                          <p className="text-sm font-bold text-gray-700">
                            {item.prep_time || "—"}
                          </p>

                        </div>

                      </div>

                    </div>


                    {/* Content */}
                    <div className="flex flex-1 flex-col p-5">

                      <h4 className="line-clamp-3 text-lg font-bold leading-snug text-gray-900 transition group-hover:text-green-700">
                        {item.recipe_name}
                      </h4>


                      {/* Time */}
                      <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">

                        <span>
                          🥄 Prep {item.prep_time || "—"}
                        </span>

                        <span>
                          ⏱ Cook {item.cook_time || "—"}
                        </span>

                      </div>


                      {/* Nutrition */}
                      {item.nutrition_per_serving && (

                        <div className="mt-5">

                          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                            Per Serving
                          </p>

                          <div className="grid grid-cols-4 gap-1.5">

                            <div className="rounded-xl bg-green-50 px-1 py-2 text-center">
                              <p className="text-[10px] text-gray-400">
                                Protein
                              </p>
                              <p className="mt-0.5 text-xs font-bold text-green-700">
                                {item.nutrition_per_serving.protein || "—"}
                              </p>
                            </div>

                            <div className="rounded-xl bg-yellow-50 px-1 py-2 text-center">
                              <p className="text-[10px] text-gray-400">
                                Carbs
                              </p>
                              <p className="mt-0.5 text-xs font-bold text-yellow-700">
                                {item.nutrition_per_serving.carbohydrates || "—"}
                              </p>
                            </div>

                            <div className="rounded-xl bg-orange-50 px-1 py-2 text-center">
                              <p className="text-[10px] text-gray-400">
                                Fat
                              </p>
                              <p className="mt-0.5 text-xs font-bold text-orange-700">
                                {item.nutrition_per_serving.fat || "—"}
                              </p>
                            </div>

                            <div className="rounded-xl bg-blue-50 px-1 py-2 text-center">
                              <p className="text-[10px] text-gray-400">
                                Fiber
                              </p>
                              <p className="mt-0.5 text-xs font-bold text-blue-700">
                                {item.nutrition_per_serving.fiber || "—"}
                              </p>
                            </div>

                          </div>

                        </div>
                      )}


                      {/* Addons */}
                      {item.addons?.length > 0 && (

                        <div className="mt-5">

                          <p className="mb-2 text-xs font-semibold text-gray-500">
                            Suggested additions
                          </p>

                          <div className="flex flex-wrap gap-1.5">

                            {item.addons.map((addon, i) => (

                              <span
                                key={i}
                                className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] text-gray-600"
                              >
                                + {addon}
                              </span>

                            ))}

                          </div>

                        </div>
                      )}


                      {/* Side dishes */}
                      {item.side_dishes?.length > 0 && (

                        <div className="mt-4">

                          <p className="mb-2 text-xs font-semibold text-gray-500">
                            Goes well with
                          </p>

                          <div className="flex flex-wrap gap-1.5">

                            {item.side_dishes.map((side, i) => (

                              <span
                                key={i}
                                className="rounded-full bg-green-50 px-2.5 py-1 text-[11px] text-green-700"
                              >
                                {side}
                              </span>

                            ))}

                          </div>

                        </div>
                      )}


<div>
<p>Ingridients</p>
                         <p className="mt-5 line-clamp-3 text-xs leading-5 text-gray-500">
                     
                          {item.Ingridients
}
                        </p>

</div>




<div>
<p>Ingridients</p>
                         <p className="mt-5 line-clamp-3 text-xs leading-5 text-gray-500">
                     
                          {item.Ingridients
}
                        </p>

</div>





                      {/* Description */}
                      {item.cooking_instructions && (
                        <div>
<h1>Cooking Instructions  </h1>
                        <p className="mt-5 line-clamp-3 text-xs leading-5 text-gray-500">
                          {item.cooking_instructions}
                        </p>
</div>
                      )}
<div>

<p>
  <div>
<p>cooking Methods</p>

  <p className="mt-5 line-clamp-3 text-xs leading-5 text-gray-500">
                          {item.cooking_method}
                        </p>

</div>
  <h1>Nutriknow</h1>
  <p>

     {item.Nutriknow}
  </p>
</p>




</div>

                      {/* Button */}
                      <button
                        onClick={() => {
                          console.log("Selected recipe:", item);
                        }}
                        className="mt-auto pt-6"
                      >

                        <span className="flex w-full items-center justify-center rounded-xl border border-green-200 bg-green-50 py-3 text-sm font-bold text-green-700 transition hover:bg-green-600 hover:text-white">
                          View Recipe
                          <span className="ml-2 transition group-hover:translate-x-1">
                            →
                          </span>
                        </span>

                      </button>

                    </div>

                  </article>

                );

              })}

            </div>

          </div>

        );

      })}

    </div>



    {/* ================= DISCLAIMER ================= */}
    <div className="mt-8 rounded-2xl border border-amber-100 bg-amber-50 p-5">

      <div className="flex gap-3">

        <span className="text-lg">
          ℹ️
        </span>

        <div>

          <p className="text-sm font-bold text-amber-900">
            Nutrition information
          </p>

          <p className="mt-1 text-xs leading-5 text-amber-800/80">
            Nutrition and calorie values are approximate and can vary
            depending on ingredients, preparation methods and serving sizes.
            This planner is intended for general nutrition awareness and
            meal-planning purposes and is not a substitute for personalized
            medical or dietary advice.
          </p>

        </div>

      </div>

    </div>

  </section>

</main>

  );
};

export default Recipeplan;;