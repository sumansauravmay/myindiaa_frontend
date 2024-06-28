import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cart } from "../../Redux/CartReducer/action";
import CartCard from "./CartCard";
import Loading from "../../Pages/Loading";

const Cart = () => {
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(true);
  const cartdata = useSelector((store) => store.cartReducer.cart);
  console.log("cartfromstore", cartdata);

  useEffect(() => {
    dispatch(cart());
  }, []);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <>
      {cartdata.length > 0
        ? cartdata.map((item) => (
            <CartCard
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              deletebtn={"Delete"}
            />
          ))
        : "No Data Found in The Cart"}
    </>
  );
};

export default Cart;
