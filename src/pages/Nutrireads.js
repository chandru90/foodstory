// import React, { useState } from "react";
// import { Search } from "lucide-react";

// const posts = [
//   {
//     url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7478068117089415168",
//     height: 400,
//     category: "Weight Loss",
//   },
//   {
//     url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7424754580799913986",
//     height: 400,
//     category: "Nutrition",
//   },
//   {
//     url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7482287604068167680?collapsed=1",
//     height: 400,
//     category: "Fitness",
//   },
//   {
//     url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7481409929808056320",
//     height: 400,
//     category: "Diabetes",
//   },
//   {
//     url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7487373614569324544?collapsed=1",
//     height: 400,
//     category: "Nutrition",
//   },
//   {
//     url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7487732725940908032",
//     height: 400,
//     category: "Heart Health",
//   },

//   {
//     url:"https://www.linkedin.com/embed/feed/update/urn:li:share:7485646387699953666",
//     height: 400,
//     category: "Early Childhood Nutrition",  
// } ,

// {
//     url:"https://www.linkedin.com/embed/feed/update/urn:li:share:7485858500804243457",
//     height: 400,
//     category: "Early Childhood Nutrition",  
// } ,
// {
//     url:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7490374662976090115",
//     height: 400,
//     category: "Early Childhood Nutrition",  
// } ,

// {
//     url:"https://www.linkedin.com/embed/feed/update/urn:li:share:7489361207561318400",
//     height: 400,
//     category: "",  
// },
// {
//     url:"https://www.linkedin.com/embed/feed/update/urn:li:share:7491758823490363393",
//     height: 400,
//     category: "",  
// },
// {
//     url:"https://www.linkedin.com/embed/feed/update/urn:li:share:7489561751517093888",
//     height: 400,
//     category: "",  
// },
// {
//     url:"https://www.linkedin.com/embed/feed/update/urn:li:share:7480342587665612801",
//     height: 400,
//     category: "",  
// },

// {
//     url:"https://www.linkedin.com/embed/feed/update/urn:li:share:7477299859021160449",
//     height: 400,
//     category: "",  
// },

// {
//     url:"https://www.linkedin.com/embed/feed/update/urn:li:share:7477004142268436480",
//     height: 400,
//     category: "",  
// },


// {
//     url:"https://www.linkedin.com/embed/feed/update/urn:li:share:7494984036642119681",
//     height: 400,
//     category: "",  
// },



// {
//     url:"https://www.linkedin.com/embed/feed/update/urn:li:share:7494653710984441856",
//     height: 400,
//     category: "",  
// },



// {
//     url:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7495430704596480000",
//     height: 400,
//     category: "",  
// },


// ]


// const filters = [
//   "All",
//   "Nutrition",
//   "Weight Loss",
//   "Fitness",
//   "Diabetes",
//   "Heart Health",
// ];

// export default function NutriReads() {
//   const [search, setSearch] = useState("");
//   const [selectedFilter, setSelectedFilter] = useState("All");

//   const filteredPosts = posts.filter((post) => {
//     const categoryMatch =
//       selectedFilter === "All" || post.category === selectedFilter;

//     const searchMatch = post.category
//       .toLowerCase()
//       .includes(search.toLowerCase());

//     return categoryMatch && searchMatch;
//   });

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-emerald-50">






// const iframe = document.querySelector("iframe");

// const linkedinDocument =
//   iframe.contentDocument || iframe.contentWindow.document;

// console.log(linkedinDocument.querySelector("body").innerText);

















//       {/* Hero */}
//       <div className="border-b bg-white/70 backdrop-blur">
//         <div className="mx-auto max-w-7xl px-6 py-14 text-center">

//           <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-orange-500 to-amber-500 text-5xl shadow-xl">
//             📚
//           </div>

//           <h1 className="mt-6 text-5xl font-bold text-gray-900">
//             Nutri Reads
//           </h1>

//           <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
//             Explore nutrition tips, healthy recipes, weight management, and
//             science-backed wellness articles from LinkedIn.
//           </p>
//         </div>
//       </div>

//       {/* Sticky Search */}
//       <div className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur">
//         <div className="mx-auto max-w-7xl px-6 py-5">

//           {/* Search */}
//           <div className="relative">

//             <Search
//               size={18}
//               className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//             />

//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search nutrition topics..."
//               className="w-full rounded-full border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
//             />

//           </div>

//           {/* Filter Pills */}
//           <div className="mt-5 flex flex-wrap gap-3">

//             {filters.map((filter) => (
//               <button
//                 key={filter}
//                 onClick={() => setSelectedFilter(filter)}
//                 className={`rounded-full px-5 py-2 text-sm font-medium transition
//                 ${
//                   selectedFilter === filter
//                     ? "bg-orange-500 text-white shadow-lg"
//                     : "bg-gray-100 text-gray-600 hover:bg-orange-100"
//                 }`}
//               >
//                 {filter}
//               </button>
//             ))}

//           </div>
//         </div>
//       </div>

//       {/* Grid */}
//       <div className="mx-auto max-w-7xl px-6 py-10">

//         <div className="mb-8 flex items-center justify-between">
//           <h2 className="text-2xl font-bold text-gray-800">
//             Latest Articles
//           </h2>

//           <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
//             {filteredPosts.length} Articles
//           </span>
//         </div>

//         <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

//           {filteredPosts.map((post, index) => (

//             <div
//               key={index}
//               className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
//             >
//               <div className="flex items-center justify-between bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-4">

//                 <div>
//                   <h3 className="font-semibold text-white">
//                     Nutrition Article #{index + 1}
//                   </h3>

//                   <p className="mt-1 text-sm text-orange-100">
//                     {post.category}
//                   </p>
//                 </div>

//                 <div className="rounded-full bg-white/20 px-3 py-1 text-xs text-white">
//                   LinkedIn
//                 </div>

//               </div>

//               <iframe
//                 src={post.url}
//                 title={`LinkedIn ${index}`}
//                 height={post.height}
//                 className="w-full"
//                 frameBorder="0"
//                 allowFullScreen
//               />
//             </div>

//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }















import { useEffect, useState } from "react";
import axios from "axios";

const Nutriread =()=>{
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        // First check localStorage
        const cached = localStorage.getItem("linkedinposts");

        if (cached) {
          const data = JSON.parse(cached);

          setPosts(data);

          console.log("Loaded from cache:", data);

          return;
        }

        // No cache → request API
        const response = await axios.get(
          "https://recipe-wnrc.onrender.com/linkedin"
        );

        const data = response.data.posts;
console.log("responsed data", response.data.posts)
        // Save to localStorage
        localStorage.setItem(
          "linkedinposts",
          JSON.stringify(data)
        );

        // Set React state
        setPosts(data);

        console.log("Loaded from API:", data);

      } catch (error) {
        console.error(
          "Error fetching posts:",
          error
        );
      }
    };

    loadPosts();
  }, []);

  return (
<div
  style={{
    minHeight: "100vh",
    background:
      "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 45%, #ffffff 100%)",
    padding: "56px 20px 80px",
  }}
>
  <div
    style={{
      maxWidth: "1280px",
      margin: "0 auto",
    }}
  >
    {/* Header */}
    <div
      style={{
        marginBottom: "38px",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      <div>
        {/* Small label */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
            marginBottom: "12px",
            padding: "7px 12px",
            borderRadius: "999px",
            background: "linear-gradient(135deg, #eef2ff, #f5f3ff)",
            border: "1px solid #e0e7ff",
            color: "#4f46e5",
            fontSize: "11px",
            fontWeight: 800,
            letterSpacing: "0.8px",
            textTransform: "uppercase",
          }}
        >
          <span>✦</span>
          Food Stories
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(30px, 5vw, 44px)",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-1.5px",
            color: "#0f172a",
          }}
        >
          Latest Posts
        </h1>

        <p
          style={{
            margin: "12px 0 0",
            maxWidth: "600px",
            color: "#64748b",
            fontSize: "15px",
            lineHeight: 1.7,
          }}
        >
          Discover the latest food stories, nutrition insights, ideas,
          and inspiration from our community.
        </p>
      </div>

      {/* Post count */}
      {posts.length > 0 && (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 15px",
            borderRadius: "12px",
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            boxShadow: "0 4px 14px rgba(15, 23, 42, 0.05)",
            color: "#475569",
            fontSize: "13px",
            fontWeight: 700,
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#22c55e",
              boxShadow: "0 0 0 4px #dcfce7",
            }}
          />
          {posts.length} {posts.length === 1 ? "post" : "posts"}
        </div>
      )}
    </div>

    {/* Posts */}
    {posts.length > 0 && (
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(100%, 330px), 1fr))",
          gap: "28px",
        }}
      >
        {posts.map((post, index) => (
          <article
            key={post.url || index}
            style={{
              position: "relative",
              background: "#ffffff",
              borderRadius: "22px",
              overflow: "hidden",
              border: "1px solid rgba(226, 232, 240, 0.9)",
              boxShadow: "0 8px 30px rgba(15, 23, 42, 0.06)",
              transition:
                "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
              display: "flex",
              flexDirection: "column",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 22px 45px rgba(15, 23, 42, 0.13)";
              e.currentTarget.style.borderColor = "#c7d2fe";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 30px rgba(15, 23, 42, 0.06)";
              e.currentTarget.style.borderColor =
                "rgba(226, 232, 240, 0.9)";
            }}
          >
            {/* Top accent */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background:
                  "linear-gradient(90deg, #4f46e5, #8b5cf6, #ec4899)",
                zIndex: 2,
              }}
            />

            {/* Image */}
            {post.imageUrl ? (
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "230px",
                  overflow: "hidden",
                  background:
                    "linear-gradient(135deg, #e2e8f0, #f8fafc)",
                }}
              >
                <img
                  src={post.imageUrl}
                  alt={post.category || "Food story"}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.07)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />

                {/* Image gradient */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(15,23,42,0.02) 30%, rgba(15,23,42,0.65) 100%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Category on image */}
                <span
                  style={{
                    position: "absolute",
                    left: "16px",
                    bottom: "16px",
                    padding: "7px 11px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(8px)",
                    color: "#3730a3",
                    fontSize: "10px",
                    fontWeight: 800,
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                  }}
                >
                  {post.category || "Food"}
                </span>

                {/* Number */}
                <span
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    width: "34px",
                    height: "34px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    background: "rgba(15,23,42,0.55)",
                    backdropFilter: "blur(8px)",
                    color: "#ffffff",
                    fontSize: "12px",
                    fontWeight: 800,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            ) : (
              <div
                style={{
                  height: "110px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(135deg, #eef2ff, #f5f3ff 50%, #fdf2f8)",
                  color: "#6366f1",
                  fontSize: "32px",
                }}
              >
                🍽️
              </div>
            )}

            {/* Content */}
            <div
              style={{
                padding: "22px",
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}
            >
              {/* Category for cards without image */}
              {!post.imageUrl && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "14px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      padding: "6px 11px",
                      borderRadius: "999px",
                      background: "#eef2ff",
                      color: "#4f46e5",
                      fontSize: "10px",
                      fontWeight: 800,
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                    }}
                  >
                    {post.category || "Food"}
                  </span>

                  <span
                    style={{
                      color: "#cbd5e1",
                      fontSize: "16px",
                      letterSpacing: "2px",
                    }}
                  >
                    •••
                  </span>
                </div>
              )}

              {/* Description */}
              <p
                style={{
                  margin: 0,
                  color: "#1e293b",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  fontWeight: 500,
                  display: "-webkit-box",
                  WebkitLineClamp: 5,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {post.description}
              </p>

              {/* Bottom action */}
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                  borderTop: "1px solid #f1f5f9",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "7px",
                    color: "#94a3b8",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "26px",
                      height: "26px",
                      borderRadius: "8px",
                      background: "#f1f5f9",
                      fontSize: "13px",
                    }}
                  >
                    in
                  </span>
                  LinkedIn
                </div>

                {post.url && (
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${post.category || "post"} on LinkedIn`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "7px",
                      padding: "10px 15px",
                      borderRadius: "11px",
                      background:
                        "linear-gradient(135deg, #4f46e5, #6366f1)",
                      color: "#ffffff",
                      fontSize: "12px",
                      fontWeight: 700,
                      textDecoration: "none",
                      boxShadow: "0 5px 14px rgba(79,70,229,0.22)",
                      transition:
                        "transform 0.2s ease, box-shadow 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 20px rgba(79,70,229,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 5px 14px rgba(79,70,229,0.22)";
                    }}
                  >
                    View post
                    <span style={{ fontSize: "15px" }}>↗</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    )}

    {/* Empty state */}
    {posts.length === 0 && (
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "80px 25px",
          textAlign: "center",
          background: "#ffffff",
          borderRadius: "24px",
          border: "1px solid #e2e8f0",
          boxShadow: "0 12px 35px rgba(15, 23, 42, 0.06)",
        }}
      >
        {/* Decorative background */}
        <div
          style={{
            position: "absolute",
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            background: "#eef2ff",
            filter: "blur(5px)",
            top: "-90px",
            left: "-60px",
            opacity: 0.8,
          }}
        />

        <div
          style={{
            position: "relative",
            width: "72px",
            height: "72px",
            margin: "0 auto 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "22px",
            background:
              "linear-gradient(135deg, #eef2ff, #f5f3ff)",
            fontSize: "34px",
            boxShadow: "0 10px 25px rgba(79,70,229,0.1)",
          }}
        >
          📭
        </div>

        <h3
          style={{
            position: "relative",
            margin: "0 0 8px",
            color: "#0f172a",
            fontSize: "21px",
            fontWeight: 800,
          }}
        >
          No posts yet
        </h3>

        <p
          style={{
            position: "relative",
            maxWidth: "420px",
            margin: "0 auto",
            color: "#64748b",
            fontSize: "14px",
            lineHeight: 1.7,
          }}
        >
          New food stories and insights will appear here as soon as
          they're published.
        </p>
      </div>
    )}
  </div>
</div>
  );
}

export default Nutriread;