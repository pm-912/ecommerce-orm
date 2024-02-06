// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Category.hasMany(Product, {
  foreignKey:'category_id',
  onDelete: "SET NULL",
});

Product.belongtoMany(Tag, { through: 'ProductTag' });
Tag.belongtoMany(Product, { through: 'ProductTag' });


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
