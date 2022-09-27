import React from 'react';
import PropTypes from 'prop-types';
import {
  getCategories,
  /* getProductsFromCategoryAndQuery, */
} from '../services/api';

class CategoryList extends React.Component {
  constructor() {
    super();
    this.state = {
      category: [],
      /* arrayProdutcs: [], */

    };
  }

  componentDidMount() {
    getCategories().then((category) => this.setState({ category }));
  }

  /* handleClick = async ({ target }) => {
     const { arrayProdutcs } = this.state;
     fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${target.id}`)
       .then((response) => response.json())
       .then((data) => this.setState({ arrayProdutcs: data.results }));
     console.log(arrayProdutcs);
   } */

  render() {
    const {
      category,
      /* arrayProdutcs, */
    } = this.state;
    const {
      handleCategoryClick,
    } = this.props;
    return (
      <>
        <div>
          {category.map((categoria) => (
            <button
              id={ categoria.id }
              data-testid="category"
              type="button"
              key={ categoria.id }
              onClick={ handleCategoryClick }
            >
              {categoria.name}
            </button>))}
        </div>
        {/* <ul>
           {arrayProdutcs.map((currentProd) => (
             <li key={ currentProd.id } data-testid="product">
               <span>{ currentProd.title }</span>
               <img src={ currentProd.thumbnail } alt={ currentProd.title } />
               <span>{ currentProd.salePrice }</span>
             </li>
           ))}
         </ul> */}
      </>
    );
  }
}

CategoryList.propTypes = {
  handleCategoryClick: PropTypes.func.isRequired,
};

export default CategoryList;
