const CART = {
  cart: [],
};

export default function cartReducer(state = CART, action) {
  switch (action.type) {
    case "ADDITEM":
      const exist = state.cart.findIndex((x) => x.id === action.payload.id);

      if (exist !== -1) {
        const updatedQty = {
          ...state.cart[exist],
          qty: state.cart[exist].qty + action.payload.qty,
        };
        const newCart = [...state.cart];

        newCart.splice(exist, 1, updatedQty);

        return {
          cart: newCart,
        };
      } else {
        const newCart = [...state.cart];
        newCart.push(action.payload);

        return {
          cart: newCart,
        };
      }

    case "UPDATEITEM":
      const indexItemUpdate = state.cart.findIndex(
        (x) => x.id === action.payload.id
      );
      const newCart = [...state.cart];

      newCart.splice(indexItemUpdate, 1, action.payload);

      return {
        cart: newCart,
      };
  }

  return state;
}
