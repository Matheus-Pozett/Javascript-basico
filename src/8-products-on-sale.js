const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  let productsOnSale = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].onSale === true) {
      productsOnSale.push({
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price}`,
        onSale: stockProducts[index].onSale,
      });
    }
  }

  return productsOnSale;
};

console.log(getProductsOnSale());

module.exports = { getProductsOnSale };
