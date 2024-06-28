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

const Cart = () => {
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
      return 0;
    } else {
      return 100;
    }
  };

  let x;
  const calculateTotalAmount = () => {
    x = calculateAmount() + calculateDeliveryCharges();
    return x;
  };

  const handleMessage = () => {
    if (calculateAmount() >= 1000) {
      return "Congratulations, You got free delivery!";
    } else {
      let y = 1000 - calculateAmount();
      console.log(y);
      return `Add ${y} more to get free delivery!`;
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {cartdata.length > 0 ? (
        <>
          {cartdata.map((item) => (
            <CartCard
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              handleDisable={item.quantity === 1}
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
          />
        </>
      ) : (
        "No Data Found in The Cart"
      )}
    </>
  );
};

export default Cart;
