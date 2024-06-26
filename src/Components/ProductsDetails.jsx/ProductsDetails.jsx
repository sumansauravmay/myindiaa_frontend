import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductsDetails = () => {
  const { product_id } = useParams();
  const [productDetails, setProductDetails] = useState({});

  const getData = () => {
    axios
      .get(`https://myindiaa-deployement.onrender.com/products/${product_id}`)
      .then((res) => {
        console.log(res.data);
        setProductDetails(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, [product_id]);

  return (
    <div className="md:flex mt-8 md:-mx-4">
      <div className="w-full h-92 md:mx-4 rounded-md bg-cover bg-center md:w-1/2 shadow-lg shadow-indigo-500/40">
        <div className="flex items-center h-full">
          <div className="px-10 max-w-xl">
            <img className="h-[32rem]" src={productDetails.image} alt="pic" />
          </div>
        </div>
      </div>

      <div className="w-full h-92 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2 shadow-md shadow-indigo-500/40">
        <div className="bg-opacity-50 flex items-center h-full">
          <div className="px-10 max-w-xl">
            <h2 className="text-3xl text-black font-semibold">
              {productDetails.title}
            </h2>
            <p className="mt-2 text-black text-xl">
              {productDetails.description}
            </p>
            <p className="mt-2 text-black text-lg">
              Category: {productDetails.category}
            </p>
            {/* <p className="mt-2 text-black">Rating: {productDetails.rating.rate}- {productDetails.rating.count}</p> */}
            <p className="mt-2 text-black text-2xl">
              Price: {productDetails.price}
            </p>
            <button className="mt-2 p-1 text-white text-2xl bg-indigo-500 rounded-lg">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
