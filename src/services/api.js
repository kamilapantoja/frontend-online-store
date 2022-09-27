export async function getCategories() {
  // Implemente aqui
  try {
    const fetchResults = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const categorias = fetchResults.json();
    return categorias;
  } catch (error) {
    return error;
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endPointCategoriaQuery = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const endPointCategoria = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  const endPointQuery = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  let url = '';

  if (categoryId !== undefined && query !== undefined) {
    url = endPointCategoriaQuery;
  } else if (categoryId !== undefined) {
    url = endPointCategoria;
  } else if (query !== undefined) {
    url = endPointQuery;
  }

  try {
    const result = await fetch(url);
    const resultJSON = result.json();
    return resultJSON;
  } catch (error) {
    return error;
  }
}

export async function searchProductDetails(id) {
  try {
    const resultById = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const resultByIdJSON = resultById.json();
    return resultByIdJSON;
  } catch (error) {
    return error;
  }
}
