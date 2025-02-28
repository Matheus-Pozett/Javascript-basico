const stockProducts = require('./data.json');

const searchProductsByBrand = (brandName) => {
  let productsByBrand = [];

  if (!brandName) {
    return productsByBrand;
  }

  let searchByBrand = stockProducts.filter((product) => product.brand === brandName);

  for (let index = 0; index < searchByBrand.length; index += 1) {
    productsByBrand.push({
      description: searchByBrand[index].description,
      formattedPrice: `R$ ${searchByBrand[index].price}`,
    });
  }

  return productsByBrand;
};

console.log(searchProductsByBrand('Hortifrti'));

module.exports = { searchProductsByBrand };
