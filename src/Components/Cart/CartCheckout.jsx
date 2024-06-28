import React from "react";

const CartCheckout = ({ totalAmount, amount, delivery }) => {
  return (
    <div className="flex justify-center">
      <div className="h-64 md:h-72 sm:h-76 lg:w-1/4 md:w-1/2 sm:w-2/3 mt-10 shadow-lg shadow-indigo-500/40">
        <div className="bg-opacity-50 h-full">
          <div className="mt-5 px-10 max-w-xl flex space-x-32">
            <h5 className="text-xl text-black font-bold">Total Price: </h5>
            <p className="text-black text-xl">{amount}</p>
          </div>
          <div className="mt-5 mb-5 px-10 max-w-xl flex space-x-[80px]">
            <h5 className="text-xl text-black font-bold">Delivery Charge: </h5>
            <p className="text-black text-xl">{delivery}</p>
          </div>
          <hr />
          <div className="mt-5 px-10 max-w-xl flex space-x-[105px]">
            <h5 className="text-xl text-black font-bold">Total Amount: </h5>
            <p className="text-black text-xl">{totalAmount}/-</p>
          </div>
          <button className="w-full mt-10 p-1 text-white text-2xl bg-indigo-500 rounded-lg">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
