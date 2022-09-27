import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductsToBuy from '../Components/ProductsToBuy';

class ShoppinCart extends Component {
  render() {
    const { arrayProductCart } = this.props;
    return (
      <>
        {arrayProductCart.length === 0 ? (
          <span data-testid="shopping-cart-empty-message"> Seu carrinho está vazio </span>
        ) : (
          <ul>
            { arrayProductCart.map((currentItemProduct/* , index */) => (
              <section key={ currentItemProduct.id /* index */ }>
                <ProductsToBuy { ...currentItemProduct } />
              </section>
            ))}
          </ul>
        )}
        <h1>...</h1>
      </>
    );
  }
}

ShoppinCart.propTypes = {
  arrayProductCart: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default ShoppinCart;
