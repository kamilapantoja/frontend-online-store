import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { searchProductDetails } from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      dataProduct: {},
    };
  }

  componentDidMount() {
    this.fetchDataProduct();
  }

  fetchDataProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const fetchDataProductResult = await searchProductDetails(id);
    this.setState({ dataProduct: fetchDataProductResult });
  }

  render() {
    const { dataProduct } = this.state;
    const { addToCart } = this.props;
    return (
      <section>
        <Link to="/">Voltar para Home</Link>
        <h1>Detalhes do Produto</h1>
        <span data-testid="product-detail-name">{ dataProduct.title }</span>
        <h3>{ dataProduct.price }</h3>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => addToCart(dataProduct) }
        >
          Eu quero!!
        </button>
      </section>
    );
  }
}

ProductDetails.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default ProductDetails;
