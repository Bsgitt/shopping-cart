//feature 1
import React from "react";
import data from "./data.json";
import Products from "./components/Products";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
  render() {
    return (
      <div className='grid-container'>
        <header>
          <a href='/'>Shose Shopping Cart</a>
        </header>
        <main>
          <div className='content'>
            <div className='main'>products</div>
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
