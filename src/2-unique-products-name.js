const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  let productsList = [...new Set(stockProducts)];
  let productsNames = productsList.map((product) => product.productName);
  return productsNames;
};

module.exports = { getUniqueProductsName };
