import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cart,
  deletecart,
  updatecartvalue,
} from "../../Redux/CartReducer/action";
import CartCard from "./CartCard";
import Loading from "../../Pages/Loading";
import CartCheckout from "./CartCheckout";
import NoCartData from "../../Pages/NoCartData";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const cartdata = useSelector((store) => store.cartReducer.cart);
  console.log("cartfromstore", cartdata);

  useEffect(() => {
    const fetchCartData = async () => {
      setLoading(true);
      await dispatch(cart());
      setLoading(false);
    };
    fetchCartData();
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deletecart(id));
  };

  const calculateAmount = () => {
    return cartdata.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateDeliveryCharges = () => {
    if (calculateAmount() >= 1000) {
      return "Free!";
    } else {
      return 100;
    }
  };

  let x;
  const calculateTotalAmount = () => {
    if (calculateAmount() >= 1000) {
      x = calculateAmount();
    } else {
      x = calculateAmount() + calculateDeliveryCharges();
    }
    localStorage.setItem("CartAmount", JSON.stringify(x));
    // if (cartdata.length > 0) {
    //   localStorage.setItem("CartAmount", JSON.stringify(x));
    // } else {
    //   localStorage.removeItem("CartAmount");
    // }
    return x;
  };

  const handleMessage = () => {
    if (calculateAmount() >= 1000) {
      return "Congratulations, You got free delivery!";
    } else {
      let y = 1000 - calculateAmount();
      // console.log(y);
      return `Add ${y} more to get free delivery!`;
    }
  };

  const handlechekcout = () => {
    let username = JSON.parse(localStorage.getItem("username")) || "";
    if (username) {
      navigate("/");
      localStorage.removeItem("CartAmount");
    } else {
      navigate("/login");
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Helmet>
        <title>Cart Page</title>
        <meta name="description" content="All Cart Data" />
      </Helmet>

      {cartdata.length > 0 ? (
        <>
          {cartdata.map((item) => (
            <CartCard
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price * item.quantity}
              quantity={item.quantity}
              handleDecDisable={item.quantity === 1}
              handleIncDisable={item.quantity === 5}
              handleDelete={() => handleDelete(item.id)}
              handleInc={() =>
                dispatch(
                  updatecartvalue(item.id, { quantity: item.quantity + 1 })
                )
              }
              handleDec={() =>
                dispatch(
                  updatecartvalue(item.id, { quantity: item.quantity - 1 })
                )
              }
            />
          ))}
          <CartCheckout
            amount={calculateAmount()}
            delivery={calculateDeliveryCharges()}
            totalAmount={calculateTotalAmount()}
            message={handleMessage()}
            handlechekcout={handlechekcout}
          />
        </>
      ) : (
        <NoCartData />
      )}
    </>
  );
};

export default Cart;
