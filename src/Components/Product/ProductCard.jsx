import React from "react";

const ProductCard = ({ image, title, price, btnval }) => {
  return (
    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
      <div className="flex items-end justify-end h-56 w-full bg-cover">
        <img src={image} alt="pic" />
      </div>
      <div className="px-5 py-3">
        <h3 className="text-gray-700 uppercase">{title}</h3>
        <span className="text-gray-500 mt-2">{price} Rs</span>
      </div>
      <button className="w-1/2 p-2 rounded bg-blue-600 text-white mx-20 mb-4 hover:bg-green-500 focus:outline-none focus:bg-blue-500">
        {btnval}
      </button>
    </div>
  );
};

export default ProductCard;
