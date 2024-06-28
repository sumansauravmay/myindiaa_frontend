import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cart } from "../../Redux/CartReducer/action";
import Loading from "../../Components/Loading";
import { Helmet } from 'react-helmet';

const ProductsDetails = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { product_id } = useParams();
  const [productDetails, setProductDetails] = useState({});

  const getData = () => {
    setLoading(true);
    axios
      .get(`https://myindiaa-deployement.onrender.com/products/${product_id}`)
      .then((res) => {
        // console.log(res.data);
        setProductDetails(res.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, [product_id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
    <Helmet>
        <title>Product Details Page</title>
        <meta name="description" content="Product Details Page description" />
      </Helmet>
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

            <div className="flex space-x-1 text-xl">
              <h5 className="mt-2 text-black">Rating: </h5>
              <h5 className="mt-2 text-black font-semibold">
                {productDetails.rating?.rate}
              </h5>
              <p className="mt-2 text-black font-semibold">
                ({productDetails.rating?.count})
              </p>
            </div>

            <p className="mt-2 text-black text-2xl">
              Price: {productDetails.price} ₹
            </p>
            <button
              className="mt-2 p-1 text-white text-2xl bg-indigo-500 rounded-lg"
              onClick={() => dispatch(cart(productDetails))}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductsDetails;
