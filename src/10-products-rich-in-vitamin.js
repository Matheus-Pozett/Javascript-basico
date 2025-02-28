const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  let productsRichInVitamin = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].nutritionalInfo.vitamins) {
      const vitaminsObject = stockProducts[index].nutritionalInfo.vitamins;
      const vitaminsArray = Object.entries(vitaminsObject).map(([key, value]) =>
        `${key} - ${value}`);

      productsRichInVitamin.push({
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price}`,
        vitaminsInformation: vitaminsArray,
      });
    }
  }

  return productsRichInVitamin;
};

console.log(getProductsRichInVitamin());

module.exports = { getProductsRichInVitamin };
