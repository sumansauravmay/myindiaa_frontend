import {
  GET_CART_FAILURE,
  GET_CART_SUCCESS,
  GET_CART_REQUEST,
  //   GET_CART_DATA_FAILURE,
  //   GET_CART_DATA_SUCCESS,
  //   GET_CART_DATA_REQUEST,
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



export const cart = (data) => async (dispatch) => {
  dispatch(getCartRequestAction());
  if (data) {
    let data2={
      ...data,
      quantity:1
    }
    return axios
      .post("https://myindiaa-deployement.onrender.com/cart", data2)
      .then((res) => {
        axios
          .get("https://myindiaa-deployement.onrender.com/cart")
          .then((res) => {
            console.log("cart", res.data);
            dispatch(getCartSuccessAction(res.data));
          });
      })
      .catch((err) => {
        console.log("err", err);
        dispatch(getCartErrorAction());
      });
  } else {
    axios
      .get("https://myindiaa-deployement.onrender.com/cart")
      .then((res) => {
        console.log("cart", res.data);
        dispatch(getCartSuccessAction(res.data));
      })
      .catch((err) => {
        console.log("err", err);
        dispatch(getCartErrorAction());
      });
  }
};

// export const cartData=()=>(dispatch)=>{
//     dispatch(getCartDataRequestAction());
//     return axios
//       .get("https://myindiaa-deployement.onrender.com/cart")
//       .then((res) => {
//         console.log("cart",res.data);
//         dispatch(getCartDataSuccessAction(res.data));
//       })
//       .catch((err) => {
//         console.log("err2", err);
//         dispatch(getCartDataErrorAction());
//       });
// }
