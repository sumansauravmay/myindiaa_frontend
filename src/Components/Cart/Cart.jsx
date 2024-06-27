import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cart } from "../../Redux/CartReducer/action";
import axios from "axios";
import CartCard from "./CartCard";
import Loading from "../../Pages/Loading";

const Cart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading]=useState(false);
  const cartdata = useSelector((store) => store.cartReducer.cart);
  console.log("cartfromstore", cartdata);

  const getData = () => {
    setLoading(true)
    return axios
      .get("https://myindiaa-deployement.onrender.com/cart")
      .then((res) => {
        setLoading(false)
        setData(res.data);
        console.log("cartRefresh", res.data);
      });
  };

  useEffect(() => {
    async function fetchData() {
      await getData();
    }
    fetchData();
  }, []);


  if(loading){
    return <Loading/>
  }

  return (
    <>
      {cartdata.length > 0
        ? cartdata[0].map((item) => (
            <CartCard
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              checkout={"Proceed to checkout"}
            />
          ))
        : data.length > 0
        ? data.map((item) => (
            <CartCard
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              checkout={"Delete"}
            />
          ))
        : "No Cart Value"}
    </>
  );
};

export default Cart;
