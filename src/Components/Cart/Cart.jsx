import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cart, deletecart } from "../../Redux/CartReducer/action";
import CartCard from "./CartCard";
import Loading from "../../Pages/Loading";
import CartCheckout from "./CartCheckout";

const Cart = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const cartdata = useSelector((store) => store.cartReducer.cart);
  console.log("cartfromstore", cartdata);

  useEffect(() => {
    setLoading(true);
    dispatch(cart());
    setLoading(false);
  }, []);

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
    if (calculateAmount() > 1000) {
      return 0.0;
    } else {
      return 100.0;
    }
  };

  const calculateTotalAmount = () => {
    return calculateAmount() + calculateDeliveryCharges();
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
              handleDelete={() => handleDelete(item.id)}
            />
          ))}
          <CartCheckout
            amount={calculateAmount()}
            delivery={calculateDeliveryCharges()}
            totalAmount={calculateTotalAmount()}
          />
        </>
      ) : (
        "No Data Found in The Cart"
      )}
    </>
  );
};

export default Cart;
