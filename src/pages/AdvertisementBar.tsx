import React from "react";
import MyCarousel from "../components/cards/MyCarousel";
import img1 from "../assets/images/sri3.jpg";
import img2 from "../assets/images/sri4.jpg";
import img3 from "../assets/images/sri2.jpeg";

const AdvertisementBar = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-6">
      {/* Carousel Section */}
      {/* <div className="w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
                <MyCarousel />
            </div> */}

      {/* Advertisement Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 px-4">
        {[img1, img2, img3].map((img, index) => (
          <div key={index} className="relative group">
            <img
              src={img}
              alt={`Advertisement ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg shadow-md transform transition duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvertisementBar;
