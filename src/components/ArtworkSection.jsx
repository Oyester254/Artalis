// Import React and useState hook to manage component state
import React, { useState } from "react";

// ArtworkSection component accepts props: title and items
const ArtworkSection = ({ title, items }) => {
  // State to hold the selected item for popup modal
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="bg-green-100">
      {/* Display section title */}
      <h2 className="text-2xl  pt-5">{title}</h2>
      
      {/* Create a responsive grid to display artworks */}
      <div className="grid place-items-center mx-auto md:grid-cols-3 md:mx-20">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-[320px] h-[220px] my-5 md:my-10 bg-white shadow-md overflow-hidden p-2"
          >
            {/* Artwork image; clicking it opens the popup */}
            <img
              src={item.image}
              alt="Thumbnail"
              className="w-full h-full rounded-[5px]"
              onClick={() => setSelectedItem(item)}
            />
          </div>
        ))}
      </div>

      {/* Conditional rendering for popup modal */}
      {selectedItem && (
        <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] z-50">
          <div className="relative bg-white p-4 rounded-lg w-[70%] max-w-[800px] my-[100px] mx-auto">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 md:text-3xl font-bold text-red-700"
              onClick={() => setSelectedItem(null)}
            >
              &times;
            </button>

            {/* Flex container for image and text */}
            <div className="flex flex-col justify-center items-center md:flex-row">
              {/* Selected artwork image */}
              <img
                src={selectedItem.image}
                alt="Selected artwork"
                className="max-w-full max-h-[80vh] object-contain w-[200px]"
              />
              {/* Artwork title and description */}
              <div className="p-2 mx-auto">
                <h2 className="font-bold my-2 text-sm md:text-lg">
                  {selectedItem.heading}
                </h2>
                <p className="p-2 text-center text-xs md:text-base">
                  {selectedItem.popmes}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Export the component so it can be used in other files like Artworks.js
export default ArtworkSection;
