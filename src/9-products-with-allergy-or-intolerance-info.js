const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  let productsWithAllergyOrIntolerance = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].allergyOrIntolerance) {
      productsWithAllergyOrIntolerance.push({
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price}`,
        allergyOrIntoleranceMessage: `Pode conter: ${
          stockProducts[index].allergyOrIntolerance.join(' ')}`,
      });
    }
  }

  return productsWithAllergyOrIntolerance;
};

console.log(getProductsWithAllergyOrIntoleranceInfo());

module.exports = { getProductsWithAllergyOrIntoleranceInfo };

// `Pode conter: ${stockProducts[index].allergyOrIntolerance}`
