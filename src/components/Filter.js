import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <>
        <div className='filter-result'>{this.props.count}Products</div>
        <div className='filter-sort'>
          Order
          <select value={this.props.sort} onChange={this.props.sortProducts}>
            <option value=''>All</option>
            <option value='Lowest'>Lowest</option>
            <option value='Highest'>Highest</option>
          </select>
        </div>
        <div className='filter-brand'>
          Brand Shose
          <select value={this.props.brand} onChange={this.props.filterProducts}>
            <option value=' '>All</option>
            <option value='Nike'>Nike</option>
            <option value='Adidas'>Adidas</option>
            <option value='Balenciaga'>Balenciaga</option>
          </select>
        </div>
      </>
    );
  }
}
