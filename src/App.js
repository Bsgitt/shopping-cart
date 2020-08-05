//feature 1
import React from "react";
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      brand: "",
      sort: "",
    };
  }
  sortProducts = (event) => {
    //implement
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "Highest"
            ? a.price < b.price
              ? 1
              : -1
            : sort === "Lowest"
            ? a.price > b.price
              ? 1
              : -1
            : a._id > b._id
            ? 1
            : -1
        ),
    }));
  };
  filterProducts = (event) => {
    //implemant
    if (event.target.value === " ") {
      this.setState({
        brand: event.target.value,
        products: data.products,
      });
    } else {
      this.setState({
        brand: event.target.value,
        products: data.products.filter(
          (product) => product.brand.indexOf(event.target.value) >= 0
        ),
      });
    }

    console.log(event.target.value);
  };
  render() {
    return (
      <div className='grid-container'>
        <header>
          <a href='/'>Shose Shopping Cart</a>
        </header>
        <main>
          <div className='content'>
            <div className='main'>products</div>
            <Filter
              count={this.state.products.length}
              brand={this.state.brand}
              sort={this.state.sort}
              filterProducts={this.filterProducts}
              sortProducts={this.sortProducts}
            ></Filter>
            <Products products={this.state.products}></Products>
            <div className='sidebar'>Cart Iems</div>
          </div>
        </main>
        <footer>All right is reserved.</footer>
      </div>
    );
  }
}

export default App;
