import React from 'react';
import PropTypes from 'prop-types';
/* import './App.css'; */

class ListaProduto extends React.Component {
  render() {
    const { handleInput, handleClick } = this.props;
    return (
      <>
        <label htmlFor="searchFor" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            id="searchFor"
            data-testid="query-input"
            type="text"
            onChange={ handleInput }
            /* defaultValue={ searchFor } */
          />
        </label>
        <button
          data-testid="query-button"
          type="submit"
          onClick={ handleClick }
        >
          Pesquisar
        </button>
      </>
    );
  }
}

ListaProduto.propTypes = {
  searchFor: PropTypes.string,
  handleClick: PropTypes.func,
  handleInput: PropTypes.func,
}.isRequired;

export default ListaProduto;
