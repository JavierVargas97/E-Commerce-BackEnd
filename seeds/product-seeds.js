const { Product } = require('../models');
const productData = [{
  product_name: 'Zelda videogame',
  price: 50.44,
  stock: 15,
  category_id: 1,
},
{
  product_name: 'Mario Bros videogame',
  price: 35.65,
  stock: 10,
  category_id: 2,
},
{
  product_name: 'Warzone Videogame',
  price: 0.00,
  stock: 10000000,
  category_id: 3,
},
{
  product_name: 'Metal Gear Solid 4 Videogame',
  price: 47.99,
  stock: 17,
  category_id: 3,
},
{
  product_name: 'God Of War Videogame',
  price: 65.99,
  stock: 32,
  category_id: 4,
},
{
  product_name: 'Halo reach Videogame',
  price: 45.99,
  stock: 33,
  category_id: 5,
},
];
const seedProducts = () => Product.bulkCreate(productData);
module.exports = seedProducts;