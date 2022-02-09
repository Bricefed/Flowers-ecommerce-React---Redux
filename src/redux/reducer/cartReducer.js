const INITIAL_STATE = {
  cart: [],
};

export default function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADDITEM":
      const indexItemAdd = state.cart.findIndex(
        (x) => x.id === action.payload.id
      );

      if (indexItemAdd !== -1) {
        const updatedQty = {
          ...state.cart[indexItemAdd],
          qty: state.cart[indexItemAdd].qty + action.payload.qty,
        };

        const newArr = [...state.cart];
        newArr.splice(indexItemAdd, 1, updatedQty);
        // console.log(newArr);

        return {
          cart: newArr,
        };
      } else {
        const newArr = [...state.cart];
        newArr.push(action.payload);
        // console.log(newArr);

        return {
          cart: newArr,
        };
      }
      break;
    case "UPDATEITEM":
      const indexItemUpdate = state.cart.findIndex(
        (x) => x.id === action.payload.id
      );

      const newArr = [...state.cart];
      newArr.splice(indexItemUpdate, 1, action.payload);

      return {
        cart: newArr,
      };
      break;
    // default
    // break
  }

  return state;
}
