const stockProducts = require('./data.json');

const searchProductByName = (productName) => {
  if (!productName) {
    return null;
  }

  const search = stockProducts.find((product) => product.productName === productName);

  if (!search) {
    return null;
  }

  const newObjectProduct = {
    description: search.description,
    formattedPrice: `R$ ${search.price}`,
  };

  return newObjectProduct;
};

console.log(searchProductByName('Lentiha'));

module.exports = { searchProductByName };
