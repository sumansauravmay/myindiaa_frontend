import {
  GET_CART_FAILURE,
  GET_CART_SUCCESS,
  GET_CART_REQUEST,
//   GET_CART_DATA_FAILURE,
//   GET_CART_DATA_SUCCESS,
//   GET_CART_DATA_REQUEST,
} from "./actionType";

const initialState = {
  cart: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CART_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: [...state.cart, payload],
      };
    case GET_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    // case GET_CART_DATA_REQUEST:
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };

    // case GET_CART_DATA_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     cart: payload,
    //   };
    // case GET_CART_DATA_FAILURE:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isError: true,
    //   };
    default:
      return state;
  }
};
