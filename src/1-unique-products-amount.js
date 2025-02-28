const stockProducts = require('./data.json');

const getUniqueProductsAmount = () => {
  const uniqueProducts = new Set(stockProducts);
  return uniqueProducts.size;
};

module.exports = { getUniqueProductsAmount };
