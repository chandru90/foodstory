import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";

const nutritionQuotes = [
  "🥦 Eat a variety of colorful vegetables every day.",
  "🍎 An apple a day can help support overall health.",
  "💧 Stay hydrated—water is essential for every cell in your body.",
  "🥜 Nuts are packed with healthy fats, protein, and fiber.",
  "🥕 Carrots are rich in beta-carotene, which supports eye health.",
  "🍌 Bananas are a great source of potassium.",
  "🥬 Leafy greens are loaded with vitamins and minerals.",
  "🍊 Citrus fruits are rich in Vitamin C.",
  "🌾 Choose whole grains over refined grains for more fiber.",
  "🐟 Fish is an excellent source of omega-3 fatty acids.",
];

const content = [
  { title: "Plan Your Meals" },
  { title: "Discover New Recipes" },
  { title: "Nutrition Tracking" },
  { title: "Healthy Recipe Suggestions" },
  { title: "Achieve Your Wellness Goals" },
];

const Recipeplanner = () => {
  const [ingredient, setIngredient] = useState("");
  const [group, setGroup] = useState("all");
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");
  const [showalert, setShowalert] = useState(false);
  const [index, setIndex] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(nutritionQuotes[0]);

  const videoRef = useRef(null);

  /* ============================================================
     DISCLAIMER
  ============================================================ */

  useEffect(() => {
    setShowalert(true);
  }, []);

  /* ============================================================
     ROTATING HERO TEXT
  ============================================================ */

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % content.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  /* ============================================================
     VIDEO
  ============================================================ */

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.1;
    }
  }, []);

  /* ============================================================
     NUTRITION QUOTES
  ============================================================ */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prevQuote) => {
        let nextQuote;

        do {
          nextQuote =
            nutritionQuotes[
              Math.floor(Math.random() * nutritionQuotes.length)
            ];
        } while (
          nextQuote === prevQuote &&
          nutritionQuotes.length > 1
        );

        return nextQuote;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* ============================================================
     LOAD CACHED RECIPES
  ============================================================ */

  useEffect(() => {
    try {
      const cachedRecipes = JSON.parse(
        localStorage.getItem("cachedata") || "null"
      );

      if (cachedRecipes?.meal_plan) {
        const formattedData = Object.entries(
          cachedRecipes.meal_plan
        ).map(([day, meals]) => ({
          day,
          ...meals,
        }));

        setRecipes(formattedData);
      }
    } catch (err) {
      console.error("Unable to load cached recipes:", err);
    }
  }, []);

  /* ============================================================
     GENERATE RECIPES
  ============================================================ */

  const handlerecipegenerate = async () => {
    setError("");

    // if (!ingredient.trim()) {
    //   setError("Please enter an ingredient before generating a plan.");
    //   return;
    // }

    setLoading(true);

    try {
      // const currentCache =
      //   localStorage.getItem("cachedata") || "";

      const response = await axios.get(
        "https://recipe-wnrc.onrender.com/recipes/generaterecipe",
        {
          params: {
            // ingredient: ingredient.trim(),
            group,
            // cachedata: currentCache,
          },
        }
      );

      console.log("API Response:", response.data);

      const data = response.data;

      /* Save latest response */
      localStorage.setItem(
        "cachedata",
        JSON.stringify(data)
      );

      /* Immediately display new recipes */
      if (data?.meal_plan) {
        const formattedData = Object.entries(
          data.meal_plan
        ).map(([day, meals]) => ({
          day,
          ...meals,
        }));

        setRecipes(formattedData);
      } else {
        setRecipes([]);
        setError("No meal plan was returned.");
      }
    } catch (err) {
      console.error("Recipe generation error:", err);

      if (err.response) {
        console.error(
          "Server Error:",
          err.response.data
        );

        setError(
          err.response.data?.message ||
            "Server Error while generating the meal plan."
        );
      } else {
        setError(
          "Failed to generate recipes. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  /* ============================================================
     HELPERS
  ============================================================ */

  const formatName = (value) => {
    if (!value) return "";

    return String(value)
      .replaceAll("_", " ")
      .replace(/\b\w/g, (letter) =>
        letter.toUpperCase()
      );
  };

  const cleanInstructions = (instructions) => {
    if (!instructions) {
      return "No cooking instructions available.";
    }

    if (typeof instructions !== "string") {
      return JSON.stringify(
        instructions,
        null,
        2
      );
    }

    return instructions
      .replace(/^```(?:text|markdown)?/gm, "")
      .replace(/^```/gm, "")
      .trim();
  };

  const safeObjectEntries = (value) => {
    if (
      !value ||
      typeof value !== "object" ||
      Array.isArray(value)
    ) {
      return [];
    }

    return Object.entries(value);
  };

  const mealTypes = [
    {
      key: "breakfast",
      label: "Breakfast",
      emoji: "🌅",
    },
    {
      key: "lunch",
      label: "Lunch",
      emoji: "☀️",
    },
    {
      key: "healthy_snack",
      label: "Healthy Snack",
      emoji: "🥜",
    },
    {
      key: "dinner",
      label: "Dinner",
      emoji: "🌙",
    },
  ];

  /* ============================================================
     RENDER
  ============================================================ */

  return (
    <main className="min-h-screen bg-[#eef4ef]">

      {/* ========================================================
          DISCLAIMER
      ======================================================== */}

      {showalert && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/60
            px-4
            backdrop-blur-sm
          "
        >
          <div
            role="dialog"
            aria-modal="true"
            className="
              w-full
              max-w-lg
              overflow-hidden
              rounded-[2rem]
              bg-white
              shadow-2xl
            "
          >
            <div
              className="
                bg-gradient-to-r
                from-emerald-700
                to-green-600
                px-6
                py-5
                text-white
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white/15
                    text-xl
                  "
                >
                  🥗
                </div>

                <div>
                  <h2 className="text-lg font-bold">
                    Nutrition Information
                  </h2>

                  <p className="text-sm text-emerald-100">
                    A quick note before you begin
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <p
                className="
                  text-sm
                  leading-7
                  text-gray-600
                "
              >
                Nutritional information shown in the
                Recipe Planner contains approximate
                calorie and nutrition values.
                Individual nutritional needs vary
                from person to person.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-gray-600
                "
              >
                The planner is intended for general
                nutritional awareness and guidance
                only. Please consult a qualified
                dietitian or healthcare professional
                for personalized dietary advice.
              </p>

              <button
                onClick={() => setShowalert(false)}
                className="
                  mt-6
                  w-full
                  rounded-xl
                  bg-emerald-600
                  px-5
                  py-3
                  font-semibold
                  text-white
                  shadow-lg
                  transition
                  hover:bg-emerald-700
                "
              >
                Continue to NutriKnow
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          HERO
      ======================================================== */}

      <section className="relative min-h-[480px] overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        >
          <source
            src="/vid.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/55" />

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[480px]
            max-w-6xl
            items-center
            px-5
            py-20
          "
        >
          <div className="max-w-3xl text-white">

            <div
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-white/10
                px-4
                py-2
                text-sm
                font-medium
                backdrop-blur-md
              "
            >
              🥗
              <span>
                Foodstorys · NutriKnow
              </span>
            </div>

            <h1
              className="
                text-4xl
                font-black
                leading-tight
                tracking-tight
                sm:text-5xl
                lg:text-7xl
              "
            >
              {content[index].title}
            </h1>

            <p
              className="
                mt-6
                max-w-2xl
                text-base
                leading-7
                text-white/80
                sm:text-lg
              "
            >
              Create a personalized weekly meal
              plan and discover the ingredients,
              nutrients and stories behind every meal.
            </p>

            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-3
              "
            >
              <span
                className="
                  rounded-full
                  bg-white/10
                  px-4
                  py-2
                  text-sm
                  backdrop-blur-md
                "
              >
                🍽 Personalized meals
              </span>

              <span
                className="
                  rounded-full
                  bg-white/10
                  px-4
                  py-2
                  text-sm
                  backdrop-blur-md
                "
              >
                🌱 Nutrition insights
              </span>

              <span
                className="
                  rounded-full
                  bg-white/10
                  px-4
                  py-2
                  text-sm
                  backdrop-blur-md
                "
              >
                📅 7-day planning
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          PLANNER
      ======================================================== */}

      <section
        className="
          relative
          z-20
          mx-auto
          -mt-16
          max-w-6xl
          px-4
        "
      >
        <div
          className="
            rounded-[2rem]
            border
            border-white/70
            bg-white
            p-5
            shadow-2xl
            sm:p-7
          "
        >
          <div className="mb-6">
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-emerald-600
              "
            >
              NutriKnow Planner
            </p>

            <h2
              className="
                mt-2
                text-2xl
                font-black
                text-gray-900
                sm:text-3xl
              "
            >
              Build your weekly meal plan
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Tell us what you have and who you're
              planning for.
            </p>
          </div>

          <div
            className="
              grid
              gap-4
              lg:grid-cols-[1fr_200px_180px]
            "
          >
            {/* Ingredient */}

            <div className="relative">
              <span
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-lg
                "
              >
                🔍
              </span>

              <input
                type="text"
                placeholder="Enter an ingredient..."
                value={ingredient}
                onChange={(e) =>
                  setIngredient(e.target.value)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handlerecipegenerate();
                  }
                }}
                className="
                  w-full
                  rounded-2xl
                  border
                  border-gray-200
                  bg-gray-50
                  py-4
                  pl-12
                  pr-4
                  text-sm
                  outline-none
                  transition
                  focus:border-emerald-400
                  focus:bg-white
                  focus:ring-4
                  focus:ring-emerald-100
                "
              />
            </div>

            {/* Group */}

            <select
              value={group}
              onChange={(e) =>
                setGroup(e.target.value)
              }
              className="
                rounded-2xl
                border
                border-gray-200
                bg-gray-50
                px-4
                py-4
                text-sm
                font-medium
                text-gray-700
                outline-none
                focus:border-emerald-400
                focus:ring-4
                focus:ring-emerald-100
              "
            >
              <option value="all">
                👨‍👩‍👧 Everyone
              </option>

              <option value="kids">
                🧒 Kids
              </option>

              <option value="adult">
                🧑 Adults
              </option>

              <option value="elderly">
                👴 Elderly
              </option>
            </select>

            {/* Generate */}

            <button
              onClick={handlerecipegenerate}
              disabled={loading}
              className="
                rounded-2xl
                bg-gradient-to-r
                from-emerald-600
                to-green-500
                px-6
                py-4
                font-bold
                text-white
                shadow-lg
                shadow-emerald-200
                transition
                hover:-translate-y-0.5
                hover:shadow-xl
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              {loading
                ? "⏳ Creating..."
                : "✨ Generate Plan"}
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          LOADING
      ======================================================== */}

      {loading && (
        <section
          className="
            mx-auto
            max-w-3xl
            px-4
            py-16
          "
        >
          <div
            className="
              rounded-[2rem]
              border
              border-emerald-100
              bg-white
              p-8
              text-center
              shadow-xl
            "
          >
            <div
              className="
                mx-auto
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-3xl
                bg-emerald-50
                text-4xl
              "
            >
              🥗
            </div>

            <h2
              className="
                mt-6
                text-2xl
                font-black
                text-gray-900
              "
            >
              Building your meal plan
            </h2>

            <p
              className="
                mx-auto
                mt-3
                max-w-lg
                text-sm
                leading-6
                text-gray-500
              "
            >
              {currentQuote}
            </p>

            <div
              className="
                mt-7
                overflow-hidden
                rounded-full
              "
            >
              <LinearProgress />
            </div>

            <p
              className="
                mt-3
                text-xs
                font-medium
                text-gray-400
              "
            >
              Discovering meals, ingredients and
              nutrition insights...
            </p>
          </div>
        </section>
      )}

      {/* ========================================================
          ERROR
      ======================================================== */}

      {!loading && error && (
        <div
          className="
            mx-auto
            max-w-4xl
            px-4
            py-8
          "
        >
          <div
            className="
              rounded-2xl
              border
              border-red-200
              bg-red-50
              px-5
              py-4
              text-sm
              text-red-700
            "
          >
            ⚠️ {error}
          </div>
        </div>
      )}

      {/* ========================================================
          EMPTY STATE
      ======================================================== */}

      {!loading &&
        recipes.length === 0 &&
        !error && (
          <section
            className="
              mx-auto
              max-w-3xl
              px-4
              py-20
              text-center
            "
          >
            <div
              className="
                mx-auto
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-[2rem]
                bg-white
                text-5xl
                shadow-lg
              "
            >
              🍽️
            </div>

            <h2
              className="
                mt-7
                text-2xl
                font-black
                text-gray-900
              "
            >
              Your weekly plan starts here
            </h2>

            <p
              className="
                mx-auto
                mt-3
                max-w-lg
                text-sm
                leading-7
                text-gray-500
              "
            >
              Choose an ingredient and a target
              group, then let NutriKnow create
              your personalized meal plan.
            </p>
          </section>
        )}

      {/* ========================================================
          RECIPE PLANS
      ======================================================== */}

      {!loading && recipes.length > 0 && (
        <section
          className="
            mx-auto
            max-w-[1500px]
            px-4
            py-16
            sm:px-6
            lg:px-8
          "
        >
          {recipes.map((day, dayIndex) => (
            <article
              key={dayIndex}
              className="
                mb-14
                overflow-hidden
                rounded-[2rem]
                border
                border-gray-200
                bg-white
                shadow-xl
              "
            >

              {/* ==================================================
                  DAY HEADER
              ================================================== */}

              <div
                className="
                  bg-gradient-to-r
                  from-gray-950
                  via-gray-900
                  to-emerald-950
                  px-6
                  py-7
                  text-white
                  sm:px-8
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    gap-4
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <div>
                    <p
                      className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-emerald-400
                      "
                    >
                      Weekly Meal Plan
                    </p>

                   <h2
  className="
    mt-2
    text-3xl
    font-black
    sm:text-4xl
  "
>
  📅{" "}
  {day.day
    ?.replace(/_/g, " ")
    .replace(/^./, (char) => char.toUpperCase())}
</h2>
                  </div>

                  <div
                    className="
                      w-fit
                      rounded-full
                      border
                      border-emerald-400/20
                      bg-emerald-400/10
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      text-emerald-300
                    "
                  >
                    🌱 Balanced eating
                  </div>
                </div>
              </div>

              {/* ==================================================
                  MEALS
              ================================================== */}

              <div
                className="
                  space-y-8
                  p-4
                  sm:p-6
                  lg:p-8
                "
              >
                {mealTypes.map(
                  ({ key, label, emoji }) => {
                    const mealData = day?.[key];

                    if (!mealData) {
                      return null;
                    }

                    return (
                      <section
                        key={key}
                        className="
                          overflow-hidden
                          rounded-[1.75rem]
                          border
                          border-gray-200
                          bg-gray-50
                        "
                      >

                        {/* ==================================================
                            MEAL HEADER
                        ================================================== */}

                        <div
                          className="
                            flex
                            flex-col
                            gap-5
                            bg-gradient-to-r
                            from-emerald-600
                            to-teal-500
                            p-5
                            text-white
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                            sm:p-6
                          "
                        >
                          <div>
                            <div
                              className="
                                flex
                                items-center
                                gap-3
                              "
                            >
                              <span className="text-3xl">
                                {emoji}
                              </span>

                              <div>
                                <p
                                  className="
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-widest
                                    text-emerald-100
                                  "
                                >
                                  {label}
                                </p>

                                <h3
                                  className="
                                    mt-1
                                    text-xl
                                    font-black
                                    sm:text-2xl
                                  "
                                >
                                  {mealData.recipe_name ||
                                    "Recipe"}
                                </h3>
                              </div>
                            </div>
                          </div>

                          <div
                            className="
                              flex
                              w-fit
                              items-center
                              gap-3
                              rounded-2xl
                              bg-white
                              px-5
                              py-3
                              text-emerald-700
                              shadow-lg
                            "
                          >
                            <span className="text-xl">
                              🔥
                            </span>

                            <div>
                              <p
                                className="
                                  text-[10px]
                                  font-bold
                                  uppercase
                                  tracking-wider
                                  text-gray-400
                                "
                              >
                                Calories
                              </p>

                              <p
                                className="
                                  text-xl
                                  font-black
                                "
                              >
                                {mealData.calories ?? "—"}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 sm:p-6">

                          {/* ==================================================
                              TIME
                          ================================================== */}

                          <div
                            className="
                              flex
                              flex-wrap
                              gap-2
                            "
                          >
                            {mealData.prep_time && (
                              <span
                                className="
                                  rounded-full
                                  bg-white
                                  px-4
                                  py-2
                                  text-xs
                                  font-semibold
                                  text-gray-600
                                  shadow-sm
                                  ring-1
                                  ring-gray-200
                                "
                              >
                                ⏱ Prep ·{" "}
                                {mealData.prep_time}
                              </span>
                            )}

                            {mealData.cook_time && (
                              <span
                                className="
                                  rounded-full
                                  bg-white
                                  px-4
                                  py-2
                                  text-xs
                                  font-semibold
                                  text-gray-600
                                  shadow-sm
                                  ring-1
                                  ring-gray-200
                                "
                              >
                                🔥 Cook ·{" "}
                                {mealData.cook_time}
                              </span>
                            )}
                          </div>

                          {/* ==================================================
                              CONTENT
                          ================================================== */}

                          <div
                            className="
                              mt-6
                              grid
                              gap-6
                              xl:grid-cols-[0.8fr_1.4fr]
                            "
                          >

                            {/* ==================================================
                                LEFT COLUMN
                            ================================================== */}

                            <div className="space-y-6">

                              {/* ==================================================
                                  MACROS
                              ================================================== */}

                           <div
  className="
    grid
    grid-cols-2
    gap-3
    sm:grid-cols-4
    sm:gap-4
  "
>
  {[
    {
      title: "Protein",
      value: mealData.macros?.protein ?? "-",
      color: "bg-blue-50 border-blue-100 text-blue-700",
      emoji: "💪",
      message: "Builds & repairs muscles",
    },
    {
      title: "Carbs",
      value: mealData.macros?.carbs ?? "-",
      color: "bg-emerald-50 border-emerald-100 text-emerald-700",
      emoji: "🍚",
      message: "Provides energy",
    },
    {
      title: "Fiber",
      value: mealData.macros?.fiber ?? "-",
      color: "bg-purple-50 border-purple-100 text-purple-700",
      emoji: "🌾",
      message: "Supports digestion",
    },
    {
      title: "Fat",
      value: mealData.macros?.fat ?? "-",
      color: "bg-orange-50 border-orange-100 text-orange-700",
      emoji: "🥑",
      message: "Healthy fats for your body",
    },
  ].map((item, macroIndex) => (
    <div
      key={item.title}
      className="
        w-full
        [perspective:1000px]
      "
    >
      <div
        className="
          relative
          h-28
          w-full
          animate-continuous-flip
          sm:h-32
        "
        style={{
          animationDelay: `${macroIndex * 5}s`,
        }}
      >
        {/* FRONT */}
        <div
          className={`
            absolute
            inset-0
            flex
            flex-col
            items-center
            justify-center
            rounded-2xl
            border
            p-3
            text-center
            shadow-sm
            transition-shadow
            hover:shadow-md
            [backface-visibility:hidden]
            ${item.color}
          `}
        >
          <div
            className="
              mb-1
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-white/80
              text-xl
              shadow-sm
              sm:h-10
              sm:w-10
              sm:text-2xl
            "
          >
            {item.emoji}
          </div>

          <p
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-wide
              opacity-70
              sm:text-xs
            "
          >
            {item.title}
          </p>

          <p
            className="
              mt-0.5
              text-xl
              font-black
              leading-tight
              sm:text-2xl
            "
          >
            {item.value}
          </p>
        </div>

        {/* BACK */}
        <div
          className="
            absolute
            inset-0
            flex
            flex-col
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-emerald-500
            to-green-700
            p-3
            text-center
            text-white
            shadow-md
            [transform:rotateY(180deg)]
            [backface-visibility:hidden]
          "
        >
          <div
            className="
              mb-1
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              bg-white/15
              text-lg
              sm:h-9
              sm:w-9
              sm:text-xl
            "
          >
            {item.emoji}
          </div>

          <h3
            className="
              text-xs
              font-extrabold
              sm:text-sm
            "
          >
            {item.title}
          </h3>

          <p
            className="
              mt-1
              max-w-[140px]
              text-[10px]
              leading-relaxed
              text-white/90
              sm:text-xs
            "
          >
            {item.message}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

                              {/* ==================================================
                                  VITAMINS
                              ================================================== */}

                              <details
                                className="
                                  group
                                  overflow-hidden
                                  rounded-2xl
                                  border
                                  border-emerald-100
                                  bg-emerald-50/70
                                "
                              >
                                <summary
                                  className="
                                    flex
                                    cursor-pointer
                                    list-none
                                    items-center
                                    justify-between
                                    px-4
                                    py-3
                                    select-none
                                  "
                                >
                                  <div className="flex items-center gap-3">
                                    <span className="text-xl">
                                      🥬
                                    </span>

                                    <div>
                                      <h4
                                        className="
                                          text-sm
                                          font-black
                                          text-emerald-900
                                        "
                                      >
                                        Vitamins
                                      </h4>

                                      <p className="text-[10px] text-emerald-600">
                                        Micronutrients
                                      </p>
                                    </div>
                                  </div>

                                  <span
                                    className="
                                      text-sm
                                      text-emerald-600
                                      transition-transform
                                      duration-200
                                      group-open:rotate-180
                                    "
                                  >
                                    ▼
                                  </span>
                                </summary>

                                <div
                                  className="
                                    border-t
                                    border-emerald-100
                                    px-3
                                    pb-3
                                    pt-3
                                  "
                                >
                                  <div className="space-y-2">
                                    {safeObjectEntries(
                                      mealData.vitamins
                                    ).map(
                                      ([key, vitamin]) => (
                                        <div
                                          key={key}
                                          className="
                                            rounded-xl
                                            bg-white
                                            px-3
                                            py-2.5
                                            shadow-sm
                                          "
                                        >
                                          <div
                                            className="
                                              flex
                                              items-center
                                              justify-between
                                              gap-2
                                            "
                                          >
                                            <span
                                              className="
                                                text-xs
                                                font-semibold
                                                capitalize
                                                text-gray-700
                                              "
                                            >
                                              {formatName(key)}
                                            </span>

                                            <span
                                              className="
                                                text-xs
                                                font-bold
                                                text-emerald-700
                                              "
                                            >
                                              {vitamin?.amount ?? "—"}
                                            </span>
                                          </div>

                                          {vitamin?.percent_daily_value != null && (
                                            <div
                                              className="
                                                mt-1.5
                                                flex
                                                items-center
                                                justify-between
                                              "
                                            >
                                              <span className="text-[10px] text-gray-400">
                                                Daily value
                                              </span>

                                              <span
                                                className="
                                                  text-[10px]
                                                  font-bold
                                                  text-emerald-600
                                                "
                                              >
                                                {
                                                  vitamin.percent_daily_value
                                                }
                                              </span>
                                            </div>
                                          )}
                                        </div>
                                      )
                                    )}
                                  </div>
                                </div>
                              </details>

                              {/* ==================================================
                                  MINERALS
                              ================================================== */}

                              <details
                                className="
                                  group
                                  overflow-hidden
                                  rounded-2xl
                                  border
                                  border-cyan-100
                                  bg-cyan-50/70
                                "
                              >
                                <summary
                                  className="
                                    flex
                                    cursor-pointer
                                    list-none
                                    items-center
                                    justify-between
                                    px-4
                                    py-3
                                    select-none
                                  "
                                >
                                  <div className="flex items-center gap-3">
                                    <span className="text-xl">
                                      💎
                                    </span>

                                    <div>
                                      <h4
                                        className="
                                          text-sm
                                          font-black
                                          text-cyan-900
                                        "
                                      >
                                        Minerals
                                      </h4>

                                      <p className="text-[10px] text-cyan-600">
                                        Essential minerals
                                      </p>
                                    </div>
                                  </div>

                                  <span
                                    className="
                                      text-sm
                                      text-cyan-600
                                      transition-transform
                                      duration-200
                                      group-open:rotate-180
                                    "
                                  >
                                    ▼
                                  </span>
                                </summary>

                                <div
                                  className="
                                    border-t
                                    border-cyan-100
                                    px-3
                                    pb-3
                                    pt-3
                                  "
                                >
                                  <div className="space-y-2">
                                    {safeObjectEntries(
                                      mealData.minerals
                                    ).map(
                                      ([key, mineral]) => (
                                        <div
                                          key={key}
                                          className="
                                            rounded-xl
                                            bg-white
                                            px-3
                                            py-2.5
                                            shadow-sm
                                          "
                                        >
                                          <div
                                            className="
                                              flex
                                              items-center
                                              justify-between
                                              gap-2
                                            "
                                          >
                                            <span
                                              className="
                                                text-xs
                                                font-semibold
                                                capitalize
                                                text-gray-700
                                              "
                                            >
                                              {formatName(key)}
                                            </span>

                                            <span
                                              className="
                                                text-xs
                                                font-bold
                                                text-cyan-700
                                              "
                                            >
                                              {mineral?.amount ?? "—"}
                                            </span>
                                          </div>

                                          {mineral?.percent_daily_value != null && (
                                            <div
                                              className="
                                                mt-1.5
                                                flex
                                                items-center
                                                justify-between
                                              "
                                            >
                                              <span className="text-[10px] text-gray-400">
                                                Daily value
                                              </span>

                                              <span
                                                className="
                                                  text-[10px]
                                                  font-bold
                                                  text-cyan-600
                                                "
                                              >
                                                {
                                                  mineral.percent_daily_value
                                                }
                                              </span>
                                            </div>
                                          )}
                                        </div>
                                      )
                                    )}
                                  </div>
                                </div>
                              </details>

                              {/* ==================================================
                                  NUTRIKNOW
                              ================================================== */}

                              <div
                                className="
                                  overflow-hidden
                                  rounded-3xl
                                  bg-gradient-to-br
                                  from-emerald-700
                                  via-green-600
                                  to-teal-600
                                  p-5
                                  text-white
                                  shadow-lg
                                "
                              >
                                <div className="flex items-center gap-3">
                                  <div
                                    className="
                                      flex
                                      h-11
                                      w-11
                                      items-center
                                      justify-center
                                      rounded-2xl
                                      bg-white/15
                                      text-xl
                                    "
                                  >
                                    💡
                                  </div>

                                  <div>
                                    <h4 className="font-black">
                                      NutriKnow
                                    </h4>

                                    <p className="text-xs text-emerald-100">
                                      Nutrition insight
                                    </p>
                                  </div>
                                </div>

                                <p
                                  className="
                                    mt-5
                                    text-sm
                                    leading-7
                                    text-white/90
                                  "
                                >
                                  {mealData.Nutriknow || "n/a"}
                                </p>
                              </div>
                            </div>

                            {/* ==================================================
                                RIGHT COLUMN
                            ================================================== */}

                            <div className="space-y-6">

                              {/* ==================================================
                                  INGREDIENTS
                              ================================================== */}

                              <div
                                className="
                                  rounded-2xl
                                  border
                                  border-orange-100
                                  bg-orange-50/70
                                  p-3
                                "
                              >
                                <div className="flex items-center gap-2">
                                  <span
                                    className="
                                      flex
                                      h-8
                                      w-8
                                      items-center
                                      justify-center
                                      rounded-xl
                                      bg-white
                                      text-base
                                      shadow-sm
                                    "
                                  >
                                    🥗
                                  </span>

                                  <div>
                                    <h4
                                      className="
                                        text-sm
                                        font-black
                                        text-gray-900
                                      "
                                    >
                                      Ingredients
                                    </h4>

                                    <p className="text-[10px] text-gray-500">
                                      What goes into this meal
                                    </p>
                                  </div>
                                </div>

                                <div
                                  className="
                                    mt-3
                                    grid
                                    grid-cols-1
                                    gap-1.5
                                    sm:grid-cols-2
                                  "
                                >
                                  {safeObjectEntries(
                                    mealData.ingridients ||
                                      mealData.ingredients
                                  ).map(
                                    ([name, quantity]) => (
                                      <div
                                        key={name}
                                        className="
                                          flex
                                          items-center
                                          justify-between
                                          gap-2
                                          rounded-lg
                                          bg-white
                                          px-2.5
                                          py-2
                                          shadow-sm
                                        "
                                      >
                                        <div
                                          className="
                                            flex
                                            min-w-0
                                            items-center
                                            gap-1.5
                                          "
                                        >
                                          <span
                                            className="
                                              flex
                                              h-4
                                              w-4
                                              shrink-0
                                              items-center
                                              justify-center
                                              rounded-full
                                              bg-emerald-500
                                              text-[8px]
                                              text-white
                                            "
                                          >
                                            ✓
                                          </span>

                                          <span
                                            className="
                                              truncate
                                              text-xs
                                              font-medium
                                              text-gray-700
                                            "
                                          >
                                            {name}
                                          </span>
                                        </div>

                                        <span
                                          className="
                                            shrink-0
                                            rounded-full
                                            bg-orange-100
                                            px-2
                                            py-0.5
                                            text-[10px]
                                            font-bold
                                            text-orange-700
                                          "
                                        >
                                          {quantity}
                                        </span>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>

                              {/* ==================================================
                                  COOKING
                              ================================================== */}

                              <div
                                className="
                                  rounded-3xl
                                  border
                                  border-gray-200
                                  bg-white
                                  p-5
                                  shadow-sm
                                "
                              >
                                <div className="flex items-center gap-3">
                                  <span
                                    className="
                                      flex
                                      h-11
                                      w-11
                                      items-center
                                      justify-center
                                      rounded-2xl
                                      bg-orange-100
                                      text-xl
                                    "
                                  >
                                    👨‍🍳
                                  </span>

                                  <div>
                                    <h4
                                      className="
                                        font-black
                                        text-gray-900
                                      "
                                    >
                                      Cooking Instructions
                                    </h4>

                                    <p className="text-xs text-gray-500">
                                      Step-by-step preparation
                                    </p>
                                  </div>
                                </div>

                                <div
                                  className="
                                    mt-5
                                    whitespace-pre-line
                                    rounded-2xl
                                    bg-orange-50
                                    p-5
                                    text-sm
                                    leading-7
                                    text-gray-700
                                  "
                                >
                                  {cleanInstructions(
                                    mealData.cooking_instructions
                                  )}
                                </div>
                              </div>

                              {/* ==================================================
                                  ADDONS
                              ================================================== */}

                              {mealData.addons &&
                                Object.keys(
                                  mealData.addons
                                ).length > 0 && (
                                  <div
                                    className="
                                      rounded-2xl
                                      border
                                      border-amber-100
                                      bg-amber-50/60
                                      p-4
                                    "
                                  >
                                    {/* HEADER */}

                                    <div className="flex items-center gap-3">
                                      <span
                                        className="
                                          flex
                                          h-9
                                          w-9
                                          shrink-0
                                          items-center
                                          justify-center
                                          rounded-xl
                                          bg-white
                                          text-lg
                                          shadow-sm
                                        "
                                      >
                                        🥣
                                      </span>

                                      <div className="min-w-0">
                                        <div className="flex items-center gap-2">
                                          <h4 className="text-sm font-black text-gray-900">
                                            Add-ons
                                          </h4>

                                          <span
                                            className="
                                              rounded-full
                                              bg-amber-100
                                              px-2
                                              py-0.5
                                              text-[10px]
                                              font-bold
                                              text-amber-700
                                            "
                                          >
                                            Optional
                                          </span>
                                        </div>

                                        <p className="text-[11px] text-gray-500">
                                          Simple additions to enhance your meal
                                        </p>
                                      </div>
                                    </div>

                                    {/* ADD-ONS */}

                                    <div
                                      className="
                                        mt-3
                                        grid
                                        grid-cols-1
                                        gap-2
                                        sm:grid-cols-2
                                      "
                                    >
                                      {safeObjectEntries(
                                        mealData.addons
                                      ).map(
                                        ([name, benefit]) => (
                                          <div
                                            key={name}
                                            className="
                                              rounded-xl
                                              border
                                              border-amber-100
                                              bg-white
                                              px-3
                                              py-2.5
                                              transition
                                              hover:border-amber-200
                                              hover:shadow-sm
                                            "
                                          >
                                            <div className="flex items-start gap-2">
                                              <span
                                                className="
                                                  mt-1
                                                  h-1.5
                                                  w-1.5
                                                  shrink-0
                                                  rounded-full
                                                  bg-amber-400
                                                "
                                              />

                                              <div className="min-w-0">
                                                <p
                                                  className="
                                                    text-xs
                                                    font-bold
                                                    leading-4
                                                    text-gray-900
                                                  "
                                                >
                                                  {name}
                                                </p>

                                                <p
                                                  className="
                                                    mt-0.5
                                                    text-[11px]
                                                    leading-4
                                                    text-gray-500
                                                  "
                                                >
                                                  {benefit}
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                )}
                            </div>
                          </div>
                        </div>
                      </section>
                    );
                  }
                )}

                {/* ==================================================
                    DAILY SUMMARY
                ================================================== */}

                <section
                  className="
                    rounded-[1.75rem]
                    bg-gray-950
                    p-5
                    text-white
                    sm:p-7
                  "
                >
                  <div
                    className="
                      flex
                      flex-col
                      gap-3
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                    "
                  >
                    <div>
                      <p
                        className="
                          text-xs
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          text-emerald-400
                        "
                      >
                        Daily overview
                      </p>

                      <h3
                        className="
                          mt-1
                          text-2xl
                          font-black
                        "
                      >
                        Nutrition Summary
                      </h3>
                    </div>

                    <span
                      className="
                        rounded-full
                        bg-white/10
                        px-4
                        py-2
                        text-xs
                        font-semibold
                        text-gray-300
                      "
                    >
                      {day.day}
                    </span>
                  </div>

                  <div
                    className="
                      mt-6
                      grid
                      grid-cols-2
                      gap-3
                      sm:grid-cols-3
                      lg:grid-cols-6
                    "
                  >
                    {[
                      [
                        "Calories",
                        day?.summary?.total_calories ?? 0,
                        "🔥",
                        "text-orange-300",
                      ],
                      [
                        "Daily Value",
                        day?.summary?.dv ?? 0,
                        "📊",
                        "text-blue-300",
                      ],
                      [
                        "Protein",
                        day?.summary?.proteins_dv ?? 0,
                        "💪",
                        "text-emerald-300",
                      ],
                      [
                        "Carbs",
                        day?.summary?.carbs_dv ?? 0,
                        "🍚",
                        "text-yellow-300",
                      ],
                      [
                        "Fats",
                        day?.summary?.fats_dv ?? 0,
                        "🥑",
                        "text-red-300",
                      ],
                      [
                        "Fiber",
                        day?.summary?.fiber_dv ?? 0,
                        "🌾",
                        "text-purple-300",
                      ],
                    ].map(
                      ([
                        title,
                        value,
                        emoji,
                        color,
                      ]) => (
                        <div
                          key={title}
                          className="
                            rounded-2xl
                            bg-white/5
                            p-4
                            ring-1
                            ring-white/10
                          "
                        >
                          <span className="text-xl">
                            {emoji}
                          </span>

                          <p
                            className="
                              mt-3
                              text-[10px]
                              font-bold
                              uppercase
                              tracking-wider
                              text-gray-400
                            "
                          >
                            {title}
                          </p>

                          <p
                            className={`
                              mt-1
                              text-xl
                              font-black
                              ${color}
                            `}
                          >
                            {value}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </section>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
};

export default Recipeplanner;
