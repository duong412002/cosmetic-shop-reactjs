import * as actionType from "../actions/actionType";
import { message } from "antd";

const initialState = {
  cartAr: [],
};
const key = 'updatable';

const cartReducer = (state = initialState, action) => {

  switch (action.type) {
    case actionType.BUY_PRODUCT:
      let isPresent = false;
      const productInCart = state.cartAr.find(
        (p) => p.id === action.payload.id
      );
      console.log(typeof (productInCart))
      if (!productInCart) {
        return {
          cartAr: [...state.cartAr, action.payload],
        };
      } else {
        let newcart = state.cartAr;
        setTimeout(() => {
          message.error({ content: 'Item is exist in cart!', key, duration: 2 });
        },);
        return { cartAr: [...newcart] };
      }

    case actionType.DELETE_PRODUCT:
      let newcart = state.cartAr;
      const objIndex = newcart.findIndex((obj) => obj.id == action.payload.id);
      newcart.splice(objIndex, 1);
      setTimeout(() => {
        message.success({ content: 'Delete item success!', key, duration: 2 });
      },);
      return { cartAr: [...newcart], totalprice: 0 };

    case actionType.GET_SIZE_CART:
      const productInCarts = state.cartAr.find(
        (p) => p.id === action.payload.id
      );
      let sizeCart = state.cartAr.length;
      if (productInCarts) {
        return {
          cartAr: [...state.cartAr, action.payload],
        };
      }
      return sizeCart = 0;
    default:
      return state;
  }
};

export default cartReducer;
