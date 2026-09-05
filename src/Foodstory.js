// import { useTranslation } from "react-i18next";
// import React, { useState, useRef, useEffect } from "react";
// // import { useMemo } from "react";

// import { useIntl } from "react-intl";





// const FoodStory = ({locale}) => {
//  const intl = useIntl();
// console.log("locale",locale)
//   const containerRefs = useRef({});
// const [activeSection, setActiveSection] = useState(0);
//   const [speakingId, setSpeakingId] = useState(null);
//   const [remainingTime, setRemainingTime] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

// // const [currentWordIndex, setCurrentWordIndex] = useState(-1);


// const [currentBg, setCurrentBg] = useState(0);

// const imageInterval = useRef(null);



// // const [spokenWords, setSpokenWords] = useState([]);

// //  const params = useMemo(
// //     () => new URLSearchParams(window.location.search),
// //     []
// //   );

//   // const bgColor = params.get("bgColor") || "#374151";
//   // const theme = params.get("theme") || "#2196F3";
//   // const fontName = params.get("fontName") || "Arial";
//   // const fontSize = params.get("fontSize") || "16";
// let speechLocale;

// if (locale === "en") {
//   speechLocale = "en-US";
// } else if (locale === "fr") {
//   speechLocale = "fr-FR";
// } else if (locale === "es") {
//   speechLocale = "es-ES";
// } else if (locale === "hi") {
//   speechLocale = "hi-IN";
// } else if (locale === "ta") {
//   speechLocale = "ta-IN";
// } else {
//   speechLocale = "en-US"; // fallback
// }

//   const timerRef = useRef(null);


// useEffect(() => {
//   if (!speakingId || isPaused) return;

//   const interval = setInterval(() => {
//     const container = containerRefs.current[speakingId];

//     if (container) {
//       container.scrollBy({
//         top: 100,
//         behavior: "smooth",
//       });
//     }
//   }, 20000);

//   return () => clearInterval(interval);
// }, [speakingId, isPaused]);

//   const speakText = (text, id) => {
//   window.speechSynthesis.cancel();



   

//   const utterance = new SpeechSynthesisUtterance(text);


//   speechSynthesis.speak(utterance);
//   const speech = new SpeechSynthesisUtterance(text);

//   speech.lang =  speechLocale;
//   speech.rate = 1;

//   // Highlight current word
//   // speech.onboundary = (event) => {
//   //   if (event.name === "word") {
//   //     const words = text.substring(0, event.charIndex).split(" ");
//   //     setCurrentWordIndex(words.length - 1);
//   //   }
//   // };


  
//   const words = text.split(" ").length;
//   const wordsPerSecond = 2.5;
//   const duration = Math.ceil(words / wordsPerSecond);

//   const section = sections.find((item) => item.id === id);

//   // setSelectedSection(section);
//   setCurrentBg(0);
//   setSpeakingId(id);
//   setRemainingTime(duration);
//   setIsPaused(false);

//   clearInterval(timerRef.current);
//   timerRef.current = setInterval(() => {
//     setRemainingTime((prev) => {
//       if (prev <= 1) {
//         clearInterval(timerRef.current);
//         return 0;
//       }
//       return prev - 1;
//     });
//   }, 1000);

//   imageInterval.current = setInterval(() => {
//   setCurrentBg(prev =>
//     (prev + 1) % section.bgImages.length
//   );
//   }, 40000);

// //   speech.onend = () => {
// //     clearInterval(timerRef.current);
// //     clearInterval(imageInterval.current);

// //     setSpeakingId(null);
// //     setRemainingTime(0);
// //     setIsPaused(false);
// //     setCurrentWordIndex(-1);
// //   };


// speech.onend = () => {
//   clearInterval(timerRef.current);
//   clearInterval(imageInterval.current);

//   setSpeakingId(null);
//   setRemainingTime(0);
//   // setCurrentWordIndex(-1);
//   setIsPaused(false);
// console.log("moving to next section")
//   // Move to next section
//   setActiveSection((prev) => (prev + 1) % sections.length);
// };
//   window.speechSynthesis.speak(speech);



  







// };
 





// const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
//    };




//  const scrollRef = useRef(null);

//   useEffect(() => {
//     const container = scrollRef.current;

//     const interval = setInterval(() => {
//       if (!container) return;

//       container.scrollBy({
//         top: 50, // pixels to scroll each interval
//         behavior: "smooth",
//       });

//       // Reset when reaching bottom
//       if (
//         container.scrollTop + container.clientHeight >=
//         container.scrollHeight
//       ) {
//         container.scrollTo({
//           top: 0,
//           behavior: "smooth",
//         });
//       }
//     }, 10000); // every 2 seconds

//     return () => clearInterval(interval);
//   }, []);










// //     const getWordBoundaries = (text) => {
// //   const regex = /\S+/g;
// //   const boundaries = [];

// //   let match;
// //   while ((match = regex.exec(text)) !== null) {
// //     boundaries.push({
// //       word: match[0],
// //       start: match.index,
// //       end: match.index + match[0].length,
// //     });
// //   }

// //   return boundaries;
// // };
//      const sections = [

//             { id: "intro", bgImages: [ "foodstories.png"],mobbgImages: [ "foodstories.png"] },


//            {id: "intro",title: "intro.title", description: "intro.description" , "bgImages": [ "intro1/img1.jpg","intro1/img2.jpg","intro1/img3.jpg","intro1/img4.jpg","intro1/img5.jpg"] ,"mobbgImages": [ "responsive/img2.jpg","intro1/img2.jpg","intro1/img3.jpg","intro1/img4.jpg","intro1/img5.jpg"]},
              

//          {
//   "id": "Mindful eating",
//    "title": "mindfuleating.title",
//    "description": "mindfuleating.description",
//    "bgImages": [ "foodexperience/img3.jpg","foodexperience/img6.jpg","foodexperience/img8.jpg","foodexperience/img12.jpg","foodexperience/img15.jpg"] 
// },
//            {id: "The Evolution of Food: A Journey Through Human History",title: "evolution.title",description: "evolution.description", "bgImages": [ "evoloffood/img9.jpg","evoloffood/img2.jpg","evoloffood/img10.jpg","evoloffood/img1.webp" ,"evoloffood/img10.jpg","evoloffood/img7.jpeg","evoloffood/images8.jpg","evoloffood/img2.jpeg","evoloffood/images3.jpg","evoloffood/img13.jpeg","evoloffood/images14.jpg"] },

// {
//   "id": "the-neolithic-revolution-the-beginning-of-our-food-journey",
//   "title": "neo.title",
//   "description": "neo.description",
//   "bgImages": [ "civiliz/img1.jpg","civiliz/img2.jpg","civiliz/img3.jpg","civiliz/img4.jpg","civiliz/img5.jpg"] 
// },





//    {
//   "id": "How Food Became an Important Part of Civilizations",
//   "title": "civilization.title","description": "civilization.description",
//     "bgImages": [ "civiliz/img6.jpg","civiliz/img7.jpg","civiliz/img8.jpg","civiliz/img9.jpg","civiliz/img10.jpg"] ,
//     "mobbgImages":[ "civiliz/mobimg/img1.jpg","civiliz/mobimg/img2.jpg","civiliz/mobimg/img3.jpg","civiliz/mobimg/img4.jpg","civiliz/mobimg/img5.jpg"] 

// },




// {
//   "id": "the-need-of-the-industrial-revolution",
//   "title": "revo.title",
//   "description": "revo.description",
//     "bgImages": [ "indus/img1.jpg","indus/img2.jpg","indus/img3.jpg","indus/img4.jpg","indus/img5.jpg"] 

// },

//       {
//   "id": "industrial-revolution",
//   "title": "revo1.title",
//   "description": "revo1.description",
//   "bgImages": [ "indus/img6.jpg","indus/img7.jpg","indus/img8.jpg","indus/img9.jpg","indus/img10.jpg"] 

// },
// {
//   "id": "The Columbian Exchange: The Journey That Transformed the World’s Food",
//   "title": "columbian.title",
//   "description":"columbian.description",
//         "bgImages": [ "columbian/img3.jpg","columbian/img6.jpg","columbian/img8.jpg","columbian/img12.jpg","columbian/img15.jpg"] 

// },
// {
//   "id": "The Story and History of Vitamins and Minerals",
//   "title": "vit.title",
//   "description": "vit.description",
//       "bgImages": [ "storyofvitamins/img3.jpg","storyofvitamins/img6.jpg","storyofvitamins/img8.jpg","storyofvitamins/img12.jpg","storyofvitamins/img15.jpg"] 

  
// },
// {
//   "id": "Understanding Food Labels: What They Really Mean",
//   "title": "label.title",
//   "description": "label.description",
//       "bgImages": [ "  foodlabel/img3.jpg","  foodlabel/img6.jpg","  foodlabel/img8.jpg","  foodlabel/img12.jpg","  foodlabel/img15.jpg"] 
// },
// {
//   "id": "cooking-and-kitchens",
//   "title": "cooking.title",
//   "description":"cooking.description" ,
//     "bgImages": [ "cookingandkitchens/img3.jpg","cookingandkitchens/img6.jpg","cookingandkitchens/img8.jpg","cookingandkitchens/img12.jpg","cookingandkitchens/img15.jpg"] 

// },
//       { "id": "century20", 
//         "title": "travel.title",

//          "description": "travel.description",

//                  "bgImages": [ "foodandtravel/img3.jpg","foodandtravel/img6.jpg","foodandtravel/img8.jpg","foodandtravel/img12.jpg","foodandtravel/img15.jpg"] 

//       },
      
//       { "id": "connection",
//          "title": "season.title", 
//         "description": "season.description",

//        "bgImages": [ "seasonal/img1.jpg","seasonal/img2.jpg","seasonal/img3.jpg","seasonal/img4.jpg","seasonal/img5.jpg"] 


//       },
//        {"id":"Future of Food",
//         "title":"future.title" ,
//          "description":"future.description",
//          "bgImages": [ "futureoffood/img1.jpg","futureoffood/img2.jpg","futureoffood/img3.jpg","futureoffood/img4.jpg","futureoffood/img5.jpg"] 

//        },
// // {
// //   "id": "Food and Geography: How the Earth Shapes What We Eat",
// //   "title": "eco.title", 
// //   "description": "eco.description",
// //   "bgImages": [ "foodandeconomics/img1.jpg","foodandeconomics/img2.jpg","foodandeconomics/img3.jpg","foodandeconomics/img4.jpg","foodandeconomics/img5.jpg"] 

// // },







// // {
// //   "id": "Food and Travel: How the Journey of Food Shaped Hospitality",
// //   "title": "foodtravel.title", 
// //   "description": "foodtravel.description",

// // },


// // {
// //   "id": "Seasonal Eating: How Food Connects With Nature and Science","title": "Seasonal Eating: How Food Connects With Nature and Science", "description": "Have you ever noticed how certain foods appear only during specific times of the year? The refreshing taste of watermelon in summer, warming soups during winter, or fresh leafy greens in spring are not just cultural traditions—they are part of a natural connection between food, seasons, and human health. For centuries, people have followed seasonal eating patterns by consuming foods that grow naturally at different times of the year. This practice reflects a deep understanding of nature, agriculture, and the body's changing nutritional needs.\n\nFood has always been influenced by the environment around us. Before modern refrigeration and global transportation, people depended entirely on locally available seasonal foods. They ate what the land naturally provided, adapting their diets according to climate, agricultural cycles, and changing health requirements. Today, science continues to support this connection, showing that seasonal foods are often fresher, more nutrient-rich, and better suited to the body's needs.\n\nEach season brings different challenges for the human body, and nature provides foods that help maintain balance. During summer, high temperatures lead to increased sweating and the loss of water and minerals. Naturally available cooling foods such as watermelon, cucumber, coconut water, and other hydrating fruits help maintain fluid balance, regulate body temperature, and provide essential electrolytes needed to prevent dehydration.\n\nWinter creates a different nutritional demand. As temperatures drop, the body requires more energy to maintain warmth, increasing the need for nutrient-dense foods. Traditional winter diets often include nuts, seeds, ghee, and root vegetables such as carrots and sweet potatoes. These foods provide healthy fats, carbohydrates, and minerals that support energy production and help the body maintain its internal temperature.\n\nThe monsoon season brings increased humidity and a greater risk of infections. During this period, digestion may become more sensitive, making freshly prepared and easily digestible foods especially important. Ingredients such as ginger, turmeric, garlic, and other spices have traditionally been used during rainy seasons because of their beneficial properties. Warm soups, herbal drinks, and cooked meals help support digestion and immunity during this time.\n\nSpring represents a season of renewal and transition. After the heavier foods commonly consumed during winter, the body benefits from lighter, nutrient-rich foods such as leafy greens, sprouts, and fresh fruits. These foods provide fiber, vitamins, and antioxidants that support digestion and overall wellness. Autumn acts as a bridge between summer and winter, encouraging a balanced diet that helps the body gradually adapt to changing temperatures.\n\nThe science behind seasonal eating is closely connected to plant biology. Plants grow according to environmental factors such as sunlight, temperature, soil conditions, and water availability. Through processes like photosynthesis, plants produce nutrients during their natural growing cycles. This is why certain foods thrive in specific seasons—mangoes grow best in warmer climates, while crops such as wheat prefer cooler conditions.\n\nSeasonal eating is also connected to the body's internal biological clock, known as the circadian rhythm. This system regulates important functions such as sleep, digestion, and metabolism. Changes in daylight and temperature throughout the year influence these rhythms. Eating foods that match seasonal conditions helps the body adapt naturally, such as choosing lighter meals during hot weather and more energy-rich foods during colder months.\n\nChoosing seasonal foods also supports the immune system. Each season brings different health concerns, from dehydration in summer to infections during monsoon and respiratory problems in winter. Foods naturally available during these periods often contain nutrients, antioxidants, and protective compounds that help the body respond to seasonal challenges.\n\nBeyond nutrition, seasonal eating supports environmental sustainability. Food grown during its natural season usually requires fewer artificial inputs, less energy for storage, and reduced processing. Supporting local seasonal produce helps farmers, reduces transportation impact, and encourages a more sustainable food system.\n\nModern lifestyles have changed the way people access food. Refrigeration, international trade, and advanced farming methods allow almost every food to be available throughout the year. While this convenience has advantages, it can sometimes reduce freshness, increase dependence on processed foods, and disconnect people from natural food cycles.\n\nUnderstanding the relationship between food and seasons helps us appreciate that eating is not only about satisfying hunger—it is about maintaining balance with nature. From cooling foods that refresh the body in summer to warming foods that provide energy in winter, every season offers unique nutritional benefits.\n\nSeasonal eating is a reminder that nature has its own rhythm, and our bodies are designed to follow it. By choosing foods that grow naturally at the right time, we can support our health, protect the environment, and reconnect with the traditions that have guided human nutrition for generations."
// // },


// {
//   "id": "Food Cuisines and Economics: How What We Eat Shapes the World",
//    "title": "eco.title",
//    "description": "eco.description",
//      "bgImages": ["foodsandeconomics/img1.jpg","foodsandeconomics/img2.jpg","foodsandeconomics/img3.jpg","foodsandeconomics/img4.jpg","foodsandeconomics/img5.jpg"] 

// },
// // {
// //   "id": "The Emotional Power of Cooking: How Food Becomes an Expression of Love", 
// //   "emotion.title": "The Emotional Power of Cooking: How Food Becomes an Expression of Love", 
// //   "emotion.description": "Have you ever noticed how a simple home-cooked meal can feel more special than an expensive restaurant dish? The reason is not only the flavor—it is the emotion, effort, and care behind it. Cooking for someone is one of the most meaningful ways to express affection because every ingredient carries a little piece of the person who prepared it.\n\nFood has always been more than just nourishment. Across cultures and generations, cooking has been a way of showing love, creating comfort, and strengthening relationships. A parent preparing a child’s favorite meal, a friend baking a cake for a celebration, or someone making a warm bowl of soup for a loved one are all examples of how food can communicate feelings that words sometimes cannot express.\n\nWhen we cook for someone, we give more than a meal—we give our time, attention, and thoughtfulness. From choosing ingredients to understanding personal preferences and adding special touches, every step reflects care. A dish becomes meaningful because it is created with another person’s happiness in mind. The emotional value of a meal often comes not from its complexity or cost, but from the intention and love behind it.\n\nCooking also has the unique ability to provide emotional comfort. A familiar recipe can bring back memories of childhood, family gatherings, and special moments. The aroma of a favorite dish can create a feeling of home and belonging, even when we are far away. Food connects with our emotions because it is closely tied to memories, traditions, and personal experiences.\n\nPreparing food for someone is also a way of showing that we understand and appreciate them. Remembering someone’s favorite flavors, adjusting a recipe to suit their needs, or recreating a dish connected to their memories sends a powerful message: “You are important to me.” These small acts of attention often create stronger emotional bonds than grand gestures.\n\nShared meals have always been central to human connection. Families gather around the dining table to share stories, celebrations, and everyday moments. Friends reconnect over meals, couples create memories while cooking together, and communities come together through food traditions. The kitchen often becomes more than a place for preparation—it becomes a space where relationships grow.\n\nCooking also helps preserve history and identity. Family recipes, traditional dishes, and cultural cooking methods carry stories from one generation to the next. A grandmother’s recipe, a festival dish, or a special family spice blend represents more than ingredients—it represents memories, heritage, and the continuation of love across generations.\n\nThe emotional power of cooking extends beyond personal relationships. Sharing homemade food with neighbors, preparing meals for those in need, or offering food during difficult times are acts of kindness that provide comfort and connection. A simple meal can offer not only physical nourishment but also a sense of care, dignity, and belonging.\n\nWhat makes homemade food special are the invisible ingredients that cannot be measured—time, effort, patience, and love. Even the simplest dish can become unforgettable when it is prepared with genuine care.\n\nCooking for someone is ultimately an expression of love through action. Every meal prepared with kindness tells a story of connection and reminds us that food has the power to bring people closer together.\n\nWhen we cook for someone, we do not just prepare food—we create a moment of love, warmth, and connection."
// // },


// // {
// //   "id": "Cooking as Therapy: Finding Calm, Creativity, and Connection in the Kitchen",
// //   "title": "therapy.title",
// //   "description": "therapy.description"
// // },




























// {
//   "id": "lunchbox",
//    "title": "lunchbox.title",
//    "description": "lunchbox.description",
//       "bgImages": [ "lunchbox/img1.jpg","lunchbox/img2.jpg","lunchbox/img3.jpg","lunchbox/img4.jpg","lunchbox/img5.jpg","lunchbox/img6.jpg","lunchbox/img7.jpg","lunchbox/img8.jpg"]

// },


// {
//   "id": "cooking theraphy",
//    "title": "cookingtherapy.title",
//    "description": "cookingtherapy.description",
//    "bgImages": [ "cookingastherapy/img1.jpg","cookingastherapy/img2.jpg","cookingastherapy/img3.jpg","cookingastherapy/img4.jpg","cookingastherapy/img5.jpg"]

// },

// {
//   "id": "cooking love",
//    "title": "cookinglove.title",
//    "description": "cookinglove.description",
//          "bgImages": [ "emotionalpowerofcooking/img1.jpg","emotionalpowerofcooking/img2.jpg","emotionalpowerofcooking/img3.jpg","emotionalpowerofcooking/img4.jpg","emotionalpowerofcooking/img5.jpg","emotionalpowerofcooking/img6.jpg","emotionalpowerofcooking/img7.jpg","emotionalpowerofcooking/img8.jpg"]

// },

// {
//   "id": "Food memories",
//    "title": "foodmemories.title",
//    "description": "foodmemories.description",
//       "bgImages": [ "foodandmemory/img3.jpg","foodandmemory/img6.jpg","foodandmemory/img8.jpg","foodandmemory/img12.jpg","foodandmemory/img15.jpg"] 

// },



// // {
// //   "id": "Food Cuisines and Economics: How What We Eat Shapes the World",
// //    "title": "therapy.title",
// //    "description": "therapy.description"
// // },

























// ]
// return (
//   <div className=" bg-gray-700"
  
  
//   //  style={{
//   //       backgroundColor: bgColor,
//   //       fontFamily: fontName,
//   //       fontSize: `${fontSize}px`,
//   //     }}
      
//       >


    
//       <div>
//   {(() => {
//   const item = sections[activeSection];

//   return (
//     <div className="relative rounded-2xl sm:p-0 p-6 bg-black shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden mt-4  md:mt-10 ml-0 md:ml-10 mb-5 md:mb-20">

//       <div
//   key={item.id}
//   id={item.id}
//   className="
//     relative
//     w-full
//     flex
//     items-start
//     sm:items-center
//     justify-center

//     px-3
//     py-6

//     sm:px-5
//     sm:py-8

//     md:p-10

//     min-h-[70vh]
//     sm:min-h-[60vh]
//     md:min-h-screen

//     bg-cover
//     bg-center
//     bg-no-repeat

//     overflow-hidden

//     transition-all
//     duration-700
//     ease-in-out
//   "
//   style={{
//     backgroundImage: `url(${
//       speakingId === item.id
//         ? item.bgImages?.[currentBg % item.bgImages.length]
//         : item.bgImages?.[0] || "/sample.jpg"
//     })`,
//     backgroundPosition: "center center",
//   }}
// >

















// {/* 
// <div
//   key={item.id} 
//   id={item.id}
//   className="
//     relative
//     w-full
//     flex
//     items-start
//     sm:items-center
//     justify-center

//     px-3
//     py-6

//     sm:px-5
//     sm:py-8

//     md:p-10

//     min-h-[70vh]
//     sm:min-h-[60vh]
//     md:min-h-screen

//     overflow-hidden

//     transition-all
//     duration-700
//     ease-in-out
//   "
// > */}
//   {/* =========================
//       MOBILE BACKGROUND
//       < 640px
//   ========================== */}
//   {/* <div
//     className="
//       absolute
//       inset-0
//       z-0
//       bg-cover
//       bg-center
//       bg-no-repeat
//       sm:hidden
//       transition-all
//       duration-700
//       ease-in-out
//     "
//     style={{
//       backgroundImage: `url(${
//         speakingId === item.id
//           ? item.mobbgImages?.[
//               currentBg % (item.mobbgImages?.length || 1)
//             ]
//           : item.mobbgImages?.[0] || "/sample.jpg"
//       })`,
//       backgroundPosition: "center center",
//     }}
//   /> */}

//   {/* =========================
//       DESKTOP BACKGROUND
//       >= 640px
//   ========================== */}
//   {/* <div
//     className="
//       absolute
//       inset-0
//       z-0
//       hidden
//       sm:block
//       bg-cover
//       bg-center
//       bg-no-repeat
//       transition-all
//       duration-700
//       ease-in-out
//     "
//     style={{
//       backgroundImage: `url(${
//         speakingId === item.id
//           ? item.bgImages?.[
//               currentBg % (item.bgImages?.length || 1)
//             ]
//           : item.bgImages?.[0] || "/sample.jpg"
//       })`,
//       backgroundPosition: "center center",
//     }}
//   /> */}



// {item.title && (
//   <>
//     {/* Overlay */}
//     <div className="absolute inset-0 bg-white/20" />


//     {/* Content */}
//     {/* <div
//       className="
//         relative z-10
//         max-w-6xl
//         w-full
//         bg-black/50
//         p-1
//         md:p-6
      
//         rounded-lg
//         flex flex-col
//           h-dvh
//          sm:h-[95vh]

//       "
//     > */}









// <div
//   className="
//     relative z-10
//     max-w-6xl
//     w-full
//     bg-black/50
//     p-1 md:p-6
//     rounded-lg
//     flex flex-col
//     items-center
//     justify-evenly
// text-justify [text-justify:inter-word]
//     h-dvh
//     sm:h-[95vh]
//   "
// >












//       {/* Header */}
//       <div
//         className="
//           flex flex-col 
//           lg:flex-row
//           items-center
//           justify-between
          
//           mb-4
//           shrink-0
//         "
//       >

//         <h2 className="text-2xl font-bold mr-8"
//          style={{
//           color:"#7FE9DE"
//          }
          
//          }>
//           {intl.formatMessage({ id: item.title })}
//         </h2>


//         <button
//           onClick={() => {
//             if (speakingId === item.id) {
//               // isPaused ? resumeSpeech() : pauseSpeech();
//             } else {
//               // speakText(item.description, item.id);


//               const translatedDescription = intl.formatMessage({
//     id: item.description,
// });

// speakText(translatedDescription, item.id);
//             }
//           }}
//           className="
//             px-4 py-2
//             bg-black
//             text-white
//             rounded
//           "
//         >
//           {speakingId === item.id
//             ? isPaused
//               ? `Listen (${formatTime(remainingTime)})`
//               : `⏸ Pause (${formatTime(remainingTime)})`
//             : "🔊 Listen"}
//         </button>

//       </div>


//       {/* Text */}
//     <div
//   ref={(el) => (containerRefs.current[item.id] = el)}
//   className="
//     flex-1
//     overflow-y-auto
//     pr-3
//     hide-scrollbar
//     text-gray-900
    
//   "
// >
//  <p
// //   style={{
// //     fontFamily: "Merriweather",
// //     // fontFamily: 'Poppins', 
// //     fontSize: "1.5rem",

// //     sm:fontSize:16px,
// //     fontWeight: 800,
// //     lineHeight: "2.2rem",
// //     // color: "#BDB2FF",
// //     //  color: "#F2EAD3",
// // //  color: "#7FE9DE",

// //  color: "#FBF6EE",
 
    
    
// //   }}

// className="food-title"
// >
 

//     {intl.formatMessage({ id: item.description })}
//   </p>
// </div>
//     </div>
//   </>
// )}


//         {/* Previous */}
//   <button
//   type="button"
//   onTouchStart={(e) => e.stopPropagation()}
//   onClick={() =>
//     setActiveSection((prev) =>
//       prev === 0 ? sections.length - 1 : prev - 1
//     )
//   }
//   className="
//     absolute left-3 sm:left-5
//     top-1/2 -translate-y-1/2
//     z-50
//     w-11 h-11 sm:w-20 sm:h-20
//     flex items-center justify-center
//     rounded-full
//     bg-black/70
//     text-white
//     shadow-lg
//     backdrop-blur-sm
//     transition-all duration-200
//     active:scale-90
//     hover:bg-black
//     hover:scale-110
//     animate-pulse
//     touch-manipulation
//   "
//   aria-label="Previous section"
// >
//   <span className="text-2xl font-light transition-transform duration-200 active:-translate-x-1">
//     ‹
//   </span>
// </button>



//         {/* Next */}
// <button
//   type="button"
//   onTouchStart={(e) => e.stopPropagation()}
//   onClick={() => {
//     console.log("button clicked");
//     setActiveSection((prev) => (prev + 1) % sections.length);
//   }}
//   className="
//     absolute right-3 sm:right-5
//     top-1/2 -translate-y-1/2
//     z-50
//     w-15 h-15 sm:w-20 sm:h-20
//     flex items-center justify-center
//     rounded-full
//     bg-black
//     text-white
//     shadow-lg
//     backdrop-blur-sm
//     transition-all duration-200
//     active:scale-90
//     hover:bg-black
//     hover:scale-110
//     animate-pulse
//     touch-manipulation
//   "
//   aria-label="Next section"
// >
//   <span className="text-2xl font-light transition-transform duration-200 active:translate-x-1">
//     ›  Play
//   </span>
// </button>


//         {/* Dots */}
//         <div
//           className="
//             absolute bottom-5
//             flex gap-2
//           "
//         >
//           {sections.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveSection(index)}
//               className={`
//                 w-3 h-3 rounded-full
//                 ${
//                   activeSection === index
//                   ? "bg-black"
//                   : "bg-gray-400"
//                 }
//               `}
//             />
//           ))}
//         </div>


//       </div>

//     </div>
//   );

// })()}
//       </div>
    
//     </div>
  
// );
// }
// export default FoodStory;




// ============================================================
// REFS
// =======


// import { useTranslation } from "react-i18next";
import React, { useState, useRef, useEffect } from "react";
// import { useMemo } from "react";

import { useIntl } from "react-intl";





export const FoodStory = ({locale}) => {
 const intl = useIntl();
console.log("locale",locale)
  const containerRefs = useRef({});
const [activeSection, setActiveSection] = useState(0);
  const [speakingId, setSpeakingId] = useState(null);
  const [remainingTime, setRemainingTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

// const [currentWordIndex, setCurrentWordIndex] = useState(-1);


const [currentBg, setCurrentBg] = useState(0);

const imageInterval = useRef(null);



// const [spokenWords, setSpokenWords] = useState([]);

//  const params = useMemo(
//     () => new URLSearchParams(window.location.search),
//     []
//   );

  // const bgColor = params.get("bgColor") || "#374151";
  // const theme = params.get("theme") || "#2196F3";
  // const fontName = params.get("fontName") || "Arial";
  // const fontSize = params.get("fontSize") || "16";
let speechLocale;

if (locale === "en") {
  speechLocale = "en-US";
} else if (locale === "fr") {
  speechLocale = "fr-FR";
} else if (locale === "es") {
  speechLocale = "es-ES";
} else if (locale === "hi") {
  speechLocale = "hi-IN";
} else if (locale === "ta") {
  speechLocale = "ta-IN";
} else {
  speechLocale = "en-US"; // fallback
}

  const timerRef = useRef(null);


useEffect(() => {
  if (!speakingId || isPaused) return;

  const interval = setInterval(() => {
    const container = containerRefs.current[speakingId];

    if (container) {
      container.scrollBy({
        top: 100,
        behavior: "smooth",
      });
    }
  }, 20000);

  return () => clearInterval(interval);
}, [speakingId, isPaused]);

  const speakText = (text, id) => {
  window.speechSynthesis.cancel();



   

  const utterance = new SpeechSynthesisUtterance(text);


  speechSynthesis.speak(utterance);
  const speech = new SpeechSynthesisUtterance(text);

  speech.lang =  speechLocale;
  speech.rate = 1;

  // Highlight current word
  // speech.onboundary = (event) => {
  //   if (event.name === "word") {
  //     const words = text.substring(0, event.charIndex).split(" ");
  //     setCurrentWordIndex(words.length - 1);
  //   }
  // };


  
  const words = text.split(" ").length;
  const wordsPerSecond = 2.5;
  const duration = Math.ceil(words / wordsPerSecond);

  const section = sections.find((item) => item.id === id);

  // setSelectedSection(section);
  setCurrentBg(0);
  setSpeakingId(id);
  setRemainingTime(duration);
  setIsPaused(false);

  clearInterval(timerRef.current);
  timerRef.current = setInterval(() => {
    setRemainingTime((prev) => {
      if (prev <= 1) {
        clearInterval(timerRef.current);
        return 0;
      }
      return prev - 1;
    });
  }, 1000);

  imageInterval.current = setInterval(() => {
  setCurrentBg(prev =>
    (prev + 1) % section.bgImages.length
  );
  }, 40000);

//   speech.onend = () => {
//     clearInterval(timerRef.current);
//     clearInterval(imageInterval.current);

//     setSpeakingId(null);
//     setRemainingTime(0);
//     setIsPaused(false);
//     setCurrentWordIndex(-1);
//   };


speech.onend = () => {
  clearInterval(timerRef.current);
  clearInterval(imageInterval.current);

  setSpeakingId(null);
  setRemainingTime(0);
  // setCurrentWordIndex(-1);
  setIsPaused(false);
console.log("moving to next section")
  // Move to next section
  setActiveSection((prev) => (prev + 1) % sections.length);
};
  window.speechSynthesis.speak(speech);
};
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
   };




 const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;

    const interval = setInterval(() => {
      if (!container) return;

      container.scrollBy({
        top: 50, // pixels to scroll each interval
        behavior: "smooth",
      });

      // Reset when reaching bottom
      if (
        container.scrollTop + container.clientHeight >=
        container.scrollHeight
      ) {
        container.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }, 10000); // every 2 seconds

    return () => clearInterval(interval);
  }, []);










//     const getWordBoundaries = (text) => {
//   const regex = /\S+/g;
//   const boundaries = [];

//   let match;
//   while ((match = regex.exec(text)) !== null) {
//     boundaries.push({
//       word: match[0],
//       start: match.index,
//       end: match.index + match[0].length,
//     });
//   }

//   return boundaries;
// };
     const sections = [

            { id: "intro", bgImages: [ "foodstories.png"] },


           {id: "intro",title: "intro.title", description: "intro.description" , "bgImages": [ "intro1/img1.jpg","intro1/img2.jpg","intro1/img3.jpg","intro1/img4.jpg","intro1/img5.jpg"] },
   
         {
  "id": "Mindful eating",
   "title": "mindfuleating.title",
   "description": "mindfuleating.description",
   "bgImages": [ "foodexperience/img3.jpg","foodexperience/img6.jpg","foodexperience/img8.jpg","foodexperience/img12.jpg","foodexperience/img15.jpg"] 
},
           {id: "The Evolution of Food: A Journey Through Human History",title: "evolution.title",description: "evolution.description", "bgImages": [ "evoloffood/img9.jpg","evoloffood/img2.jpg","evoloffood/img10.jpg","evoloffood/img1.webp" ,"evoloffood/img10.jpg","evoloffood/img7.jpeg","evoloffood/images8.jpg","evoloffood/img2.jpeg","evoloffood/images3.jpg","evoloffood/img13.jpeg","evoloffood/images14.jpg"] },

{
  "id": "the-neolithic-revolution-the-beginning-of-our-food-journey",
  "title": "neo.title",
  "description": "neo.description",
  "bgImages": [ "civiliz/img1.jpg","civiliz/img2.jpg","civiliz/img3.jpg","civiliz/img4.jpg","civiliz/img5.jpg"] 
},





   {
  "id": "How Food Became an Important Part of Civilizations",
  "title": "civilization.title","description": "civilization.description",
    "bgImages": [ "civiliz/img6.jpg","civiliz/img7.jpg","civiliz/img8.jpg","civiliz/img9.jpg","civiliz/img10.jpg"] 

},




{
  "id": "the-need-of-the-industrial-revolution",
  "title": "revo.title",
  "description": "revo.description",
    "bgImages": [ "indus/img1.jpg","indus/img2.jpg","indus/img3.jpg","indus/img4.jpg","indus/img5.jpg"] 

},

      {
  "id": "industrial-revolution",
  "title": "revo1.title",
  "description": "revo1.description",
  "bgImages": [ "indus/img6.jpg","indus/img7.jpg","indus/img8.jpg","indus/img9.jpg","indus/img10.jpg"] 

},
{
  "id": "The Columbian Exchange: The Journey That Transformed the World’s Food",
  "title": "columbian.title",
  "description":"columbian.description",
        "bgImages": [ "columbian/img3.jpg","columbian/img6.jpg","columbian/img8.jpg","columbian/img12.jpg","columbian/img15.jpg"] 

},
{
  "id": "The Story and History of Vitamins and Minerals",
  "title": "vit.title",
  "description": "vit.description",
      "bgImages": [ "storyofvitamins/img3.jpg","storyofvitamins/img6.jpg","storyofvitamins/img8.jpg","storyofvitamins/img12.jpg","storyofvitamins/img15.jpg"] 

  
},
{
  "id": "Understanding Food Labels: What They Really Mean",
  "title": "label.title",
  "description": "label.description",
      "bgImages": [ "  foodlabel/img3.jpg","  foodlabel/img6.jpg","  foodlabel/img8.jpg","  foodlabel/img12.jpg","  foodlabel/img15.jpg"] 
},
{
  "id": "cooking-and-kitchens",
  "title": "cooking.title",
  "description":"cooking.description" ,
    "bgImages": [ "cookingandkitchens/img3.jpg","cookingandkitchens/img6.jpg","cookingandkitchens/img8.jpg","cookingandkitchens/img12.jpg","cookingandkitchens/img15.jpg"] 

},
      { "id": "century20", 
        "title": "travel.title",

         "description": "travel.description",

                 "bgImages": [ "foodandtravel/img3.jpg","foodandtravel/img6.jpg","foodandtravel/img8.jpg","foodandtravel/img12.jpg","foodandtravel/img15.jpg"] 

      },
      
      { "id": "connection",
         "title": "season.title", 
        "description": "season.description",

       "bgImages": [ "seasonal/img1.jpg","seasonal/img2.jpg","seasonal/img3.jpg","seasonal/img4.jpg","seasonal/img5.jpg"] 


      },
       {"id":"Future of Food",
        "title":"future.title" ,
         "description":"future.description",
         "bgImages": [ "futureoffood/img1.jpg","futureoffood/img2.jpg","futureoffood/img3.jpg","futureoffood/img4.jpg","futureoffood/img5.jpg"] 

       },
// {
//   "id": "Food and Geography: How the Earth Shapes What We Eat",
//   "title": "eco.title", 
//   "description": "eco.description",
//   "bgImages": [ "foodandeconomics/img1.jpg","foodandeconomics/img2.jpg","foodandeconomics/img3.jpg","foodandeconomics/img4.jpg","foodandeconomics/img5.jpg"] 

// },







// {
//   "id": "Food and Travel: How the Journey of Food Shaped Hospitality",
//   "title": "foodtravel.title", 
//   "description": "foodtravel.description",

// },


// {
//   "id": "Seasonal Eating: How Food Connects With Nature and Science","title": "Seasonal Eating: How Food Connects With Nature and Science", "description": "Have you ever noticed how certain foods appear only during specific times of the year? The refreshing taste of watermelon in summer, warming soups during winter, or fresh leafy greens in spring are not just cultural traditions—they are part of a natural connection between food, seasons, and human health. For centuries, people have followed seasonal eating patterns by consuming foods that grow naturally at different times of the year. This practice reflects a deep understanding of nature, agriculture, and the body's changing nutritional needs.\n\nFood has always been influenced by the environment around us. Before modern refrigeration and global transportation, people depended entirely on locally available seasonal foods. They ate what the land naturally provided, adapting their diets according to climate, agricultural cycles, and changing health requirements. Today, science continues to support this connection, showing that seasonal foods are often fresher, more nutrient-rich, and better suited to the body's needs.\n\nEach season brings different challenges for the human body, and nature provides foods that help maintain balance. During summer, high temperatures lead to increased sweating and the loss of water and minerals. Naturally available cooling foods such as watermelon, cucumber, coconut water, and other hydrating fruits help maintain fluid balance, regulate body temperature, and provide essential electrolytes needed to prevent dehydration.\n\nWinter creates a different nutritional demand. As temperatures drop, the body requires more energy to maintain warmth, increasing the need for nutrient-dense foods. Traditional winter diets often include nuts, seeds, ghee, and root vegetables such as carrots and sweet potatoes. These foods provide healthy fats, carbohydrates, and minerals that support energy production and help the body maintain its internal temperature.\n\nThe monsoon season brings increased humidity and a greater risk of infections. During this period, digestion may become more sensitive, making freshly prepared and easily digestible foods especially important. Ingredients such as ginger, turmeric, garlic, and other spices have traditionally been used during rainy seasons because of their beneficial properties. Warm soups, herbal drinks, and cooked meals help support digestion and immunity during this time.\n\nSpring represents a season of renewal and transition. After the heavier foods commonly consumed during winter, the body benefits from lighter, nutrient-rich foods such as leafy greens, sprouts, and fresh fruits. These foods provide fiber, vitamins, and antioxidants that support digestion and overall wellness. Autumn acts as a bridge between summer and winter, encouraging a balanced diet that helps the body gradually adapt to changing temperatures.\n\nThe science behind seasonal eating is closely connected to plant biology. Plants grow according to environmental factors such as sunlight, temperature, soil conditions, and water availability. Through processes like photosynthesis, plants produce nutrients during their natural growing cycles. This is why certain foods thrive in specific seasons—mangoes grow best in warmer climates, while crops such as wheat prefer cooler conditions.\n\nSeasonal eating is also connected to the body's internal biological clock, known as the circadian rhythm. This system regulates important functions such as sleep, digestion, and metabolism. Changes in daylight and temperature throughout the year influence these rhythms. Eating foods that match seasonal conditions helps the body adapt naturally, such as choosing lighter meals during hot weather and more energy-rich foods during colder months.\n\nChoosing seasonal foods also supports the immune system. Each season brings different health concerns, from dehydration in summer to infections during monsoon and respiratory problems in winter. Foods naturally available during these periods often contain nutrients, antioxidants, and protective compounds that help the body respond to seasonal challenges.\n\nBeyond nutrition, seasonal eating supports environmental sustainability. Food grown during its natural season usually requires fewer artificial inputs, less energy for storage, and reduced processing. Supporting local seasonal produce helps farmers, reduces transportation impact, and encourages a more sustainable food system.\n\nModern lifestyles have changed the way people access food. Refrigeration, international trade, and advanced farming methods allow almost every food to be available throughout the year. While this convenience has advantages, it can sometimes reduce freshness, increase dependence on processed foods, and disconnect people from natural food cycles.\n\nUnderstanding the relationship between food and seasons helps us appreciate that eating is not only about satisfying hunger—it is about maintaining balance with nature. From cooling foods that refresh the body in summer to warming foods that provide energy in winter, every season offers unique nutritional benefits.\n\nSeasonal eating is a reminder that nature has its own rhythm, and our bodies are designed to follow it. By choosing foods that grow naturally at the right time, we can support our health, protect the environment, and reconnect with the traditions that have guided human nutrition for generations."
// },


{
  "id": "Food Cuisines and Economics: How What We Eat Shapes the World",
   "title": "eco.title",
   "description": "eco.description",
     "bgImages": ["foodsandeconomics/img1.jpg","foodsandeconomics/img2.jpg","foodsandeconomics/img3.jpg","foodsandeconomics/img4.jpg","foodsandeconomics/img5.jpg"] 

},
// {
//   "id": "The Emotional Power of Cooking: How Food Becomes an Expression of Love", 
//   "emotion.title": "The Emotional Power of Cooking: How Food Becomes an Expression of Love", 
//   "emotion.description": "Have you ever noticed how a simple home-cooked meal can feel more special than an expensive restaurant dish? The reason is not only the flavor—it is the emotion, effort, and care behind it. Cooking for someone is one of the most meaningful ways to express affection because every ingredient carries a little piece of the person who prepared it.\n\nFood has always been more than just nourishment. Across cultures and generations, cooking has been a way of showing love, creating comfort, and strengthening relationships. A parent preparing a child’s favorite meal, a friend baking a cake for a celebration, or someone making a warm bowl of soup for a loved one are all examples of how food can communicate feelings that words sometimes cannot express.\n\nWhen we cook for someone, we give more than a meal—we give our time, attention, and thoughtfulness. From choosing ingredients to understanding personal preferences and adding special touches, every step reflects care. A dish becomes meaningful because it is created with another person’s happiness in mind. The emotional value of a meal often comes not from its complexity or cost, but from the intention and love behind it.\n\nCooking also has the unique ability to provide emotional comfort. A familiar recipe can bring back memories of childhood, family gatherings, and special moments. The aroma of a favorite dish can create a feeling of home and belonging, even when we are far away. Food connects with our emotions because it is closely tied to memories, traditions, and personal experiences.\n\nPreparing food for someone is also a way of showing that we understand and appreciate them. Remembering someone’s favorite flavors, adjusting a recipe to suit their needs, or recreating a dish connected to their memories sends a powerful message: “You are important to me.” These small acts of attention often create stronger emotional bonds than grand gestures.\n\nShared meals have always been central to human connection. Families gather around the dining table to share stories, celebrations, and everyday moments. Friends reconnect over meals, couples create memories while cooking together, and communities come together through food traditions. The kitchen often becomes more than a place for preparation—it becomes a space where relationships grow.\n\nCooking also helps preserve history and identity. Family recipes, traditional dishes, and cultural cooking methods carry stories from one generation to the next. A grandmother’s recipe, a festival dish, or a special family spice blend represents more than ingredients—it represents memories, heritage, and the continuation of love across generations.\n\nThe emotional power of cooking extends beyond personal relationships. Sharing homemade food with neighbors, preparing meals for those in need, or offering food during difficult times are acts of kindness that provide comfort and connection. A simple meal can offer not only physical nourishment but also a sense of care, dignity, and belonging.\n\nWhat makes homemade food special are the invisible ingredients that cannot be measured—time, effort, patience, and love. Even the simplest dish can become unforgettable when it is prepared with genuine care.\n\nCooking for someone is ultimately an expression of love through action. Every meal prepared with kindness tells a story of connection and reminds us that food has the power to bring people closer together.\n\nWhen we cook for someone, we do not just prepare food—we create a moment of love, warmth, and connection."
// },

// {
//   "id": "Cooking as Therapy: Finding Calm, Creativity, and Connection in the Kitchen",
//   "title": "therapy.title",
//   "description": "therapy.description"
// },




























{
  "id": "lunchbox",
   "title": "lunchbox.title",
   "description": "lunchbox.description",
      "bgImages": [ "lunchbox/img1.jpg","lunchbox/img2.jpg","lunchbox/img3.jpg","lunchbox/img4.jpg","lunchbox/img5.jpg","lunchbox/img6.jpg","lunchbox/img7.jpg","lunchbox/img8.jpg"]

},


{
  "id": "cooking theraphy",
   "title": "cookingtherapy.title",
   "description": "cookingtherapy.description",
   "bgImages": [ "cookingastherapy/img1.jpg","cookingastherapy/img2.jpg","cookingastherapy/img3.jpg","cookingastherapy/img4.jpg","cookingastherapy/img5.jpg"]

},

{
  "id": "cooking love",
   "title": "cookinglove.title",
   "description": "cookinglove.description",
         "bgImages": [ "emotionalpowerofcooking/img1.jpg","emotionalpowerofcooking/img2.jpg","emotionalpowerofcooking/img3.jpg","emotionalpowerofcooking/img4.jpg","emotionalpowerofcooking/img5.jpg","emotionalpowerofcooking/img6.jpg","emotionalpowerofcooking/img7.jpg","emotionalpowerofcooking/img8.jpg"]

},

{
  "id": "Food memories",
   "title": "foodmemories.title",
   "description": "foodmemories.description",
      "bgImages": [ "foodandmemory/img3.jpg","foodandmemory/img6.jpg","foodandmemory/img8.jpg","foodandmemory/img12.jpg","foodandmemory/img15.jpg"] 

},



// {
//   "id": "Food Cuisines and Economics: How What We Eat Shapes the World",
//    "title": "therapy.title",
//    "description": "therapy.description"
// },

























]
return (
  <div className=" bg-gray-700"
  
  
  //  style={{
  //       backgroundColor: bgColor,
  //       fontFamily: fontName,
  //       fontSize: `${fontSize}px`,
  //     }}
      
      >


    
      <div>
  {(() => {
  const item = sections[activeSection];

  return (
    <div className="relative rounded-2xl sm:p-0 p-6 bg-black shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden mt-4  md:mt-10 ml-0 md:ml-10 mb-5 md:mb-20">

      <div
  key={item.id}
  id={item.id}
  className="
    relative
    w-full
    flex
    items-start
    sm:items-center
    justify-center

    px-3
    py-6

    sm:px-5
    sm:py-8

    md:p-10

    min-h-[70vh]
    sm:min-h-[60vh]
    md:min-h-screen

    bg-cover
    bg-center
    bg-no-repeat

    overflow-hidden

    transition-all
    duration-700
    ease-in-out
  "
  style={{
    backgroundImage: `url(${
      speakingId === item.id
        ? item.bgImages?.[currentBg % item.bgImages.length]
        : item.bgImages?.[0] || "/sample.jpg"
    })`,
    backgroundPosition: "center center",
  }}
>



{item.title && (
  <>
    {/* Overlay */}
    <div className="absolute inset-0 bg-white/20" />


    {/* Content */}
    <div
      className="
        relative z-10
        max-w-6xl
        w-full
        bg-black/50
        p-0
        md:p-6

        rounded-lg
        flex flex-col
          h-dvh
         sm:h-[95vh]

      "
    >

      {/* Header */}
      <div
        className="
          flex flex-col 
          lg:flex-row
          items-center
          justify-between
          mb-4
          shrink-0
        "
      >

        <h2 className="text-2xl font-bold"
         style={{
          color:"#7FE9DE"
         }
          
         }>
          {intl.formatMessage({ id: item.title })}
        </h2>


        <button
          onClick={() => {
            if (speakingId === item.id) {
              // isPaused ? resumeSpeech() : pauseSpeech();
            } else {
              // speakText(item.description, item.id);


              const translatedDescription = intl.formatMessage({
    id: item.description,
});

speakText(translatedDescription, item.id);
            }
          }}
          className="
            px-4 py-2
            bg-black
            text-white
            rounded
          "
        >
          {speakingId === item.id
            ? isPaused
              ? `Listen (${formatTime(remainingTime)})`
              : `⏸ Pause (${formatTime(remainingTime)})`
            : "🔊 Listen"}
        </button>

      </div>


      {/* Text */}
    <div
  ref={(el) => (containerRefs.current[item.id] = el)}
  className="
    flex-1
    overflow-y-auto
    pr-3
    hide-scrollbar
    text-gray-900
    
  "
>
 <p
  style={{
    fontFamily: "Merriweather",
    fontSize: "1.5rem",
    fontWeight: 800,
    lineHeight: "2.2rem",
    // color: "#BDB2FF",
    //  color: "#F2EAD3",
//  color: "#7FE9DE",

 color: "#FBF6EE",
 
    
    
  }}
>
 

    {intl.formatMessage({ id: item.description })}
  </p>
</div>
    </div>
  </>
)}


        {/* Previous */}
  <button
  type="button"
  onTouchStart={(e) => e.stopPropagation()}
  onClick={() =>
    setActiveSection((prev) =>
      prev === 0 ? sections.length - 1 : prev - 1
    )
  }
  className="
    absolute left-3 sm:left-5
    top-1/2 -translate-y-1/2
    z-50
    w-11 h-11 sm:w-12 sm:h-12
    flex items-center justify-center
    rounded-full
    bg-black/70
    text-white
    shadow-lg
    backdrop-blur-sm
    transition-all duration-200
    active:scale-90
    hover:bg-black
    hover:scale-110
    animate-pulse
    touch-manipulation
  "
  aria-label="Previous section"
>
  <span className="text-2xl font-light transition-transform duration-200 active:-translate-x-1">
    ‹
  </span>
</button>



        {/* Next */}
<button
  type="button"
  onTouchStart={(e) => e.stopPropagation()}
  onClick={() => {
    console.log("button clicked");
    setActiveSection((prev) => (prev + 1) % sections.length);
  }}
  className="
    absolute right-3 sm:right-5
    top-1/2 -translate-y-1/2
    z-50
    w-11 h-11 sm:w-12 sm:h-12
    flex items-center justify-center
    rounded-full
    bg-black/70
    text-white
    shadow-lg
    backdrop-blur-sm
    transition-all duration-200
    active:scale-90
    hover:bg-black
    hover:scale-110
    animate-pulse
    touch-manipulation
  "
  aria-label="Next section"
>
  <span className="text-2xl font-light transition-transform duration-200 active:translate-x-1">
    ›
  </span>
</button>


        {/* Dots */}
        <div
          className="
            absolute bottom-5
            flex gap-2
          "
        >
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSection(index)}
              className={`
                w-3 h-3 rounded-full
                ${
                  activeSection === index
                  ? "bg-black"
                  : "bg-gray-400"
                }
              `}
            />
          ))}
        </div>


      </div>

    </div>
  );

})()}
      </div>
    
    </div>
  
);
}
export default FoodStory;