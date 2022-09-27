import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ListaProduto from './ListaProduto';
import CategoryList from './CategoryList';
import { getProductsFromCategoryAndQuery } from '../services/api';

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      searchFor: '',
      arrayProdutcs: [],
    };
  }

  handleInput = (event) => {
    const { value } = event.target;
    this.setState({
      searchFor: value,
    });
    console.log(value);
  };

  handleClick = async (event) => {
    event.preventDefault();
    const { searchFor } = this.state;
    const searchResults = await getProductsFromCategoryAndQuery(undefined, searchFor);
    const { results } = searchResults;
    this.setState({
      arrayProdutcs: results,
    });
  }

  handleCategoryClick = async ({ target }) => {
    fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${target.id}`)
      .then((response) => response.json())
      .then((data) => this.setState({ arrayProdutcs: data.results }));
  }

  render() {
    const { arrayProdutcs } = this.state;
    const { addToCart } = this.props;
    return (
      <>
        <header>
          <ListaProduto
            handleClick={ this.handleClick }
            handleInput={ this.handleInput }
          />
          <CategoryList
            handleCategoryClick={ this.handleCategoryClick }
          />
        </header>

        <main>
          <ul>
            {arrayProdutcs.map((currentItem) => (
              <li key={ currentItem.id } data-testid="product">
                <Link
                  data-testid="product-detail-link"
                  to={ `/product-details/${currentItem.id}` }
                >
                  <span>{ currentItem.title }</span>
                  <img src={ currentItem.thumbnail } alt={ currentItem.title } />
                  <span>{ currentItem.salePrice }</span>
                </Link>
                <button
                  // id={ currentItem.title }
                  onClick={ () => addToCart(currentItem) } // onClick={ addToCart }
                  type="button"
                  data-testid="product-add-to-cart"
                >
                  Adicionar ao Carrinho
                </button>
              </li>
            ))}
          </ul>
        </main>
      </>
    );
  }
}

HomePage.propTypes = {
  addToCart: PropTypes.func,
}.isRequired;

export default HomePage;
