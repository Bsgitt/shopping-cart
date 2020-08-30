import React, { Component } from "react";
import { filterProducts, sortProducts } from "../actions/ProductAction";
import { connect } from "react-redux";

class Filter extends Component {
  render() {
    return !this.props.filteredProducts ? (
      <div>Loading...</div>
    ) : (
      <div className='filter'>
        <div className='filter-result'>
          {this.props.filteredProducts.length}Products
        </div>
        <div className='filter-sort'>
          Order
          <select
            value={this.props.sort}
            onChange={(e) =>
              this.props.sortProducts(
                this.props.filteredProducts,
                e.target.value
              )
            }
          >
            <option value=''>All</option>
            <option value='Lowest'>Lowest</option>
            <option value='Highest'>Highest</option>
          </select>
        </div>
        <div className='filter-brand'>
          Brand Shose
          <select
            value={this.props.brand}
            onChange={(e) =>
              this.props.filterProducts(this.props.products, e.target.value)
            }
          >
            <option value=' '>All</option>
            <option value='Nike'>Nike</option>
            <option value='Adidas'>Adidas</option>
            <option value='Balenciaga'>Balenciaga</option>
          </select>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    brand: state.products.brand,
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
  }),
  {
    filterProducts,
    sortProducts,
  }
)(Filter);
