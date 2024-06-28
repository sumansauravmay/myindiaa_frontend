import {
  GET_CART_FAILURE,
  GET_CART_SUCCESS,
  GET_CART_REQUEST,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_FAILED,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_FAILED,
  UPDATE_CART_REQUEST,
  UPDATE_CART_SUCCESS,
} from "./actionType";
import axios from "axios";

//add to cart
const getCartRequestAction = () => {
  return { type: GET_CART_REQUEST };
};

const getCartErrorAction = () => {
  return { type: GET_CART_FAILURE };
};

const getCartSuccessAction = (payload) => {
  return { type: GET_CART_SUCCESS, payload };
};

//update the cart
export const getUpdateRequest = () => {
  return { type: UPDATE_CART_REQUEST };
};

export const getUpdateSuceess = (payload) => {
  return { type: UPDATE_CART_SUCCESS, payload };
};

export const getUpdateFailed = () => {
  return { type: UPDATE_CART_FAILED };
};

//delete the cart
const getRemoveItemReqest = () => {
  return { type: REMOVE_CART_ITEM_REQUEST };
};

const getRemoveItemSuccess = (payload) => {
  return { type: REMOVE_CART_ITEM_SUCCESS, payload };
};

const getRemoveItemFailed = () => {
  return { type: REMOVE_CART_ITEM_FAILED };
};

export const cart = (product) => async (dispatch) => {
  dispatch(getCartRequestAction());
  if (product) {
    let data = {
      ...product,
      quantity: 1,
    };
    return axios
      .post("https://myindiaa-deployement.onrender.com/cart", data)
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

export const deletecart = (id) => (dispatch) => {
  // console.log("id", id)
  dispatch(getRemoveItemReqest());
  return axios
    .delete(`https://myindiaa-deployement.onrender.com/cart/${id}`)
    .then((res) => {
      axios
        .get("https://myindiaa-deployement.onrender.com/cart")
        .then((res) => {
          console.log("dataAfterdeleted", res.data);
          dispatch(getRemoveItemSuccess(res.data));
        });
    })
    .catch((err) => {
      console.log("err2", err);
      dispatch(getRemoveItemFailed());
    });
};

export const updatecartvalue = (id, data) => (dispatch) => {
  dispatch(getUpdateRequest());
  return axios
    .patch(`https://myindiaa-deployement.onrender.com/cart/${id}`, { ...data })
    .then((res) => {
      axios
      .get("https://myindiaa-deployement.onrender.com/cart")
      .then((res) => {
        console.log("update",res.data);
        dispatch(getUpdateSuceess(res.data));
      });
    })
    .catch((err) => {
      dispatch(getUpdateFailed());
    });
};
