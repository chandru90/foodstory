// import React, { useState } from "react";
// import axios from "axios";

// const Recipeplanner = () => {

//   const [ingredient, setIngredient] = useState("");
//   const [group, setGroup] = useState("all");
//   const [loading, setLoading] = useState(false);
//   const [recipes, setRecipes] = useState([]);
//   const [error, setError] = useState("");


//   const handlerecipegenerate = async () => {

//     try {

//       setLoading(true);
//       setError("");


//       const response = await axios.get(
//         "http://localhost:5000/generaterecipe",
//         {
//           params:{
//             ingredient,
//             group
//           }
//         }
//       );


//       console.log(
//         "API Response:",
//         response.data
//       );


//       let result = response.data;



//       // Convert string JSON from Ollama
//       if(typeof result === "string"){

//         result = result
//         .replace(/```json/g,"")
//         .replace(/```/g,"")
//         .trim();


//         result = JSON.parse(result);

//       }



//       if(Array.isArray(result)){

//         setRecipes(result);

//       }
//       else if(
//         result &&
//         Array.isArray(result.recipes)
//       ){

//         setRecipes(result.recipes);

//       }
//       else{

//         setRecipes([]);

//       }



//     }
//     catch(err){

//       console.log(
//         "API ERROR",
//         err
//       );

//       setError(
//         "Failed to generate recipes"
//       );

//       setRecipes([]);

//     }
//     finally{

//       setLoading(false);

//     }

//   };



//   return (

//     <div
//       style={{
//         maxWidth:"1200px",
//         margin:"auto",
//         padding:"20px",
//         fontFamily:"Arial"
//       }}
//     >


//       <h1>
//         🍽 Weekly Recipe Planner
//       </h1>



//       <div
//         style={{
//           display:"flex",
//           gap:"10px",
//           marginBottom:"20px",
//           flexWrap:"wrap"
//         }}
//       >


//         <input

//           type="text"

//           placeholder="Search ingredient"

//           value={ingredient}

//           onChange={
//             e=>setIngredient(e.target.value)
//           }

//           style={{
//             flex:1,
//             padding:"12px",
//             minWidth:"250px"
//           }}

//         />



//         <select

//           value={group}

//           onChange={
//             e=>setGroup(e.target.value)
//           }

//           style={{
//             padding:"12px"
//           }}

//         >

//           <option value="all">
//             All
//           </option>

//           <option value="kids">
//             Kids
//           </option>

//           <option value="adult">
//             Adults
//           </option>

//           <option value="elderly">
//             Elderly
//           </option>

//           <option value="diabetic">
//             Diabetic
//           </option>

//           <option value="budgetfriendly">
//             budgetfriendly
//           </option>

//         </select>

// <input type="check" name="cusinetype">

// <option value={northindian}>northindian</option>


// <option value={northindian}>northindian</option>
// <option value={northindian}>italian</option>
// <option value={northindian}>chinease</option>
// <option value={northindian}>balanced</option>
// </input>

//         <button

//           onClick={handlerecipegenerate}

//           disabled={loading}

//           style={{
//             padding:"12px 20px",
//             background:"#27ae60",
//             color:"white",
//             border:"none",
//             borderRadius:"8px"
//           }}

//         >

//         {
//           loading
//           ? "Generating..."
//           : "Generate Recipes"
//         }


//         </button>


//       </div>




//       {
//         error &&

//         <div
//           style={{
//             color:"red"
//           }}
//         >
//           {error}
//         </div>

//       }





//       {
//         !loading &&
//         recipes.length===0 &&

//         <h3>
//           No recipes generated
//         </h3>

//       }






//       <div

//         style={{

//           display:"grid",

//           gridTemplateColumns:
//           "repeat(auto-fit,minmax(320px,1fr))",

//           gap:"20px"

//         }}

//       >




//       {

//       recipes.map(
//         (recipe,index)=>(



//         <div

//           key={index}

//           style={{

//             background:"#fff",

//             padding:"20px",

//             borderRadius:"12px",

//             boxShadow:
//             "0 3px 10px #ccc"

//           }}

//         >



//           <h2>

//             {recipe.title || "Recipe"}

//           </h2>




//           <p>

//           <b>
//           Category:
//           </b>

//           {" "}

//           {recipe.category || "General"}

//           </p>




//           <p>

//           <b>
//           Calories:
//           </b>

//           {" "}

//           {recipe.calories || "N/A"}

//           kcal

//           </p>





//           <h3>
//             Ingredients
//           </h3>



//           <ul>


//           {

//           Array.isArray(recipe.ingredients)

//           &&

//           recipe.ingredients.map(

//             (item,i)=>(

//               <li key={i}>
//                 {item}
//               </li>

//             )

//           )

//           }


//           </ul>






//           <h3>
//             Instructions
//           </h3>


//           <p>

//           {recipe.instructions ||
//           "No instructions"}

//           </p>





//           <h3>
//             Nutritional Info
//           </h3>



//           <ul>


//           {

//           Array.isArray(
//             recipe.nutritionalinfo
//           )

//           &&

//           recipe.nutritionalinfo.map(

//             (item,i)=>(

//               <li key={i}>
//                 {item}
//               </li>

//             )

//           )

//           }


//           </ul>





//         </div>



//         )

//       )

//       }



//       </div>



//     </div>

//   );

// };


// export default Recipeplanner;




// import React, { useState } from "react";
// import axios from "axios";

// const Recipeplanner = () => {
//   const [ingredient, setIngredient] = useState("");
//   const [group, setGroup] = useState("all");
//   const [cuisine, setCuisine] = useState("balanced");

//   const [loading, setLoading] = useState(false);
//   const [recipes, setRecipes] = useState([]);
//   const [error, setError] = useState("");

//   const handlerecipegenerate = async () => {
//     setLoading(true);
//     setError("");
//     setRecipes([]);

//     try {
//       const response = await axios.get(
//         "https://recipe-wnrc.onrender.com/recipes/generaterecipe",
//         {
//           params: {
//             ingredient,
//             group,
//             cuisine,
//           },
//         }
//       );

//       console.log("API Response:", response.data);

//       let result = response.data;

//       // If backend returns JSON as string
//       if (typeof result === "string") {
//         try {
//           result = result
//             .replace(/```json/g, "")
//             .replace(/```/g, "")
//             .trim();

//           result = JSON.parse(result);
//         } catch (e) {
//           console.log("JSON Parse Error:", e);
//         }
//       }

//       if (Array.isArray(result)) {
//         setRecipes(result);
//       } else if (result.recipes && Array.isArray(result.recipes)) {
//         setRecipes(result.recipes);
//       } else if (result.data && Array.isArray(result.data)) {
//         setRecipes(result.data);
//       } else {
//         console.log("Unexpected Response:", result);
//         setRecipes([]);
//       }
//     } catch (err) {
//       console.log(err);

//       if (err.response) {
//         console.log("Server Error:", err.response.data);
//         setError(err.response.data.message || "Server Error");
//       } else {
//         setError("Failed to generate recipes");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       style={{
//         maxWidth: "1200px",
//         margin: "auto",
//         padding: "20px",
//         fontFamily: "Arial",
//       }}
//     >
//       <h1>🍽 Weekly Recipe Planner</h1>

//       <div
//         style={{
//           display: "flex",
//           gap: "10px",
//           marginBottom: "20px",
//           flexWrap: "wrap",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search ingredient"
//           value={ingredient}
//           onChange={(e) => setIngredient(e.target.value)}
//           style={{
//             padding: "12px",
//             flex: 1,
//             minWidth: "250px",
//           }}
//         />

//         <select
//           value={group}
//           onChange={(e) => setGroup(e.target.value)}
//           style={{ padding: "12px" }}
//         >
//           <option value="all">All</option>
//           <option value="kids">Kids</option>
//           <option value="adult">Adults</option>
//           <option value="elderly">Elderly</option>
//           <option value="diabetic">Diabetic</option>
//           <option value="budgetfriendly">Budget Friendly</option>
//         </select>

//         <select
//           value={cuisine}
//           onChange={(e) => setCuisine(e.target.value)}
//           style={{ padding: "12px" }}
//         >
//           <option value="balanced">Balanced</option>
//           <option value="northindian">North Indian</option>
//           <option value="southindian">South Indian</option>
//           <option value="italian">Italian</option>
//           <option value="chinese">Chinese</option>
//           <option value="mexican">Mexican</option>
//         </select>

//         <button
//           onClick={handlerecipegenerate}
//           disabled={loading}
//           style={{
//             padding: "12px 20px",
//             background: "#27ae60",
//             color: "#fff",
//             border: "none",
//             borderRadius: "8px",
//             cursor: "pointer",
//           }}
//         >
//           {loading ? "Generating..." : "Generate Recipes"}
//         </button>
//       </div>

//       {error && (
//         <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
//       )}

//       {!loading && recipes.length === 0 && !error && (
//         <p>No recipes found.</p>
//       )}

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
//           gap: "20px",
//         }}
//       >
//         {recipes.map((recipe, index) => (
//           <div
//             key={index}
//             style={{
//               background: "#fff",
//               padding: "20px",
//               borderRadius: "12px",
//               boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
//             }}
//           >
//             <h2>{recipe.title || "Recipe"}</h2>

//             <p>
//               <strong>Category:</strong>{" "}
//               {recipe.category || "General"}
//             </p>

//             <p>
//               <strong>Calories:</strong>{" "}
//               {recipe.calories || "N/A"} kcal
//             </p>

//             <h3>Ingredients</h3>

//             {Array.isArray(recipe.ingredients) ? (
//               <ul>
//                 {recipe.ingredients.map((item, i) => (
//                   <li key={i}>{item}</li>
//                 ))}
//               </ul>
//             ) : (
//               <p>{recipe.ingredients || "No ingredients"}</p>
//             )}

//             <h3>Instructions</h3>

//             <p>{recipe.instructions || "No instructions available"}</p>

//             <h3>Nutrition</h3>

//             {Array.isArray(recipe.nutritionalinfo) ? (
//               <ul>
//                 {recipe.nutritionalinfo.map((item, i) => (
//                   <li key={i}>{item}</li>
//                 ))}
//               </ul>
//             ) : (
//               <p>{recipe.nutritionalinfo || "No nutrition data"}</p>
//             )}

//             {recipe.estimatedCost && (
//               <p>
//                 <strong>Estimated Cost:</strong>{" "}
//                 {recipe.estimatedCost}
//               </p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Recipeplanner;





// import React, { useState } from "react";
// import axios from "axios";

// const Recipeplanner = () => {
//   const [ingredient, setIngredient] = useState("");
//   const [group, setGroup] = useState("all");
//   const [cuisine, setCuisine] = useState("balanced");

//   const [loading, setLoading] = useState(false);
//   const [recipes, setRecipes] = useState([]);
//   const [error, setError] = useState("");

//   const handlerecipegenerate = async () => {
//     setLoading(true);
//     setError("");
//     setRecipes([]);

//     try {
//       const response = await axios.get(
//         "https://recipe-wnrc.onrender.com/recipes/generaterecipe",
//         {
//           params: {
//             ingredient,
//             group,
//             cuisine,
//           },
//         }
//       );


//       console.log("API RESPONSE:", response.data);


//       let data = response.data;


//       // handle string json response
//       if (typeof data === "string") {
//         try {
//           data = data
//             .replace(/```json/g, "")
//             .replace(/```/g, "")
//             .trim();

//           data = JSON.parse(data);

//         } catch (e) {
//           console.log("JSON ERROR", e);
//         }
//       }


//       // Your API returns array directly
//       if (Array.isArray(data)) {

//         setRecipes(data);

//       } 
//       else if (Array.isArray(data.recipes)) {

//         setRecipes(data.recipes);

//       }
//       else {

//         setError("No recipes found");

//       }


//     } catch (err) {

//       console.log(err);

//       if (err.response) {
//         setError(
//           err.response.data?.message ||
//           "Server Error"
//         );
//       } else {
//         setError("Unable to connect server");
//       }

//     }


//     setLoading(false);
//   };

// const hanpersonalise=async()=>{


// }
//   return (

//     <div
//       style={{
//         maxWidth:"1200px",
//         margin:"20px auto",
//         padding:"20px",
//         fontFamily:"Arial"
//       }}
//     >


//   <div
//   style={{
//     textAlign: "center",
//     marginBottom: "40px",
//   }}
// >
//   <h1
//     style={{
//       fontSize: "42px",
//       color: "#2E7D32",
//       marginBottom: "10px",
//     }}
//   >
//     🍽 Weekly Recipe Planner
//   </h1>

//   <p
//     style={{
//       color: "#666",
//       fontSize: "18px",
//     }}
//   >
//     AI Generated Healthy Weekly Meal Plan
//   </p>
// </div>



//       <div
//        style={{
//     flex:1,
//     padding:"14px",
//     borderRadius:"12px",
//     border:"1px solid #ddd",
//     fontSize:"16px",
//     outline:"none"
// }}
//       >
        


//         <input
//           placeholder=" Search based on Ingredient"
//           value={ingredient}
//           onChange={(e)=>setIngredient(e.target.value)}
//          style={{
//     flex:1,
//     padding:"14px",
//     borderRadius:"12px",
//     border:"1px solid #ddd",
//     fontSize:"16px",
//     outline:"none"
// }}
//         />



//         <select
//           value={group}
//           onChange={(e)=>setGroup(e.target.value)}
//           style={{
//     flex:1,
//     padding:"14px",
//     borderRadius:"12px",
//     border:"1px solid #ddd",
//     fontSize:"16px",
//     outline:"none"
// }}
//         >
//           <option value="all">
//             All
//           </option>

//           <option value="kids">
//             Kids
//           </option>

//           <option value="adult">
//             Adult
//           </option>

//           <option value="elderly">
//             Elderly
//           </option>

//           <option value="diabetic">
//             Diabetic
//           </option>

//           <option value="budgetfriendly">
//             Budget Friendly
//           </option>

//         </select>

// <button onClick={handlepersonalise}>
// personalise
// </button>

//         <select
//           value={cuisine}
//           onChange={(e)=>setCuisine(e.target.value)}
//           style={{
//     flex:1,
//     padding:"14px",
//     borderRadius:"12px",
//     border:"1px solid #ddd",
//     fontSize:"16px",
//     outline:"none"
// }}
//         >

//           <option value="balanced">
//             Balanced
//           </option>

//           <option value="northindian">
//             North Indian
//           </option>

//           <option value="southindian">
//             South Indian
//           </option>

//           <option value="italian">
//             Italian
//           </option>

//           <option value="chinese">
//             Chinese
//           </option>

//           <option value="mexican">
//             Mexican
//           </option>

//         </select>



//         <button
//           onClick={handlerecipegenerate}
//           disabled={loading}
//           style={{
//     flex:1,
//     padding:"14px",
//     borderRadius:"12px",
//     border:"1px solid #ddd",
//     fontSize:"16px",
//     outline:"none"
// }}
//         >

//           {
//             loading
//             ? "Generating..."
//             : "Generate Recipes"
//           }

//         </button>


//       </div>




//       {
//         error &&
//         <h3 style={{color:"red"}}>
//           {error}
//         </h3>
//       }





//       <div
//         style={{
//           display:"grid",
//           gridTemplateColumns:
//           "repeat(auto-fit,minmax(350px,1fr))",
//           gap:"20px"
//         }}
//       >



//       {
//         recipes.map((day,index)=>(


//           <div
//             key={index}
//            style={{
//     background:"#fff",
//     borderRadius:"20px",
//     overflow:"hidden",
//     boxShadow:"0 10px 30px rgba(0,0,0,.08)",
//     transition:"0.3s",
//     padding:"25px"
// }}
//           >


//             <h2>
//               📅 {day.day}
//             </h2>




//             {
//               ["breakfast","lunch","dinner"]
//               .map((meal)=>(


//                 <div key={meal}>


//                   <h3>
//                     🍴 {meal.toUpperCase()}
//                   </h3>



//                   <h4>
//                     {
//                       day[meal]?.title ||
//                       "No title"
//                     }
//                   </h4>




//                   <p>

//                     <b>
//                       Calories:
//                     </b>

//                     {" "}

//                     {
//                       day[meal]?.calories ||
//                       "N/A"
//                     }

//                   </p>





//                   <b>
//                     Ingredients
//                   </b>


//                   <ul>

//                     {
//                       day[meal]?.ingredients?.map(
//                         (item,i)=>(

//                           <li key={i}>
//                             {item}
//                           </li>

//                         )
//                       )
//                     }

//                   </ul>





//                   <b>
//                     Instructions
//                   </b>


//                   <p>
//                     {
//                       day[meal]?.instructions ||
//                       "No instructions"
//                     }
//                   </p>






//                   <b>
//                     Nutrition
//                   </b>


//                   <ul>

//                   {
//                     day[meal]?.nutritionalinfo?.map(
//                       (item,i)=>(

//                         <li key={i}>
//                           {item}
//                         </li>

//                       )
//                     )
//                   }

//                   </ul>


//                   <hr/>


//                 </div>


//               ))
//             }



//           </div>


//         ))
//       }



//       </div>


//     </div>

//   );

// };


// export default Recipeplanner;




// update



import React, { useState } from "react";
import axios from "axios";
import {useRef} from "react";
import { useEffect } from "react";
// import Grow from "@mui/material/Grow";


const Recipeplanner = () => {

  const [ingredient, setIngredient] = useState("");
  const [group, setGroup] = useState("all");
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");
const[showalert,setShowalert] =useState(false)
// const [ongenerate,setOngenerate] =useState(false)

// const [curdata,setCurdata]=useState("")

const cachedata =localStorage.getItem("cacheddata")







// const [visibleWords, setVisibleWords] = useState([]);

  const instructions = `
1. Prepare the ingredients:
   - Wash and chop all vegetables.
   - Measure spices and keep all ingredients ready.

2. Cook the base:
   - Heat 1 tablespoon of oil in a pan over medium heat.
   - Add onions and sauté until golden brown.
   - Add garlic, ginger, and spices. Cook for 1-2 minutes.

3. Add main ingredients:
   - Add the vegetables/protein and mix well.
   - Cook until the ingredients become tender.

4. Final preparation:
   - Add seasoning and adjust salt according to taste.
   - Simmer for 5 minutes until flavors combine.

5. Serve:
   - Garnish with fresh herbs.
   - Serve hot with your preferred side dish.
`;

  useEffect(() => {
    const words = instructions.split(" ");

    // setVisibleWords([]);

    words.forEach((word, index) => {
      setTimeout(() => {
        // setVisibleWords((prev) => [...prev, word]);
      }, index * 100);
    });

  });


const content = [
  { title: "Plan Your Meals" },
  { title: "Discover New Recipes" },
  { title: "Nutrition Tracking" },
  { title: "Healthy Recipe Suggestions" },
  { title: "Achieve Your Wellness Goals" }
];



const [index, setIndex] = useState(0);
  // const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      // setAnimate(true);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % content.length);
        // setAnimate(false);
      }, 300);

    }, 3000);

    return () => clearInterval(timer);
  });

useEffect(()=>{
setShowalert(true)

},[])


  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.playbackRate = 0.1; // 0.5 = slow, 1 = normal, 2 = fast
  }, []);
//   const handlerecipegenerate = async () => {
   
// const cachedRecipes = JSON.parse(localStorage.getItem('cachedata'));
// if(cachedRecipes?.meal_plan){

//     const formattedData = Object.entries(cachedRecipes.meal_plan).map(
//       ([day, meals]) => ({
//         day,
//         ...meals
//       })
//     );

//     setRecipes(formattedData);
//   }

// console.log("cacheddata",cachedRecipes)
// // setRecipes(cachedRecipes)
// console.log("recip",recipes)
// //     try {

// //       setLoading(true);
// //       setError("");


// //       const response = await axios.get(
// //         "http://localhost:3005/recipes/generaterecipe",
// //         {
// //           params:{
// //             ingredient,
// //             group
// //           }
// //         }
// //       );


// //       console.log(
// //         "API Response:",
// //         response.data
// //       );


//   //     let result = cachedRecipes;


//   // // If backend returns JSON as string
//   //     if (typeof result === "string") {
//   //       try {
//   //         result = result
//   //           .replace(/```json/g, "")
//   //           .replace(/```/g, "")
//   //           .trim();

//   //         result = JSON.parse(result);
//   //       } catch (e) {
//   //         console.log("JSON Parse Error:", e);
//   //       }
//   //     }

//   //     if (Array.isArray(result)) {
//   //       setRecipes(result);
//   //     } else if (result.recipes && Array.isArray(result.recipes)) {
//   //       setRecipes(result.recipes);
//   //     } else if (result.data && Array.isArray(result.data)) {
//   //       setRecipes(result.data);
//   //     } else {
//   //       console.log("Unexpected Response:", result);
//   //       setRecipes(result);
//   //       console.log("recipes",recipes)
//   //     }
    



//   };


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

const [currentQuote, setCurrentQuote] = useState(nutritionQuotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prevQuote) => {
        let nextQuote;

        do {
          nextQuote =
            nutritionQuotes[
              Math.floor(Math.random() * nutritionQuotes.length)
            ];
        } while (nextQuote === prevQuote);

        return nextQuote;
      });
    }, 5000);

    return () => clearInterval(interval);
  });


 const handlerecipegenerate = async () => {
   
const cachedRecipes = JSON.parse(localStorage.getItem('cachedata'));

console.log("cached recipesnew ",cachedRecipes)
if(cachedRecipes?.meal_plan){

    const formattedData = Object.entries(cachedRecipes.meal_plan).map(
      ([day, meals]) => ({
        day,
        ...meals
      })
    );

    setRecipes(formattedData);
  }

console.log("cacheddata",cachedRecipes)
// setRecipes(cachedRecipes)
console.log("recip",recipes)
   
setLoading(true)
try {
      const response = await axios.get("https://recipe-wnrc.onrender.com/recipes/generaterecipe",
      // const response = await axios.get("http://localhost:3006/recipes/generaterecipe",
        {
          params: {
            ingredient,
            group,
            cachedata
           
          },
        }
      );

      console.log("API Response:", response.data);

      // let result = response.data;
      localStorage.setItem(
  "cachedata",
  JSON.stringify(response.data)
);

console.log("updated cachedata", cachedRecipes)
      // If backend returns JSON as string
      // if (typeof result === "string") {
      //   try {
      //     result = result
      //       .replace(/```json/g, "")
      //       .replace(/```/g, "")
      //       .trim();

      //     result = JSON.parse(result);
      //   } catch (e) {
      //     console.log("JSON Parse Error:", e);
      //   }
      // }

      // if (Array.isArray(result)) {
      //   localStorage.removeItem('cachedata')
      //   localStorage.setItem('cachedata',result)
      
      // } else if (result.recipes && Array.isArray(result.recipes)) {

      //     localStorage.removeItem('cachedata')
      //   localStorage.setItem('cachedata',result,recipes)
      //   setRecipes(result.recipes);
      // } else if (result.data && Array.isArray(result.data)) {
      //     localStorage.removeItem('cachedata')
      //   localStorage.setItem('cachedata',result.data)
      //   setRecipes(result.data);
      // } else {
      //   console.log("Unexpected Response:", result);
      //   setRecipes([]);
      // }
    } catch (err) {
      console.log(err);

      if (err.response) {
        console.log("Server Error:", err.response.data);
        setError(err.response.data.message || "Server Error");
      } else {
        console.log("Failed to generate recipes");
      }
    } finally {
      setLoading(false);
    }
}


return(




<div
  style={{
    minHeight: "100vh",

    padding: "20px"
  }}
>
{
  showalert && (
  <div>
<div className="alert-overlay">
          <div className="alert-box">
            
<p>

  <p>
  Nutritional information shown in the Recipe Planner contains approximate
  calorie and nutrition values. Individual nutritional needs and calorie
  intake vary from person to person. The planner is intended for general
  nutritional awareness and guidance only. Please consult a qualified
  dietitian or healthcare professional for personalized dietary advice.
</p>
</p>
            <button onClick={() => setShowalert(false)}>
              OK
            </button>
          </div>
        </div>


  </div>
  )
}

<div className="relative min-h-screen overflow-hidden ">


  <video
    ref={videoRef}
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full blur-sm  object-cover -z-10"
  >
    <source src="/vid.mp4" type="video/mp4" />
  </video>
       <div className="absolute inset-0 bg-gray-500/40 -z-10"></div>







<div
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
        padding: "35px",
        background: "#080808",
        borderRadius: "24px",
        overflow: "hidden"
      }}
      className="ml-4 mr-4 md:ml-0 md:mr-0"
    >
<h1
  // className={animate ? "slide-up-title" : ""}
  style={{
    color: "#fbfefb",
    fontSize: "clamp(15px, 6vw, 50px)",
    fontWeight: "700",
    letterSpacing: "2px",
    textAlign: "center"
  }}
>
  {content[index].title}
</h1>
    </div>


<div
  style={{
    maxWidth: "900px",
    margin: "40px auto",
    padding: "30px",
    background: "linear-gradient(135deg,#ffffff,#f7fff9)",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
  }}
 className="ml-4 mr-4 md:ml-0 md:mr-0"
>
{
  loading ? (

    
     <div className="bg-white rounded-xl shadow-lg p-6 text-center max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        🥗 NutriFacts
      </h1>

      <p className="text-gray-700 text-lg transition-all duration-500">
        {currentQuote}
      </p>
    </div>
  ) : (
    <>
      <h1
        style={{
          textAlign: "center",
          color: "#166534",
          fontSize: "32px",
          marginBottom: "30px",
        }}
      >
        🍽 Weekly Recipe Planner
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 180px 180px",
          gap: "15px",
          alignItems: "center",
        }}
      >
        {/* Ingredient Search */}
        <div>
          <input
            type="text"
            placeholder="🔍 Search ingredient..."
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            style={{
              width: "100%",
              padding: "14px 16px",
              border: "1px solid #ddd",
              borderRadius: "12px",
              fontSize: "15px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Target Group */}
        <select
          value={group}
          onChange={(e) => setGroup(e.target.value)}
          style={{
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            background: "white",
            cursor: "pointer",
          }}
        >
          <option value="all">👨‍👩‍👧 All</option>
          <option value="kids">🧒 Kids</option>
          <option value="adult">🧑 Adults</option>
          <option value="elderly">👴 Elderly</option>
         
          {/* <option value="budgetfriendly">💰 Budget Friendly</option> */}
        </select>

        {/* Generate Button */}
        <button
          onClick={handlerecipegenerate}
          disabled={loading}
          style={{
            padding: "14px",
            background: loading
              ? "#95d5b2"
              : "linear-gradient(135deg,#27ae60,#2ecc71)",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontWeight: "600",
            cursor: loading ? "not-allowed" : "pointer",
            boxShadow: "0 5px 15px rgba(39,174,96,.3)",
          }}
        >
          {loading ? "⏳ Generating..." : "✨ Generate"}
        </button>
      </div>
    </>
  )
}

  {/* Mobile Responsive */}
  <style>

  {`

  @media(max-width:800px){

    div{
      grid-template-columns:1fr !important;
    }

  }

  `}

  </style>


</div>

  {
        error &&

        <div
          style={{
            color:"red"
          }}
        >
          {error}
        </div>

      }





      {
        !loading &&
        recipes.length===0 &&

        <h3>
          No recipes generated
        </h3>

      }




{/* replaced */}
{/* 
      <div

        style={{

          display:"grid",

          gridTemplateColumns:
          "repeat(auto-fit,minmax(320px,1fr))",

          gap:"20px"

        }}

      > */}


      <div className="w-full px-3 sm:px-4 lg:px-6">

 {/* <div className="space-y-12"> */}
<div className="w-full max-w-[1600px] mx-auto space-y-8 sm:space-y-12">
  {recipes.map((day, index) => (

<div
key={index}
className="
bg-gradient-to-br
from-white
to-gray-50
rounded-[2rem]
shadow-xl
border
border-gray-200
p-8
transition
hover:shadow-2xl
"
>

{/* Day Header */}

<div className="
flex
items-center
justify-between
mb-10
">

{/* <h2 className="
text-4xl
font-extrabold
text-gray-800
flex
items-center
gap-3
">
📅 {day.day}
</h2> */}

{/* 
<div className="
px-5
py-2
rounded-full
bg-green-100
text-green-700
font-bold
">
Healthy Plan
</div> */}

</div>





<div className="space-y-10">


{
(
["breakfast","lunch","dinner",]

).map(meal=>(


<div
key={meal}
className="
bg-white
rounded-[2rem]
overflow-hidden
border
border-gray-200
shadow-md
hover:shadow-xl
transition-all
duration-300
"
>


{/* Header */}

<div className="
bg-gradient-to-r
from-emerald-600
via-green-600
to-teal-500
p-2
text-white
flex
flex-col
md:flex-row
justify-between
items-center
"
>


<div>

<div className="
flex
items-center
gap-3
"
>

<h4 className="
text-3xl
font-black
capitalize
ml-6
">

🍴 {meal}

</h4>


</div>


<p className="
mt-3
text-green-100
text-xl
text-bold
ml-6
"
>

{day[meal]?.recipe_name}

</p>


</div>





<div className="
bg-white/95
text-green-700
rounded-3xl
px-7
py-2
shadow-lg
text-center
min-w-[120px]
mr-10
mt-5
mb-5
">

<p className="
text-sm
font-semibold
uppercase
tracking-wide
">

🔥 Calories

</p>


<p className="
text-2xl
font-black
">

{day[meal]?.calories}


</p>


</div>



</div>






{/* Body */}











<div className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-full px-4 sm:px-6 lg:px-0 mb-10">

  {/* ================= LEFT COLUMN ================= */}
  <div className="flex flex-col gap-8 lg:gap-10 w-full lg:w-[25%] lg:ml-6">

    {/* Macro Cards */}
    <div className="
  grid
  grid-cols-1
  md:grid-cols-2
  gap-3
  sm:gap-4
  mt-4
  lg:mt-6
  justify-items-center
  md:justify-items-stretch
">
  {[
    {
      title: "Protein",
      value: day[meal]?.macros?.protein || "-",
      color: "bg-blue-50 border-blue-100 text-blue-700",
      emoji: "💪",
      message: "Builds & repairs muscles",
    },
    {
      title: "Carbs",
      value: day[meal]?.macros?.carbs || "-",
      color: "bg-emerald-50 border-emerald-100 text-emerald-700",
      emoji: "🍚",
      message: "Provides energy",
    },
    {
      title: "Fiber",
      value: day[meal]?.macros?.fiber || "-",
      color: "bg-purple-50 border-purple-100 text-purple-700",
      emoji: "🌾",
      message: "Supports digestion",
    },
    {
      title: "Fat",
      value: day[meal]?.macros?.fat || "-",
      color: "bg-orange-50 border-orange-100 text-orange-700",
      emoji: "🥑",
      message: "Healthy fats for your body",
    },
  ].map((item, index) => (
    <div
      key={item.title}
      className="
      
        [perspective:1000px]
        w-full
        flex
        justify-center
      "
    >
      <div
        className="
          relative
          h-32
          w-[220px]
          sm:h-40
          sm:w-full
          animate-continuous-flip
        "
        style={{
          animationDelay: `${index * 5}s`,
        }}
      >
        {/* Front */}
        <div
          className={`
            absolute inset-0
            rounded-2xl
            border
            shadow-md
            flex flex-col
            justify-center
            items-center
            text-center
            ${item.color}
            [backface-visibility:hidden]
          `}
        >
          <p className="text-2xl sm:text-4xl">
            {item.emoji}
          </p>

          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            {item.title}
          </p>

          <p className="text-xl sm:text-3xl font-bold">
            {item.value}
          </p>
        </div>

        {/* Back */}
        <div
          className="
            absolute inset-0
            rounded-2xl
            bg-gradient-to-br
            from-emerald-500
            to-green-700
            text-white
            flex flex-col
            justify-center
            items-center
            text-center
            p-2
            sm:p-3
            [transform:rotateY(180deg)]
            [backface-visibility:hidden]
          "
        >
          <p className="text-lg sm:text-2xl mb-1">
            {item.emoji}
          </p>

          <h3 className="text-sm sm:text-xl font-bold">
            {item.title}
          </h3>

          <p className="text-[10px] sm:text-sm px-1 mt-1">
            {item.message}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

    {/* ================= VITAMINS / MINERALS ================= */}
    <div
      className="
        relative
        
        w-full
        h-auto
        lg:h-[700px]
        [transform-style:preserve-3d]
        transition-transform
        duration-700
        hover:[transform:rotateY(180deg)]
      "
    >

      {/* Vitamins */}
      <div
        className="
          relative
          lg:absolute
          lg:inset-0
          rounded-3xl
          overflow-hidden
          [backface-visibility:hidden]
        "
      >
        <div
          className="
            min-h-[500px]
            lg:h-full
            px-4
            sm:px-6
            py-5
            bg-gradient-to-r
            from-emerald-500
            to-green-600
            rounded-3xl
            shadow-xl
          "
        >
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            🥬 Vitamins
          </h2>

          {/* Header */}
          <div className="mt-5 rounded-2xl overflow-hidden">
            <div
              className="
                grid
                grid-cols-3
                gap-2
                bg-green-900
                p-3
                sm:p-4
                text-white
                text-xs
                sm:text-sm
                font-semibold
              "
            >
              <h1>Vitamin</h1>
              <h1 className="text-center">Amount</h1>
              <h1 className="text-right">DV</h1>
            </div>
          </div>

          {/* Vitamins */}
          <div className="mt-2">
            {Object.entries(day[meal]?.vitamins || {}).map(
              ([key, vitamin]) => (
                <div
                  key={key}
                  className="
                    grid
                    grid-cols-3
                    items-center
                    gap-2
                    bg-green-50
                    border
                    border-green-100
                    rounded-xl
                    mt-2
                    p-2
                    sm:p-3
                    shadow-sm
                    text-xs
                    sm:text-sm
                  "
                >
                  <h3 className="font-bold text-green-700 capitalize break-words">
                    {key.replaceAll("_", " ")}
                  </h3>

                  <p className="text-center text-gray-700 break-words">
                    {vitamin.amount}
                  </p>

                  <p className="text-right text-green-700 font-semibold">
                    {vitamin.percent_daily_value}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Minerals */}
      <div
        className="
          mt-6
          mb-10
          lg:mt-0
          lg:absolute
          lg:inset-0
          rounded-3xl
          lg:[transform:rotateY(180deg)]
          [backface-visibility:hidden]
        "
      >
        <div
          className="
            min-h-[500px]
            lg:h-full
            bg-gradient-to-br
            from-green-500
            to-cyan-500
            rounded-3xl
            border
            border-blue-100
            shadow-xl
            p-4
            sm:p-6
          "
        >

          <div className="flex items-center gap-3 mb-5">
            <div
              className="
                w-10 h-10
                sm:w-12 sm:h-12
                rounded-2xl
                bg-white/20
                flex
                items-center
                justify-center
                text-xl
                sm:text-2xl
              "
            >
              💎
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Minerals
              </h2>

              <p className="text-xs sm:text-sm text-white/80">
                Essential micronutrients in this meal
              </p>
            </div>
          </div>

          <div className="space-y-3 lg:space-y-4 lg:max-h-[580px] lg:overflow-y-auto">
            {Object.entries(day[meal]?.minerals || {}).map(
              ([key, mineral]) => (
                <div
                  key={key}
                  className="
                    rounded-2xl
                    border
                    border-gray-100
                    bg-gradient-to-r
                    from-blue-50
                    to-white
                    p-3
                    sm:p-4
                    shadow-sm
                  "
                >
                  <div
                    className="
                      flex
                      flex-col
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                      gap-2
                    "
                  >
                    <h3 className="text-sm sm:text-lg font-semibold capitalize">
                      {key.replaceAll("_", " ")}
                    </h3>

                    <div className="flex items-center justify-between sm:justify-end gap-3">
                      <span
                        className="
                          rounded-full
                          bg-blue-100
                          px-3
                          py-1
                          text-xs
                          sm:text-sm
                          font-bold
                          text-blue-700
                        "
                      >
                        {mineral.amount} mcg
                      </span>

                      <span className="font-semibold text-blue-700 text-sm">
                        {mineral.percent_daily_value}%
                      </span>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  </div>


  {/* ================= RIGHT COLUMN ================= */}
  <div className="flex flex-col w-full lg:w-[75%]">

    {/* Ingredients */}
    <div
      className="
        bg-green-200
        rounded-3xl
        shadow-lg
        border
        border-orange-100
        p-4
        sm:p-6
        mt-4
        lg:mt-10
        w-full
      "
    >

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="
            w-10 h-10
            sm:w-12 sm:h-12
            rounded-2xl
            bg-gradient-to-br
            from-orange-400
            to-orange-600
            flex
            items-center
            justify-center
            text-xl
            sm:text-2xl
            shadow-md
            shrink-0
          "
        >
          🥗
        </div>

        <div>
          <h4 className="text-xl sm:text-2xl font-bold text-gray-800">
            Ingredients
          </h4>

          <p className="text-xs sm:text-sm text-gray-500">
            Everything you need for this meal
          </p>
        </div>
      </div>

      {/* Ingredients List */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-3
          sm:gap-4
          mt-6
        "
      >
        {Object.entries(day[meal]?.ingridients || {}).map(
          ([ingredient, quantity], i) => (
            <div
              key={i}
              className="
                group
                flex
                items-center
                justify-between
                gap-2
                rounded-2xl
                border
                border-gray-200
                bg-gradient-to-r
                from-orange-50
                to-white
                p-3
                shadow-sm
                transition-all
                duration-300
                hover:shadow-lg
                hover:-translate-y-1
                hover:border-orange-300
              "
            >
              <div className="flex items-center gap-2 min-w-0">
                <div
                  className="
                    flex
                    h-5
                    w-5
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-green-500
                    text-white
                    text-xs
                  "
                >
                  ✓
                </div>

                <p className="font-semibold text-gray-800 text-sm truncate">
                  {ingredient}
                </p>
              </div>

              <span
                className="
                  shrink-0
                  rounded-full
                  bg-green-100
                  px-3
                  py-1
                  text-xs
                  sm:text-sm
                  font-bold
                  text-green-700
                "
              >
                {quantity}
              </span>
            </div>
          )
        )}
      </div>

      {/* Empty State */}
      {Object.keys(day[meal]?.ingridients || {}).length === 0 && (
        <div className="rounded-2xl border border-dashed border-gray-300 py-10 text-center">
          <p className="text-gray-500">
            No ingredients available.
          </p>
        </div>
      )}


      {/* ================= COOKING ================= */}
      <section className="mt-8 sm:mt-10 w-full">

        {/* Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-5">
          <div
            className="
              flex
              h-12 w-12
              sm:h-14 sm:w-14
              shrink-0
              items-center
              justify-center
              rounded-2xl
              bg-orange-100
              text-2xl
              sm:text-3xl
            "
          >
            👨‍🍳
          </div>

          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-gray-900">
              Cooking Instructions
            </h4>

            <p className="text-xs sm:text-sm text-gray-500">
              Follow these steps to prepare your meal.
            </p>
          </div>
        </div>

        {/* Instructions */}
        <div
          className="
            w-full
            rounded-2xl
            border
            border-orange-100
            bg-gradient-to-br
            from-white
            via-orange-50
            to-amber-50
            p-4
            sm:p-6
            overflow-x-auto
          "
        >
          {/* <p className="text-sm sm:text-base text-gray-700 leading-7 whitespace-pre-line break-words">
            {JSON.stringify(
              day[meal]?.cooking_instructions,
              null,
              2
            )}
          </p> */}



           {day[meal]?.cooking_instructions
      ?.replace(/^\/\/\s?/gm, "")}
        </div>


        {/* ================= ADDONS ================= */}
       {day[meal]?.addons && Object.keys(day[meal].addons).length > 0 && (
  <div className="mt-6 sm:mt-10">
    <div
      className="
        rounded-3xl
        border
        border-orange-100
        bg-gradient-to-br
        from-white
        via-orange-50
        to-amber-50
        p-4
        sm:p-6
      "
    >
      {/* Addon Header */}
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
        <div className="flex items-center gap-3 sm:gap-4">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-orange-100
              text-2xl
              sm:h-14
              sm:w-14
            "
          >
            🥣
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Add-ons
            </h3>

            <p className="text-xs text-gray-500 sm:text-sm">
              Extra ingredients for this meal
            </p>
          </div>
        </div>

        <span
          className="
            w-fit
            rounded-full
            bg-orange-500
            px-4
            py-2
            text-xs
            font-semibold
            uppercase
            text-white
          "
        >
          Extra
        </span>
      </div>

      {/* Addon Table */}
      <div
        className="
          mt-6
          overflow-x-auto
          rounded-2xl
          border
          border-gray-100
          bg-white
        "
      >
        {/* Table Header */}
        <div
          className="
            min-w-[500px]
            grid
            grid-cols-[2fr_2fr]
            gap-4
            bg-gray-50
            px-5
            py-3
            text-sm
            font-semibold
            text-gray-500
          "
        >
          <span>Ingredient</span>
          <span>Benefit</span>
        </div>

        {/* Addon Rows */}
        {Object.entries(day[meal].addons).map(
          ([ingredient, benefit]) => (
            <div
              key={ingredient}
              className="
                min-w-[500px]
                grid
                grid-cols-[2fr_2fr]
                items-center
                gap-4
                border-t
                border-gray-100
                px-5
                py-5
              "
            >
              {/* Ingredient */}
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-orange-100
                    text-lg
                  "
                >
                  🥑
                </div>

                <p className="font-semibold text-gray-900">
                  {ingredient}
                </p>
              </div>

              {/* Benefit */}
              <p
                className="
                  text-sm
                  leading-6
                  text-gray-600
                "
              >
                {benefit}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  </div>
)}

      </section>
    </div>
  </div>
</div>













<div>
 
  

  </div>
  












</div>


))

}



</div>
<div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 mt-20">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">
    Nutrition Summary
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div className="bg-orange-50 rounded-xl p-4 text-center">
      <p className="text-sm text-gray-500">Calories</p>
      <h3 className="text-2xl font-bold text-orange-600">
        {day?.summary?.total_calories ?? 0}
      </h3>
    </div>

    <div className="bg-blue-50 rounded-xl p-4 text-center">
      <p className="text-sm text-gray-500">Daily Value</p>
      <h3 className="text-2xl font-bold text-blue-600">
        {day?.summary?.dv ?? 0}
      </h3>
    </div>

    <div className="bg-green-50 rounded-xl p-4 text-center">
      <p className="text-sm text-gray-500">Protein</p>
      <h3 className="text-2xl font-bold text-green-600">
        {day?.summary?.Protiens_dv ?? 0}
      </h3>
    </div>

    <div className="bg-yellow-50 rounded-xl p-4 text-center">
      <p className="text-sm text-gray-500">Carbs</p>
      <h3 className="text-2xl font-bold text-yellow-600">
        {day?.summary?.carbs_dv ?? 0}
      </h3>
    </div>

    <div className="bg-red-50 rounded-xl p-4 text-center">
      <p className="text-sm text-gray-500">Fats</p>
      <h3 className="text-2xl font-bold text-red-600">
        {day?.summary?.fats_dv ?? 0}
      </h3>
    </div>

    <div className="bg-purple-50 rounded-xl p-4 text-center">
      <p className="text-sm text-gray-500">Fiber</p>
      <h3 className="text-2xl font-bold text-purple-600">
        {day?.summary?.fiber_dv ?? 0}
      </h3>
    </div>
  </div>
</div>

</div>

))}


</div>



      </div>



    </div>

</div>


)}

export default Recipeplanner



 


























