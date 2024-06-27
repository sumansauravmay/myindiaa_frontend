import {
  GET_CART_FAILURE,
  GET_CART_SUCCESS,
  GET_CART_REQUEST,
} from "./actionType";
import axios from "axios";

const getCartRequestAction = () => {
  return { type: GET_CART_REQUEST };
};

const getCartErrorAction = () => {
  return { type: GET_CART_FAILURE };
};

const getCartSuccessAction = (payload) => {
  return { type: GET_CART_SUCCESS, payload };
};

export const cart = (data) => (dispatch) => {
  dispatch(getCartRequestAction());
  return axios
    .post("https://myindiaa-deployement.onrender.com/cart", data)
    .then((res) => {
      console.log("cart",res.data);
      dispatch(getCartSuccessAction(res.data));
    })
    .catch((err) => {
      console.log("err", err);
      dispatch(getCartErrorAction());
    });
};




