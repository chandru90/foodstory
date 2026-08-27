import React, { useState } from "react";

const Nutripedia = () => {
  const [selected, setSelected] = useState("Protein");

  const nutrients = {
  Protein:
    "A nutrient that helps build and repair muscles, tissues, and cells. Sources include meat, eggs, fish, milk, beans, and nuts.\n\n" +
    "Average consumption per day:\n" +
    "- Active Adults & Athletes: Require 1.2 to 2.0 grams of protein per kilogram of body weight.\n" +
    "- Pregnant & Nursing Women: Need 75 to 100 grams of protein per day.\n" +
    "- Older Adults: May benefit from 1.1 to 1.2 grams per kilogram to prevent muscle loss.\n\n" +

    "High-protein vegetarian foods:\n" +
    "- Soybeans – ~36 g protein per 100 g (dry)\n" +
    "- Tofu – ~8–15 g per 100 g (varies by type)\n" +
    "- Paneer (cottage cheese) – ~18–20 g per 100 g\n" +
    "- Greek yogurt/curd – ~10 g protein per 100 g (Greek yogurt is higher)\n" +
    "- Lentils (dal) – ~9 g per 100 g cooked\n" +
    "- Chickpeas (chana) – ~8–9 g per 100 g cooked\n" +
    "- Rajma (kidney beans) – ~8–9 g per 100 g cooked\n" +
    "- Moong beans/sprouts – ~7–9 g per 100 g\n" +
    "- Peanuts – ~25–26 g per 100 g\n" +
    "- Almonds – ~21 g per 100 g\n" +
    "- Pumpkin seeds – ~30 g per 100 g\n" +
    "- Chia seeds – ~16–17 g per 100 g\n\n" +

    "Protein-rich vegetables (approximate protein per 100 g):\n" +
    "- Green peas – ~5 g\n" +
    "- Spinach – ~3 g\n" +
    "- Broccoli – ~3 g\n" +
    "- Brussels sprouts – ~3–4 g\n" +
    "- Mushrooms – ~3 g\n" +
    "- Asparagus – ~2–3 g\n" +
    "- Sweet corn – ~3–4 g\n" +
    "- Kale – ~3 g\n" +
    "- Potatoes (with skin) – ~2 g\n" +
    "- Cauliflower – ~2 g\n\n" +

    "Higher-protein fruits (approximate protein per 100 g):\n" +
    "- Guava – ~2.5–3 g\n" +
    "- Avocado – ~2 g\n" +
    "- Blackberries – ~1.5–2 g\n" +
    "- Jackfruit – ~1.5–2 g\n" +
    "- Pomegranate – ~1.5–2 g\n" +
    "- Banana – ~1 g\n" +
    "- Kiwi – ~1 g\n" +
    "- Orange – ~0.9 g\n\n" +

    "Protein-rich nuts (approximate protein per 100 g):\n" +
    "- Peanuts – ~25–26 g\n" +
    "- Almonds – ~21 g\n" +
    "- Pistachios – ~20 g\n" +
    "- Cashews – ~18 g\n" +
    "- Walnuts – ~15 g\n" +
    "- Hazelnuts – ~15 g\n" +
    "- Brazil nuts – ~14 g",

  Carbohydrates:
    "The body’s main source of energy. Sources include rice, bread, fruits, vegetables, and grains.",

  Fiber:
    "A type of carbohydrate that helps with digestion, keeps you regular, and supports gut health. Sources include fruits, vegetables, whole grains, and legumes.",

  Fats:
    "A nutrient that provides energy, helps absorb certain vitamins, and supports brain and hormone function. Sources include oils, nuts, seeds, butter, and dairy products.",



Dietaryrecommendedintake :"Men generally require more total energy and higher amounts of certain macronutrients and vitamins due to typically higher body mass and muscle percentages:Calories: 2,000 to 3,000 kcal per day (depending on activity level).Protein: Approximately 56g per day.Fiber: 38g per day.Vitamin C: 90mg per day.Iron: 8mg per day (significantly lower than women).WomenWomen have unique lifecycle needs—especially relating to bone health, menstruation, and childbearing:Calories: 1,600 to 2,400 kcal per day.Protein: Approximately 46g per day.Fiber: 25g per day.Iron: 18mg per day (increases to 27mg during pregnancy to support blood volume).Folate / Folic Acid: 400mcg DFE per day (crucial for women of childbearing age to prevent neural tube defects).Vitamin C: 75mg per day.Children (Ages 4–13)Children need nutrient-dense food to fuel continuous growth spurts, though their total caloric requirements are smaller than adults:Calories: 1,200 to 1,800 kcal per day (varies heavily by exact age and biological sex).Protein: 19g to 34g per day depending on age.Calcium: 1,000mg (ages 4–8) to 1,300mg (ages 9–13) to support bone development.Iron: 10mg (ages 4–8) to 8mg (ages 9–13).Sodium: Less than 1,500mg to 2,200mg per day depending on age",



  Vitamins:
    "Organic nutrients required in small amounts to support immunity, energy production, growth, and overall health. They are mainly obtained from fruits, vegetables, dairy products, eggs, and other whole foods.\n\n" +

    "Vitamin A:\n" +
    "- Function: Supports vision, immune function, skin health, and cell growth.\n" +
    "- Sources: Carrots, sweet potatoes, spinach, pumpkin, mango, eggs, milk.\n" +
    "- Daily requirement: Adults generally need about 700–900 mcg per day.\n\n" +

    "Vitamin B Complex:\n" +
    "- Function: Helps convert food into energy, supports brain function, and maintains healthy blood cells.\n" +
    "- Sources: Whole grains, beans, lentils, nuts, seeds, eggs, dairy products, meat.\n" +
    "- Types include: B1 (Thiamine), B2 (Riboflavin), B3 (Niacin), B5, B6, B7 (Biotin), B9 (Folate), B12.\n\n" +

    "Vitamin C:\n" +
    "- Function: Supports immunity, collagen production, wound healing, and iron absorption.\n" +
    "- Sources: Oranges, guava, amla, kiwi, strawberries, bell peppers, broccoli.\n" +
    "- Daily requirement: Adults generally need about 75–90 mg per day.\n\n" +

    "Vitamin D:\n" +
    "- Function: Helps calcium absorption, supports bones, muscles, and immune health.\n" +
    "- Sources: Sunlight exposure, fortified milk, eggs, fatty fish, mushrooms.\n" +
    "- Daily requirement: Adults generally need about 600–800 IU per day.\n\n" +

    "Vitamin E:\n" +
    "- Function: Acts as an antioxidant and protects cells from damage.\n" +
    "- Sources: Almonds, sunflower seeds, peanuts, spinach, vegetable oils.\n" +
    "- Daily requirement: Adults generally need about 15 mg per day.\n\n" +

    "Vitamin K:\n" +
    "- Function: Important for blood clotting and bone health.\n" +
    "- Sources: Leafy green vegetables, broccoli, cabbage, spinach.\n" +
    "- Daily requirement: Adults generally need about 90–120 mcg per day.",

  Minerals:
    "Essential inorganic nutrients needed for bones, muscles, nerves, blood health, and many body functions.\n\n" +

    "Calcium:\n" +
    "- Function: Builds strong bones and teeth, supports muscle contraction and nerve function.\n" +
    "- Sources: Milk, yogurt, paneer, tofu, sesame seeds, leafy greens.\n" +
    "- Daily requirement: Adults generally need about 1000–1200 mg per day.\n\n" +

    "Iron:\n" +
    "- Function: Helps produce hemoglobin and transport oxygen in the blood.\n" +
    "- Sources: Spinach, lentils, beans, chickpeas, nuts, seeds, meat.\n" +
    "- Daily requirement: Adults generally need about 8–18 mg per day.\n\n" +

    "Magnesium:\n" +
    "- Function: Supports muscles, nerves, energy production, and bone health.\n" +
    "- Sources: Almonds, pumpkin seeds, spinach, whole grains, legumes.\n" +
    "- Daily requirement: Adults generally need about 310–420 mg per day.\n\n" +

    "Potassium:\n" +
    "- Function: Maintains fluid balance, nerve signals, and muscle function.\n" +
    "- Sources: Bananas, potatoes, coconut water, beans, spinach.\n" +
    "- Daily requirement: Adults generally need about 2600–3400 mg per day.\n\n" +

    "Zinc:\n" +
    "- Function: Supports immunity, wound healing, growth, and metabolism.\n" +
    "- Sources: Nuts, seeds, dairy products, beans, whole grains.\n" +
    "- Daily requirement: Adults generally need about 8–11 mg per day.\n\n" +

    "Phosphorus:\n" +
    "- Function: Supports bones, teeth, energy production, and cell repair.\n" +
    "- Sources: Dairy products, meat, fish, nuts, seeds, legumes.\n" +
    "- Daily requirement: Adults generally need about 700 mg per day.",

calories:"A calorie is a unit of measurement for energy. In nutrition, it refers to the amount of energy food and drinks provide to the human bodyEating more calories than you burn:Body stores extra energyCan lead to weight gainBody uses stored energy Can lead to weight loss",


nutrientdensefoods:"Nutrient-dense foods are foods that provide a high amount of vitamins, minefrals, protein, fiber, and other essential nutrients while being relatively low in calories, added sugars, saturated fats, and sodium. They help meet your nutritional needs without providing excessive energy.",

WholeFoods:"Whole foods are foods that are minimally processed or unprocessed and remain close to their natural form. They are typically rich in vitamins, minerals, fiber, and other essential nutrients.",
Prebiotics :"Prebiotics are types of dietary fiber that feed the beneficial bacteria (probiotics) in the gut, helping them grow and function effectively.",
Probiotics:"are live beneficial microorganisms (good bacteria or yeast) that help maintain a healthy balance of microorganisms in the digestive system.",
Cholesterol : "Cholesterol is a waxy, fat-like substance found in every cell of the body. It is needed to make hormones, vitamin D, and substances that help digest food. However, having too much cholesterol in the blood can increase the risk of heart disease."
  
  }
  
  return (
   <div className="p-6 mx-auto space-y-6 font-sans">

  {/* Header */}
  <header className="border-b border-gray-200 pb-4">
    <h1 className="text-3xl font-extrabold text-gray-950">
      Nutripedia
    </h1>
    <p className="text-gray-500 text-sm">
      Your interactive guide to nutrition and daily energy.
    </p>
  </header>

  {/* Nutrient Buttons */}
  <div className="flex flex-wrap gap-3">
    {Object.keys(nutrients).map((item) => (
      <button
        key={item}
        onClick={() => setSelected(item)}
        className={`p-2 text-left rounded ${
          selected === item
            ? "bg-blue-500 text-white"
            : "bg-gray-100"
        }`}
      >
        {item}
      </button>
    ))}
  </div>

  {/* Main Content */}
  <div className="bg-amber-50 p-5 rounded-xl border border-amber-200 shadow-sm">
    <p>
      The % Daily Value is simply a guide to know how much of the RDA
      (Recommended Dietary Allowance) of a specific nutrient is supplied
      per serving of a particular food and beverage.
    </p>
  </div>

  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
    <h2 className="text-xl font-bold text-gray-800 mb-2">
      Understanding Daily Values (DV)
    </h2>

    <p className="text-gray-600 text-sm leading-relaxed">
      Daily Value (DV) is the recommended amount of a nutrient that an
      average healthy adult should consume each day.
    </p>
  </div>


  {/* Nutrient Selector */}
  <div className="flex gap-8 w-full">

    {/* Left Column */}
    <div className="w-2/3">

      <p className="font-bold mb-3">

      </p>

      <button
        onClick={() => setSelected("Protein")}
        className="bg-blue-100 px-3 py-1 rounded mb-3"
      >
        Protein
      </button>

      <p className="mb-3">
        Sample text
        <button
          onClick={() => setSelected("fiber")}
          className="bg-blue-100 px-3 py-1 rounded ml-2"
        >
          Fiber
        </button>
      </p>

      <p>
        Sample text
        <button
          onClick={() => setSelected("Carbohydrates")}
          className="bg-blue-100 px-3 py-1 rounded ml-2"
        >
          Carbohydrates
        </button>
      </p>
       <p>
        Sample text
        <button
          onClick={() => setSelected("dietaryreccommendedintake")}
          className="bg-blue-100 px-3 py-1 rounded ml-2"
        >
          Dietary Recommended Intake
        </button>
      </p>
 <p>
        Sample text
        <button
          onClick={() => setSelected("dietaryreccommendedintake")}
          className="bg-blue-100 px-3 py-1 rounded ml-2"
        >
        Vitamins 
        </button>
      </p>
       <p>
        Sample text
        <button
          onClick={() => setSelected("dietaryreccommendedintake")}
          className="bg-blue-100 px-3 py-1 rounded ml-2"
        >
           Minerals
        </button>
      </p>



 <p>
        Sample text
        <button
          onClick={() => setSelected("calories")}
          className="bg-blue-100 px-3 py-1 rounded ml-2"
        >
           calories
        </button>
      </p>
<p>
        Sample text
        <button
          onClick={() => setSelected("nutrientdensefoods")}
          className="bg-blue-100 px-3 py-1 rounded ml-2"
        >
           Prebiotic
        </button>
      </p><p>
        Sample text
        <button
          onClick={() => setSelected("nutrientdensefoods")}
          className="bg-blue-100 px-3 py-1 rounded ml-2"
        >
Probiotic
        </button>
      </p>
 <p>
        Sample text
        <button
          onClick={() => setSelected("nutrientdensefoods")}
          className="bg-blue-100 px-3 py-1 rounded ml-2"
        >
           Nutrient Dense Foods
        </button>
      </p>

<p>
        Sample text
        <button
          onClick={() => setSelected("nutrientdensefoods")}
          className="bg-blue-100 px-3 py-1 rounded ml-2"
        >
           Cholesterol
        </button>
      </p>


    </div>


    {/* Right Column */}
    <div className="w-1/3 border p-4 rounded">

      <h3 className="font-bold text-xl">
        {selected}
      </h3>

      <p className="mt-2 text-gray-700">
        {nutrients[selected]}
      </p>

    </div>

  </div>

</div>
  );
};

export default Nutripedia;