import React from "react";

const CartCard = ({ image, title, price, checkout }) => {
  return (
    <div className="flex justify-center">
    <div className="md:flex mt-8 md:-mx-4 w-1/2 shadow-lg shadow-indigo-500/40">
      <div className="h-96 md:mx-4 rounded-md bg-cover bg-center md:w-1/2">
        <div className="flex items-center h-full shadow-lg shadow-cyan-500/50">
          <div className="px-10 max-w-xl">
            <img className="h-[10rem] w-[7rem]" src={image} alt="pic" />
            <div className="w-full">
            <button className="mt-2 text-black text-2xl border-2 w-1/3">-</button>
            <button className="mt-2 text-black text-2xl border-2 w-1/3">1</button>
            <button className="mt-2 text-black text-2xl border-2 w-1/3">+</button>
          </div>
          </div>
         
        </div>
      </div>

      <div className="w-full h-92 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2 flex justify-center">
        <div className="bg-opacity-50 flex items-center h-full">
          <div className="px-10 max-w-xl">
            <h2 className="text-3xl text-black font-semibold">{title}</h2>
            <p className="mt-2 text-black text-2xl">Price: {price} ₹</p>
            <button className="mt-2 p-1 text-white text-2xl bg-indigo-500 rounded-lg">
              {checkout}
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CartCard;
