import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ShoppinCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import HomePage from './pages/HomePage';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      arrayProductCart: [],
    };
  }

  addToCart = (target /* { target } */) => {
    this.setState((prevState) => ({
      arrayProductCart: [...prevState.arrayProductCart, target/* target.id */],
    }));
  }

  render() {
    const { arrayProductCart } = this.state;
    return (
      <BrowserRouter>

        <Link to="/shoppin-cart" data-testid="shopping-cart-button">
          <span> Carrinho </span>
        </Link>

        <Switch>

          <Route exact path="/">
            <HomePage addToCart={ this.addToCart } />
          </Route>

          <Route exact path="/shoppin-cart">
            <ShoppinCart arrayProductCart={ arrayProductCart } />
          </Route>

          <Route
            exact
            path="/product-details/:id"
            render={ (propsRoute) => (
              <ProductDetails { ...propsRoute } addToCart={ this.addToCart } />
            ) }
          />

        </Switch>

      </BrowserRouter>
    );
  }
}

export default App;
