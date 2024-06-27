import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartdata = useSelector((store) => store.cartReducer.cart);
  console.log("cartfromstore", cartdata);

  return (
    <>
      {cartdata.map((item) => (
        <div className="md:flex mt-8 md:-mx-4 w-1/2 shadow-lg shadow-indigo-500/40">
          <div className="h-92 md:mx-4 rounded-md bg-cover bg-center md:w-1/2">
            <div className="flex items-center h-full">
              <div className="px-10 max-w-xl">
                <img className="h-[10rem]" src={item.image} alt="pic" />
                <p className="mt-2 text-black text-2xl">
                  Price: {item.price} ₹
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-92 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2">
            <div className="bg-opacity-50 flex items-center h-full">
              <div className="px-10 max-w-xl">
                <h2 className="text-3xl text-black font-semibold">
                  {item.title}
                </h2>
                <p className="mt-2 text-black text-2xl">
                  Price: {item.price} ₹
                </p>
                <button className="mt-2 p-1 text-white text-2xl bg-indigo-500 rounded-lg">
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
