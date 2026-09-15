import React from "react";

const FooterInstagram = () => {
  const images = [
    "/images/insta1.jpg",
    "/images/insta2.jpg",
    "/images/insta3.jpg",
    "/images/insta4.jpg",
    "/images/insta5.jpg",
    "/images/insta6.jpg",
  ];

  return (
    <div>
      <h3 className="text-white font-semibold text-lg mb-5">Instagram</h3>

      <div className="grid grid-cols-3 gap-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="insta"
            className="w-full h-20 object-cover rounded-md hover:scale-105 transition cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default FooterInstagram;
