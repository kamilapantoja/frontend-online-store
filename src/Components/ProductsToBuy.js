import React from 'react';
import PropTypes from 'prop-types';

class ProductsToBuy extends React.Component {
  constructor(props) {
    super(props);
    const { price } = this.props;

    this.state = {
      qtdProducts: 1,
      totalPrice: price,
    };
  }

  updateProductPrice = () => {
    const { qtdProducts } = this.state;
    const { price } = this.props;

    this.setState({
      totalPrice: qtdProducts * price,
    });
  }

  sumQtdProduct = () => {
    this.setState((prevState) => ({
      qtdProducts: prevState.qtdProducts + 1,
    }), this.updateProductPrice);
  }

  subQtdProduct = () => {
    const { qtdProducts } = this.state;
    if (qtdProducts > 1) {
      this.setState((prevState) => ({
        qtdProducts: prevState.qtdProducts - 1,
      }), this.updateProductPrice);
    }
  }

  render() {
    const { title } = this.props;
    const { qtdProducts, totalPrice } = this.state;
    return (
      <>
        <h3 data-testid="shopping-cart-product-name">
          {`Nome do Produto: ${title}`}
        </h3>
        <h3>
          {`Preço: ${totalPrice}`}
        </h3>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.subQtdProduct }
        >
          -
        </button>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.sumQtdProduct }
        >
          +
        </button>
        <h4 data-testid="shopping-cart-product-quantity">
          {`Quantidade: ${qtdProducts}`}
        </h4>
      </>
    );
  }
}

ProductsToBuy.propTypes = {
  price: PropTypes.string,
  title: PropTypes.string,
}.isRequired;

export default ProductsToBuy;
