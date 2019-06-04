import * as actionTypes from './actions';

const initState = {
  cart: []
};

const reducer = (state = initState, action) => {
  let tmpCart = state.cart.slice();
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      return {
        cart: addProduct(tmpCart, action.product)
      };
      break;
    case actionTypes.REMOVE_PRODUCT:
    return {
        cart: removeProduct(tmpCart, action.product)
      };
      break;
    default:
      return state;
  }
};

const addProduct = (arr, p) => {
  arr.push(p);
  return arr;
}

const removeProduct = (arr, p) => {
  return arr.filter((prod)=> {
    return p.name !== prod.name;
  })
}
export default reducer;
