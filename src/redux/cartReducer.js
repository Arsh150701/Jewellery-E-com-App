const initialState = {
  cartItem: 0,
  cartPrice: 0,
};

const cartReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "cart/added":
      console.log("something got added to cart");
      return { ...state, cartItem: state.cartItem + 1 };
    case "cart/removed":
      console.log("something got removed from cart");
      return { ...state, cartItem: state.cartItem - 1 };
    default:
      return state;
  }
};

export {cartReducer}
