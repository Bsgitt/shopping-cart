import {
  FILTER_PRODUCTS_BY_BRAND,
  FILTER_PRODUCTS_BY_PRICE,
  FETCH_PRODUCTS,
} from "../type";

export const fetchProducts = () => async (dispatch) => {
  const res = await fetch("/api/products");
  const data = await res.json();
  console.log(data);
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};

export const filterProducts = (products, brand) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_BY_BRAND,
    payload: {
      brand: brand,
      items:
        brand === ""
          ? products
          : products.filter((x) => x.brand.indexOf(brand) >= 0),
    },
  });
};

export const sortProducts = (filteredProducts, sort) => (dispatch) => {
  const sortedProducts = filteredProducts.slice();
  if (sort === "Highest") {
    sortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
  } else {
    sortedProducts.sort((a, b) =>
      sort === "Lowest"
        ? a.price > b.price
          ? 1
          : -1
        : a.price > b.price
        ? -1
        : 1
    );
  }
  dispatch({
    type: FILTER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: sortedProducts,
    },
  });
};
