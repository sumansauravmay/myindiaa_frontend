import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

const Product = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      axios
        .get("https://myindiaa-deployement.onrender.com/products")
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mx-auto px-6">
      <div className="flex justify-center">
        <div class="relative mt-2 rounded-md shadow-sm">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span class="text-black sm:text-sm">
              <FaSearch />
            </span>
          </div>
          <input
            type="text"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="md:flex mt-8 md:-mx-4">
        <div className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2 bg-man-products">
          <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div className="px-10 max-w-xl">
              <h2 className="text-2xl text-white font-semibold">
                Men's Products
              </h2>
              <p className="mt-2 text-gray-400">
                Stylish products are designed for the modern man.
              </p>
              <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                <span>Shop Now</span>
                <svg
                  className="h-5 w-5 mx-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2 bg-women-products">
          <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div className="px-10 max-w-xl">
              <h2 className="text-2xl text-white font-semibold">
                Women's Products
              </h2>
              <p className="mt-2 text-gray-400">
                Stylish products are designed for the modern woman.
              </p>
              <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                <span>Shop Now</span>
                <svg
                  className="h-5 w-5 mx-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-gray-600 text-2xl font-medium">Products</h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {data.map((item) => (
            <div
              className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
              key={item.id}
            >
              <div className="flex items-end justify-end h-56 w-full bg-cover">
                <img src={item.image} alt="pic" />
              </div>
              <div className="px-5 py-3">
                <h3 className="text-gray-700 uppercase">{item.title}</h3>
                <span className="text-gray-500 mt-2">{item.price} Rs</span>
              </div>
              <button className="w-1/2 p-2 rounded bg-blue-600 text-white mx-20 mb-4 hover:bg-green-500 focus:outline-none focus:bg-blue-500">
                See Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
