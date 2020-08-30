const {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_BRAND,
  FILTER_PRODUCTS_BY_PRICE,
} = require("../type");

export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { items: action.payload, filteredItems: action.payload };
    case FILTER_PRODUCTS_BY_BRAND:
      return {
        ...state,
        brand: action.payload.brand,
        filteredItems: action.payload.items,
      };
    case FILTER_PRODUCTS_BY_PRICE:
      return {
        ...state,
        sort: action.payload.sort,
        filteredItems: action.payload.items,
      };
    default:
      return state;
  }
};
