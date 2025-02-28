const stockProducts = require('./data.json');

const getProductsAmount = () => {
  let sumProductsAmount = 0;

  for (let index = 0; index < stockProducts.length; index += 1) {
    sumProductsAmount += stockProducts[index].quantityInStock;
  }

  return sumProductsAmount;
};

module.exports = { getProductsAmount };
