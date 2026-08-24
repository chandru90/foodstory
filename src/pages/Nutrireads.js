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
        const cached = localStorage.getItem("cachedata");

        if (cached) {
          const data = JSON.parse(cached);

          setPosts(data);

          console.log("Loaded from cache:", data);

          return;
        }

        // No cache → request API
        const response = await axios.get(
          "http://localhost:3006/linkedin"
        );

        const data = response.data.posts;

        // Save to localStorage
        localStorage.setItem(
          "cachedata",
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
    background: "#f5f7fb",
    padding: "40px 20px",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
    }}
  >
    {/* Header */}
    <div style={{ marginBottom: "28px" }}>
      <h1
        style={{
          margin: 0,
          fontSize: "30px",
          fontWeight: 800,
          color: "#111827",
          letterSpacing: "-0.5px",
        }}
      >
        Latest Posts
      </h1>

      <p
        style={{
          margin: "8px 0 0",
          color: "#6b7280",
          fontSize: "15px",
        }}
      >
        Explore the latest updates and insights
      </p>
    </div>

    {/* Posts */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "24px",
      }}
    >
      {posts.map((post, index) => (
        <article
          key={post.url || index}
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            overflow: "hidden",
            border: "1px solid #e5e7eb",
            boxShadow: "0 4px 16px rgba(15, 23, 42, 0.06)",
            transition:
              "transform 0.25s ease, box-shadow 0.25s ease",
            display: "flex",
            flexDirection: "column",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.boxShadow =
              "0 16px 35px rgba(15, 23, 42, 0.12)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 4px 16px rgba(15, 23, 42, 0.06)";
          }}
        >
          {/* Image */}
          {post.imageUrl ? (
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "210px",
                overflow: "hidden",
                background: "#eef2f7",
              }}
            >
              <img
                src={post.imageUrl}
                alt={post.category || "LinkedIn post"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />

              {/* Image overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.35))",
                  pointerEvents: "none",
                }}
              />
            </div>
          ) : (
            <div
              style={{
                height: "8px",
                background:
                  "linear-gradient(90deg, #4f46e5, #7c3aed)",
              }}
            />
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
            {/* Category */}
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
                  alignItems: "center",
                  padding: "6px 11px",
                  borderRadius: "999px",
                  background: "#eef2ff",
                  color: "#4f46e5",
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.4px",
                }}
              >
                {post.category || "Post"}
              </span>

              <span
                style={{
                  color: "#9ca3af",
                  fontSize: "18px",
                }}
              >
                •••
              </span>
            </div>

            {/* Description */}
            <p
              style={{
                margin: 0,
                color: "#1f2937",
                fontSize: "15px",
                lineHeight: 1.7,
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
                borderTop: "1px solid #f1f5f9",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  color: "#9ca3af",
                }}
              >
                LinkedIn Post
              </span>

              {post.url && (
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "9px 14px",
                    borderRadius: "9px",
                    background: "#4f46e5",
                    color: "#ffffff",
                    fontSize: "13px",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#4338ca";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#4f46e5";
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

    {/* Empty state */}
    {posts.length === 0 && (
      <div
        style={{
          padding: "70px 20px",
          textAlign: "center",
          background: "#ffffff",
          borderRadius: "18px",
          border: "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            fontSize: "42px",
            marginBottom: "12px",
          }}
        >
          📭
        </div>

        <h3
          style={{
            margin: "0 0 6px",
            color: "#111827",
            fontSize: "18px",
          }}
        >
          No posts yet
        </h3>

        <p
          style={{
            margin: 0,
            color: "#6b7280",
            fontSize: "14px",
          }}
        >
          New posts will appear here.
        </p>
      </div>
    )}
  </div>
</div>
  );
}

export default Nutriread;