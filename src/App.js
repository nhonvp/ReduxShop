import React, { Component } from 'react';
import './App.css';
import HomeScreens from './screens/HomeScreens';
import AdminScreen from './screens/AdminScreens';
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from 'react-router-dom';
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     products: data.products,
  //     cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
  //     size: "",
  //     sort: "",
  //   };
  // }
  // addToCart = (product) => {
  //   const cartItems = this.state.cartItems.slice();
  //   let alreadyInCart = false;
  //   cartItems.forEach((item) => {
  //     if (item.id === product.id) {
  //       item.count++;
  //       alreadyInCart = true;
  //     }
  //   });
  //   if (!alreadyInCart) {
  //     cartItems.push({ ...product, count: 1 });
  //   }
  //   this.setState({ cartItems });
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // };
  // removeFromCart = (product) => {
  //   const cartItems = this.state.cartItems.slice();
  //   this.setState({
  //     cartItems: cartItems.filter(x => x.id !== product.id),
  //   });
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems.filter(x => x.id !== product.id)));
  // }
  // createOrder = () => {
  //   alert('abc');
  // }
  // FilterProducts = (event) => {
  //   console.log(event.target.value);
  //   if (event.target.value === "") {
  //     this.setState({
  //       size: event.target.value,
  //       product: data.products
  //     });
  //   } else {
  //     this.setState({
  //       size: event.target.value,
  //       products: data.products.filter((product) =>
  //         product.availableSizes.indexOf(event.target.value) >= 0
  //       ),
  //     });
  //   }
  // }
  // SortProducts = (event) => {
  //   const sort = event.target.value;
  //   console.log(event.target.value);
  //   this.setState((state) => ({
  //     sort: sort,
  //     products: this.state.products.slice().sort((a, b) =>
  //       sort === "lowest" ? a.price > b.price ? 1 : -1 :
  //         sort === "hightest" ? a.price < b.price ? 1 : -1 :
  //           a.id < b.id ? 1 : -1

  //     ),
  //   }))

  // }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="gird-container">
            <header>
              <Link to="/">Home</Link>
              <Link to="/admin">Admin</Link>
            </header>
            <main>
              <Route path="/admin" component={AdminScreen}></Route>
              <Route path="/" exact component={HomeScreens}></Route>
            </main>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
