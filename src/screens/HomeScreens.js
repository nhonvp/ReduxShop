import React, { Component } from 'react';
import Products from '../components/Products';
import Filter from '../components/Filter';
import Cart from '../components/Cart';

export default class HomeScreens extends Component {
  render() {
    return (
      <div>
           <div>
           <div className="content">
              <div className="main">
                <Filter
                > </Filter>
                <Products
                  addToCart={this.addToCart}
                ></Products>
              </div>
              <div className="slide-bar">
                <Cart
                ></Cart>
              </div>
            </div>
           </div>
      </div>
    )
  }
}
