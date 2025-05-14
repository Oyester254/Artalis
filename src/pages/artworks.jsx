// import { boxItems } from "../constants/boxItems";
// import React, { useState } from "react";
// function Artworks() {
//   const [selectedItem, setselectedItem] = useState(null);
//   return (
//     <section
//       id="drawing-start"
//       className="max-w-screen-full m-0 p-0  bg-green-100 min-h-screen text-center "
//     >
//       <div className="bg-green-100 mt-0  ">
//         <h2 className="text-3xl font-bold pt-10"> Drawings</h2>
//         <div
//           id="default-drawing"
//           className="grid place-items-center mx-auto md:grid-cols-3 md:mx-20 "
//         >
//           {boxItems.map((item) => (
//             <div className="w-[320px] h-[220px] my-10 bg-pink-100 shadow-md overflow-hidden p-2 ">
//               <img
//                 src={item.image}
//                 alt="Thumbnail"
//                 className=" w-[100%] h-[100%] rounded-[5px] "
//                 onClick={() => setselectedItem(item)}
//               />
//             </div>
//           ))}
//         </div>
//         {/* popup */}
//         {selectedItem && (
//           <div className="fixed top-0 left-0 w-[100%] h-[100%] bg-[rgba(0, 0, 0, 0.6)]  z-50">
//             <div className="relative  bg-white p-4 rounded-lg  w-[70%] max-w-[800px] my-[100px] mx-auto ">
//               <button
//                 className="absolute top-2 right-2 md:text-3xl font-bold text-red-700"
//                 onClick={() => setselectedItem(null)}
//               >
//                 &times;
//               </button>
//               <div className="flex flex-col justify-center items-center md:flex-row m-0">
//                 <img
//                   src={selectedItem.image}
//                   alt="Selected artwork"
//                   className="max-w-full max-h-[80vh] object-contain w-[200px]"
//                 />
//                 <div className="p-2 mx-auto">
//                   <h2 className="font-bold my-2 text-[12px] md:text-[18px] ">
//                     {selectedItem.heading}
//                   </h2>
//                   <p className="p-2 text-center text-[12px] md:text-[16px]">
//                     {selectedItem.popmes}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//       {/* second div */}
//       <div className="bg-green-100 mt-0  ">
//         <h2 className="text-3xl font-bold pt-10"> Drawings</h2>
//         <div
//           id="default-drawing"
//           className="grid place-items-center mx-auto md:grid-cols-3 md:mx-20 "
//         >
//           {boxItems.map((item) => (
//             <div className="w-[320px] h-[220px] my-10 bg-pink-100 shadow-md overflow-hidden p-2 ">
//               <img
//                 src={item.image}
//                 alt="Thumbnail"
//                 className=" w-[100%] h-[100%] rounded-[5px] "
//                 onClick={() => setselectedItem(item)}
//               />
//             </div>
//           ))}
//         </div>
//         {/* popup */}
//         {selectedItem && (
//           <div className="fixed top-0 left-0 w-[100%] h-[100%] bg-[rgba(0, 0, 0, 0.6)]  z-50">
//             <div className="relative  bg-white p-4 rounded-lg  w-[70%] max-w-[800px] my-[100px] mx-auto ">
//               <button
//                 className="absolute top-2 right-2 md:text-3xl font-bold text-red-700"
//                 onClick={() => setselectedItem(null)}
//               >
//                 &times;
//               </button>
//               <div className="flex flex-col justify-center items-center md:flex-row m-0">
//                 <img
//                   src={selectedItem.image}
//                   alt="Selected artwork"
//                   className="max-w-full max-h-[80vh] object-contain w-[200px]"
//                 />
//                 <div className="p-2 mx-auto">
//                   <h2 className="font-bold my-2 text-[12px] md:text-[18px] ">
//                     {selectedItem.heading}
//                   </h2>
//                   <p className="p-2 text-center text-[12px] md:text-[16px]">
//                     {selectedItem.popmes}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// export default Artworks;
// Import React to use JSX
import React from "react";
import { Link } from "react-router-dom";

// Import the reusable section component
import ArtworkSection from "../components/ArtworkSection";

// Import artwork data arrays
import { boxItems } from "../constants/boxItems";
import { paintingItems } from "../constants/paintingItems";
import { graphicsItems } from "../constants/graphicsItems";

// Define main component to render artwork sections
function Artworks() {
  return (
    <section className="max-w-screen-full m-0 p-0 bg-green-100 min-h-screen text-center">
      {/* Render Drawings Section */}
      <ArtworkSection title="Drawings" items={boxItems} />

      {/* Render Paintings Section */}
      <ArtworkSection title="Paintings" items={paintingItems} />
      {/* Render Graphics Section */}
      <ArtworkSection title="Design" items={graphicsItems} />
      <div className="flex items-center justify-center pb-10 ">
        <Link
          to="../contact"
          className="bg-[rgb(1,53,1)] px-4 py-2 no-underline rounded-[5px] text-[18px] transition-colors duration-300 text-white hover:bg-red-500"
        >
          <h3>Contact Us</h3>
        </Link>
      </div>

      {/* You can easily add more sections here using the same component */}
      {/* <ArtworkSection title="Sculptures" items={sculptureItems} /> */}
    </section>
  );
}

// Export main page component for routing or use in App.js
export default Artworks;
